"""API viewsets test cases."""

from unittest import mock

from django.urls import reverse

from kalabash.admin import factories as admin_factories
from kalabash.lib.tests import KbashAPITestCase

from .. import models


class AccountViewSetTestCase(KbashAPITestCase):
    """Account viewset tests."""

    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        admin_factories.populate_database()

    @mock.patch("django_otp.plugins.otp_totp.models.TOTPDevice.verify_token")
    def test_tfa_setup_process(self, verify_mock, password_ok="password"):
        admin = models.User.objects.get(username="admin")
        self.client.force_login(admin)

        # First, check if we're in the initial state
        security_url = reverse("core:user_security")
        response = self.client.get(security_url)
        self.assertIn("not yet activated for", response.json()["content"])

        # Start setup sequence
        url = reverse("v1:account-tfa-setup")
        response = self.client.post(url)
        self.assertEqual(response.status_code, 200)

        # Check if security page is up-to-date
        security_url = reverse("core:user_security")
        response = self.client.get(security_url)
        self.assertIn("FreeOTP", response.json()["content"])

        # Continue setup sequence
        verify_mock.side_effect = [True]
        url = reverse("v1:account-tfa-setup-check")
        data = {"pin_code": "1234"}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, 200)

        # Display recovery tokens
        security_url = reverse("core:user_security")
        response = self.client.get(security_url)

        self.assertIn("recovery codes", response.json()["content"])
        admin.refresh_from_db()
        self.assertTrue(admin.totp_enabled)
        self.assertTrue(admin.tfa_enabled)
        device = admin.staticdevice_set.first()
        self.assertIsNot(device, None)
        self.assertEqual(device.token_set.count(), 10)

        # Try to disable TFA auth
        url = reverse("api:account-tfa-disable")
        data = {"password": password_ok}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, 200)
        self.assertFalse(admin.totpdevice_set.exists())

    def test_tfa_reset_codes(self, password_ok="password"):
        admin = models.User.objects.get(username="admin")
        self.client.force_login(admin)
        url = reverse("api:account-tfa-reset-codes")
        data = {"password": password_ok}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, 403)

        device = admin.staticdevice_set.create(name="Device")
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(device.token_set.count(), 10)

# Generated by Django 1.11.8 on 2018-01-12 15:58
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("admin", "0011_domain_transport"),
    ]

    operations = [
        migrations.AddField(
            model_name="domain",
            name="dkim_key_length",
            field=models.PositiveIntegerField(
                blank=True,
                choices=[(1024, "1024"), (2048, "2048"), (4096, "4096")],
                null=True,
                verbose_name="Key length",
            ),
        ),
        migrations.AddField(
            model_name="domain",
            name="dkim_key_selector",
            field=models.CharField(
                default="kalabash", max_length=30, verbose_name="Key selector"
            ),
        ),
        migrations.AddField(
            model_name="domain",
            name="dkim_private_key_path",
            field=models.CharField(blank=True, max_length=254),
        ),
        migrations.AddField(
            model_name="domain",
            name="dkim_public_key",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="domain",
            name="enable_dkim",
            field=models.BooleanField(
                default=False,
                help_text="If you activate this feature, a DKIM key will be generated for this domain.",
                verbose_name="Enable DKIM signing",
            ),
        ),
    ]

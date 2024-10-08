# Generated by Django 4.2.11 on 2024-05-02 16:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0027_alter_user_language"),
    ]

    operations = [
        migrations.CreateModel(
            name="UserFidoKey",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("added_on", models.DateTimeField(auto_now_add=True)),
                ("last_used", models.DateTimeField(default=None, null=True)),
                ("use_count", models.IntegerField(default=0)),
                ("credential_data", models.TextField()),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]

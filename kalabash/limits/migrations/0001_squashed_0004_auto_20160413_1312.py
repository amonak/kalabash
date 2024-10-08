# Generated by Django 2.0.13 on 2020-01-04 17:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion

import kalabash.limits.models


class Migration(migrations.Migration):

    replaces = [
        ("limits", "0001_initial"),
        ("limits", "0002_auto_20151114_1518"),
        ("limits", "0003_auto_20160413_1046"),
        ("limits", "0004_auto_20160413_1312"),
    ]

    initial = True

    dependencies = [
        ("admin", "0001_initial"),
        ("contenttypes", "0002_remove_content_type_name"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="UserObjectLimit",
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
                ("name", models.CharField(max_length=254)),
                ("max_value", models.IntegerField(default=0)),
                (
                    "content_type",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="contenttypes.ContentType",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.AlterUniqueTogether(
            name="userobjectlimit",
            unique_together=set([("user", "name")]),
        ),
        migrations.CreateModel(
            name="DomainObjectLimit",
            fields=[
                (
                    "id",
                    models.AutoField(
                        verbose_name="ID",
                        serialize=False,
                        auto_created=True,
                        primary_key=True,
                    ),
                ),
                ("name", models.CharField(max_length=254)),
                ("max_value", models.IntegerField(default=0)),
                (
                    "domain",
                    models.ForeignKey(to="admin.Domain", on_delete=models.CASCADE),
                ),
            ],
            bases=(kalabash.limits.models.ObjectLimitMixin, models.Model),
        ),
        migrations.AlterUniqueTogether(
            name="domainobjectlimit",
            unique_together=set([("domain", "name")]),
        ),
    ]

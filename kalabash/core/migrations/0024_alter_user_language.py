# Generated by Django 3.2.16 on 2023-02-23 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0023_auto_20221012_0911"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="language",
            field=models.CharField(
                choices=[
                    ("en", "english"),
                    ("fr", "français"),
                    ("pt", "português"),
                ],
                default="en",
                help_text="Prefered language to display pages.",
                max_length=10,
                verbose_name="language",
            ),
        ),
    ]

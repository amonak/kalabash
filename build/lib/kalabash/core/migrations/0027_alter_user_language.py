# Generated by Django 4.2.11 on 2024-03-20 11:11

from django.db import migrations, models
import kalabash.core.models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0026_alter_localconfig__parameters_and_more"),
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
                default=kalabash.core.models.get_default_language,
                help_text="Prefered language to display pages.",
                max_length=10,
                verbose_name="language",
            ),
        ),
    ]
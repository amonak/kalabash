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
                    ("br", "breton"),
                    ("cs", "čeština"),
                    ("de", "deutsch"),
                    ("en", "english"),
                    ("el", "ελληνικά"),
                    ("es", "español"),
                    ("fi", "Suomalainen"),
                    ("fr", "français"),
                    ("it", "italiano"),
                    ("ja", "日本の"),
                    ("nl", "nederlands"),
                    ("pt", "português"),
                    ("pt-br", "português (BR)"),
                    ("pl", "polski"),
                    ("ro", "Română"),
                    ("ru", "русский"),
                    ("sv", "svenska"),
                    ("tr", "türk"),
                    ("zh-hant", "中文（台灣）"),
                ],
                default="en",
                help_text="Prefered language to display pages.",
                max_length=10,
                verbose_name="language",
            ),
        ),
    ]
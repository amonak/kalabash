# Generated by Django 1.10.5 on 2017-02-15 12:28
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin', '0009_auto_20170215_0948'),
    ]

    operations = [
        migrations.AddField(
            model_name='domain',
            name='quota',
            field=models.PositiveIntegerField(default=0, help_text='Quota in MB shared between mailboxes. A value of 0 means no quota.'),
        ),
        migrations.AlterField(
            model_name='domain',
            name='default_mailbox_quota',
            field=models.PositiveIntegerField(default=0, help_text='Default quota in MB applied to mailboxes. A value of 0 means no quota.', verbose_name='Default mailbox quota'),
        ),
        migrations.AlterField(
            model_name='mailbox',
            name='quota',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
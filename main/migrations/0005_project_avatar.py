# Generated by Django 3.0.7 on 2020-08-16 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_remove_project_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='avatar',
            field=models.ImageField(default='', upload_to='images'),
        ),
    ]
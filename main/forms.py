from django.contrib.outh.forms import UserCreationForm
from django import forms

class UserRegister(UserCreationForm):
  email = forms.EmailField(required = True)

  field_order = ['username', 'email', 'password', 'repassword']
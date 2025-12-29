from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'phone', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': 'e.g John Doe'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-input',
                'placeholder': 'e.g johndoe@mail.com'
            }),
            'phone': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': 'Phone Number'
            }),
            'message': forms.Textarea(attrs={
                'class': 'form-textarea',
                'placeholder': 'Write message...',
                'rows': 5
            }),
        }

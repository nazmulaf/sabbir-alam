from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm

def home(request):
    return render(request, 'home.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            contact = form.save()
            
            # Send email notification
            try:
                send_mail(
                    subject=f'New Contact Message from {contact.name}',
                    message=f'Name: {contact.name}\nEmail: {contact.email}\nPhone: {contact.phone}\n\nMessage:\n{contact.message}',
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=['anazmul163@gmail.com'],
                    fail_silently=False,
                )
            except Exception as e:
                print(f"Email error: {e}")
            
            messages.success(request, 'Your message has been sent successfully!')
            return redirect('contact')
    else:
        form = ContactForm()
    
    return render(request, 'contact.html', {'form': form})

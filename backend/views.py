from django.shortcuts import render, redirect
from django.http import HttpResponse


from django.views.generic import TemplateView



def home_page(request):
    if request.method == 'POST':
        print(request.POST)
    return HttpResponse('hello')
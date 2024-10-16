from django.urls import path
from . import views

urlpatterns = [
    path('', views.cargar_estados, name='cargar_estados'),
    path('cargar-municipios/', views.cargar_municipios, name='cargar_municipios'),
]

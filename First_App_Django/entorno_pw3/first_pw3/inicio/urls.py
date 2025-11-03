from django.urls import path
from inicio import views # Assuming 'my_app' is the name of your app

urlpatterns = [
    path('', views.inicio, name='inicio') # This handles the empty path
    # ... other URL patterns
]
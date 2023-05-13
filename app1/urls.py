from django.urls import path
from app1.views import ErrView

app_name = 'app1'

urlpatterns = [
    path('err',ErrView.as_view()),
]
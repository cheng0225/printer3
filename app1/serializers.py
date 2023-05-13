from rest_framework import serializers
from app1.models import Errorlog

class ErrorlogSer(serializers.ModelSerializer):

    class Meta:
        model = Errorlog
        fields = '__all__'

class FileSer(serializers.Serializer):

    file = serializers.FileField()
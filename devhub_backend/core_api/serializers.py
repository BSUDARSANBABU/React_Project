# core_api/serializers.py

from rest_framework import serializers
from .models import Developer, Project, Resource

class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ResourceSerializer(serializers.ModelSerializer):
    author_name = serializers.ReadOnlyField(source='author.name') # Show author name in API

    class Meta:
        model = Resource
        fields = '__all__'
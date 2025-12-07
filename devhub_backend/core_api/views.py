# core_api/views.py

from rest_framework import viewsets
from .models import Developer, Project, Resource
from .serializers import DeveloperSerializer, ProjectSerializer, ResourceSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

class DeveloperViewSet(viewsets.ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer
    # Allow read access for everyone, but only admin can CUD
    permission_classes = [IsAuthenticatedOrReadOnly] 

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
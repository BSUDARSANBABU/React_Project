from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('services', ServiceViewSet)
router.register('technologies', TechnologyViewSet)
router.register('projects', ProjectViewSet)
router.register('developers', DeveloperViewSet)
router.register('blogs', BlogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

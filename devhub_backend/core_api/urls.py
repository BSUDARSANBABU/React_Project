from rest_framework.routers import DefaultRouter
from .views import DeveloperViewSet, ProjectViewSet, ResourceViewSet

router = DefaultRouter()
router.register(r'developers', DeveloperViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'resources', ResourceViewSet)

urlpatterns = router.urls

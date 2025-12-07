from django.db import models

# Create your models here.
# core_api/models.py

from django.db import models
from django.contrib.auth.models import User

# --- Developer Profile ---
class Developer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100) # e.g., 'Senior Frontend Developer'
    bio = models.TextField()
    profile_image = models.ImageField(upload_to='developers/', blank=True, null=True)
    github_link = models.URLField(blank=True)
    linkedin_link = models.URLField(blank=True)

    def __str__(self):
        return self.name

# --- Project ---
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies_used = models.CharField(max_length=255) # Comma separated list
    project_image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github_repo = models.URLField(blank=True)
    live_link = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title

# --- Resource (like a Blog/Guide) ---
class Resource(models.Model):
    CATEGORY_CHOICES = [
        ('BLOG', 'Blog'),
        ('GUIDE', 'Guide'),
        ('TOOL', 'Tool/Calculator'),
        ('GLOSSARY', 'Glossary Item'),
    ]
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES, default='BLOG')
    content = models.TextField()
    author = models.ForeignKey(Developer, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.category}: {self.title}"
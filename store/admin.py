from django.contrib import admin
from .models import ShoeCategory, Product, ShoeSize, ProductImage

@admin.register(ShoeCategory)
class ShoeCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

class ShoeSizeInline(admin.TabularInline):
    model = ShoeSize
    extra = 1

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    max_num = 10

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'gender', 'shoe_type', 'price', 'available', 'created', 'updated']
    list_filter = ['available', 'created', 'updated', 'category', 'gender', 'shoe_type']
    list_editable = ['price', 'available']
    prepopulated_fields = {'slug': ('name',)}
    inlines = [ShoeSizeInline, ProductImageInline]

@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['product', 'image', 'is_main', 'order']
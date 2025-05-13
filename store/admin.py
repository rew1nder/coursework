from django.contrib import admin
from .models import ShoeCategory, Product, ShoeSize, ProductImage, Order, OrderItem

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

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ['product', 'price', 'quantity', 'size']

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name', 'email', 'city', 'status', 'created_at', 'total_cost']
    list_filter = ['status', 'created_at']
    readonly_fields = ['id', 'created_at', 'updated_at', 'total_cost']
    inlines = [OrderItemInline]
    
@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['order', 'product', 'price', 'quantity', 'size']
    list_filter = ['order']
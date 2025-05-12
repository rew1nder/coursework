from django.urls import path
from . import views

app_name = 'store'

urlpatterns = [
    path('', views.index, name='index'),
    path('products/', views.product_list, name='product_list'),
    path('category/<slug:category_slug>/', views.product_list, name='product_list_by_category'),
    path('products/<int:id>/<slug:slug>/', views.product_detail, name='product_detail'),
    path('search/', views.search_products, name='search_products'),
    # Cart URLs
    path('cart/', views.cart_view, name='cart_view'),
    path('cart/add/', views.cart_add, name='cart_add'),
    path('cart/update/', views.cart_update, name='cart_update'),
    path('cart/remove/', views.cart_remove, name='cart_remove'),
    # Checkout URLs
    path('checkout/', views.checkout, name='checkout'),
    path('checkout/place-order/', views.place_order, name='place_order'),
    path('order/confirmation/<uuid:order_id>/', views.order_confirmation, name='order_confirmation'),
]
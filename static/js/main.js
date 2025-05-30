// main.js - Script for Nike Shoes Store

document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    const increaseBtn = document.getElementById('increase-quantity');
    const decreaseBtn = document.getElementById('decrease-quantity');

    if (quantityInput && increaseBtn && decreaseBtn) {
        // Видаляємо попередні обробники, клонуючи кнопки
        increaseBtn.replaceWith(increaseBtn.cloneNode(true));
        decreaseBtn.replaceWith(decreaseBtn.cloneNode(true));

        // Отримуємо нові посилання після клонування
        const newIncreaseBtn = document.getElementById('increase-quantity');
        const newDecreaseBtn = document.getElementById('decrease-quantity');

        newIncreaseBtn.addEventListener('click', function() {
            const currentVal = parseInt(quantityInput.value) || 1;
            const maxVal = parseInt(quantityInput.getAttribute('max')) || 10;
            if (currentVal < maxVal) {
                quantityInput.value = currentVal + 1;
            }
        });

        newDecreaseBtn.addEventListener('click', function() {
            const currentVal = parseInt(quantityInput.value) || 1;
            const minVal = parseInt(quantityInput.getAttribute('min')) || 1;
            if (currentVal > minVal) {
                quantityInput.value = currentVal - 1;
            }
        });

        quantityInput.addEventListener('change', function() {
            const currentVal = parseInt(quantityInput.value) || 1;
            const minVal = parseInt(quantityInput.getAttribute('min'));
            const maxVal = parseInt(quantityInput.getAttribute('max'));
            
            if (currentVal < minVal) {
                quantityInput.value = minVal;
            } else if (currentVal > maxVal) {
                quantityInput.value = maxVal;
            }
        });
    }

    // Add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const selectedSize = document.querySelector('input[name="size"]:checked');
            
            if (!selectedSize) {
                showAlert('Будь ласка, оберіть розмір', 'danger');
                return;
            }
            
            // Here would be the logic to add the product to the cart
            // For now, we'll just show a success message
            showAlert('Товар додано до кошика!', 'success');
            
            // Animation effect
            animateCartIcon();
        });
    }
    // Buy now button
     const buyNowBtn = document.getElementById('buy-now');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const selectedSize = document.querySelector('input[name="size"]:checked');
            const cartErrorAlert = document.getElementById('cart-error');
            if (cartErrorAlert) cartErrorAlert.classList.add('d-none');
            if (!selectedSize) {
                if (cartErrorAlert) {
                    cartErrorAlert.textContent = 'Будь ласка, оберіть розмір';
                    cartErrorAlert.classList.remove('d-none');
                } else {
                    alert('Будь ласка, оберіть розмір');
                }
                return;
            }
            
            window.location.href = "/checkout/";
        });
    }
    // Product image gallery (if implemented)
    const productThumbnails = document.querySelectorAll('.product-thumbnail');
    if (productThumbnails.length > 0) {
        const mainImage = document.querySelector('.product-detail-img');
        
        productThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                mainImage.src = this.getAttribute('data-image');
                
                // Remove active class from all thumbnails
                productThumbnails.forEach(item => item.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
            });
        });
    }

    // Helper function to show alerts
    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-4`;
        alertDiv.setAttribute('role', 'alert');
        alertDiv.style.zIndex = '1050';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Auto dismiss after 3 seconds
        setTimeout(() => {
            alertDiv.classList.remove('show');
            setTimeout(() => {
                alertDiv.remove();
            }, 150);
        }, 3000);
    }
    
    // Animation for cart icon
    function animateCartIcon() {
        const cartIcon = document.querySelector('.add-to-cart-btn i');
        if (cartIcon) {
            cartIcon.classList.add('fa-bounce');
            setTimeout(() => {
                cartIcon.classList.remove('fa-bounce');
            }, 1000);
        }
    }

    // Enable all tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Custom filter for splitting strings in templates
if (typeof django !== 'undefined' && django.templatetags) {
    django.templatetags.add('split', function(value, arg) {
        return value.split(arg);
    });
}
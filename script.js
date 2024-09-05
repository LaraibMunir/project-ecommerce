// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            displayProducts(category);
        });
    });

    // Check if on cart page, if so display cart items
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
});

// Function to display products under the selected category
function displayProducts(category) {
    fetchProductsByCategory(category).then(products => {
        let productsContainer;

        // Identify the container based on the category
        if (['silk', 'organza', 'crinkle', 'lawn'].includes(category)) {
            productsContainer = document.getElementById('hijab-products');
        } else {
            productsContainer = document.getElementById('accessories-products');
        }

        // Clear existing products
        productsContainer.innerHTML = '';

        // Display fetched products
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button onclick="viewProductDetails('${product.id}')">View Details</button>
            `;
            productsContainer.appendChild(productItem);
        });
    });
}

// Redirect to product details page with product ID in the URL
function viewProductDetails(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}

// Add product to cart
function addToCart(productId, productName, productPrice) {
    const quantity = parseInt(document.getElementById('quantity').value); // Get selected quantity
    const cart = loadCart();
    const existingProduct = cart.find(product => product.id === productId);

    if (existingProduct) {
        // If product already exists in cart, update quantity
        existingProduct.quantity += quantity;
    } else {
        // If product is not in cart, add new product
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: quantity
        });
    }

    saveCart(cart); // Save updated cart in localStorage

    // Display a prompt with the option to view the cart
    if (confirm('Added to cart. Do you want to view the cart?')) {
        window.location.href = 'cart.html'; // Redirect to cart page if user clicks "OK"
    }
}

// Load cart from localStorage
function loadCart() {
    return JSON.parse(localStorage.getItem('cart')) || []; // Load cart or return empty array if no items
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart items to localStorage
}

// Display cart items on the cart page
function displayCartItems() {
    const cart = loadCart();
    const cartContainer = document.getElementById('cart-container');
    const totalPriceContainer = document.getElementById('total-price');
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceContainer.innerText = `Total: $0`;
        return;
    }

    // Clear the container
    cartContainer.innerHTML = '';

    // Display each product in the cart
    cart.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('cart-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <p>Total: $${product.price * product.quantity}</p>
        `;
        cartContainer.appendChild(productItem);

        totalPrice += product.price * product.quantity;
    });

    // Display total price
    totalPriceContainer.innerText = `Total: $${totalPrice}`;
}

// Function to proceed to checkout or complete purchase
function proceedToCheckout() {
    alert('Proceeding to checkout...');
    // Add logic for proceeding to checkout
}

  // Check if on cart page
  if (window.location.pathname.includes('cart.html')) {
    displayCartItems();

    // Add event listener for the "Continue Shopping" button
    const continueShoppingBtn = document.getElementById('continue-shopping');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function () {
            window.location.href = 'shop.html'; // Redirect to the shop page
        });
    }

    // Add event listener for the "Proceed" button
    const proceedCheckoutBtn = document.getElementById('proceed-checkout');
    if (proceedCheckoutBtn) {
        proceedCheckoutBtn.addEventListener('click', function () {
            proceedToCheckout(); // Proceed to checkout logic
        });
    }
};






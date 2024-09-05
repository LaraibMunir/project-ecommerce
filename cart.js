// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();

    // Add event listener for the "Continue Shopping" button
    const continueShoppingBtn = document.getElementById('continue-shopping');
    continueShoppingBtn.addEventListener('click', function () {
        window.location.href = 'shop.html'; // Redirect to the shop page
    });

    // Add event listener for the "Proceed" button
    const proceedCheckoutBtn = document.getElementById('proceed-checkout');
    proceedCheckoutBtn.addEventListener('click', function () {
        proceedToCheckout(); // Proceed to checkout logic
    });
});

// Load cart from localStorage
function loadCart() {
    return JSON.parse(localStorage.getItem('cart')) || []; // Load cart or return empty array if no items
}

// Display cart items on the cart page
function displayCartItems() {
    const cart = loadCart();
    const cartContainer = document.getElementById('cart-container');
    const totalPriceContainer = document.getElementById('total-price'); // Correct reference to total price
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceContainer.innerText = `Total: $0`; // Show total as $0 if no items in cart
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

        // Calculate the total price of the cart
        totalPrice += product.price * product.quantity;
    });

   
}

// Function to proceed to checkout or complete purchase
function proceedToCheckout() {
    alert('Proceeding to checkout...');
    // Add logic for proceeding to checkout
}


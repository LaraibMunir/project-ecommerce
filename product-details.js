// Function to get the product ID from the URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Fetch product details by ID and display them
function fetchProductDetails(productId) {
    fetchProductById(productId).then(product => {
        if (product) {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').textContent = `Price: ${product.price}`;
            document.getElementById('product-description').textContent = product.description;
        } else {
            document.getElementById('product-details-container').innerHTML = '<p>Product not found.</p>';
        }
    });
}

// Event listener for Add to Cart button
document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.addEventListener('click', function () {
        const quantity = document.getElementById('quantity').value;
        alert(`Added ${quantity} item(s) to cart`);
    });

    // Fetch and display product details
    const productId = getProductIdFromURL();
    fetchProductDetails(productId);
});



// Simulated API fetching function for all products by category
function fetchProductsByCategory(category) {
    return new Promise((resolve) => {
        const products = {
            silk: [
                { id: '1', name: 'Silk Scarf 1', price: '$10', description: 'High-quality silk scarf.' },
                { id: '2', name: 'Silk Scarf 2', price: '$12', description: 'Luxurious silk scarf.' },
            ],
            organza: [
                { id: '3', name: 'Organza Scarf 1', price: '$15', description: 'Elegant organza scarf.' },
                { id: '4', name: 'Organza Scarf 2', price: '$18', description: 'Beautiful organza scarf.' },
            ],
            crinkle: [
                { id: '5', name: 'Crinkle Scarf 1', price: '$8', description: 'Stylish crinkle scarf.' },
                { id: '6', name: 'Crinkle Scarf 2', price: '$10', description: 'Comfortable crinkle scarf.' },
            ],
            lawn: [
                { id: '7', name: 'Lawn Scarf 1', price: '$5', description: 'Soft lawn scarf.' },
                { id: '8', name: 'Lawn Scarf 2', price: '$6', description: 'Lightweight lawn scarf.' },
            ],
            scrunchies: [
                { id: '9', name: 'Scrunchie 1', price: '$3', description: 'Fashionable scrunchie.' },
                { id: '10', name: 'Scrunchie 2', price: '$4', description: 'Trendy scrunchie.' },
            ],
            magnetPins: [
                { id: '11', name: 'Magnet Pin 1', price: '$2', description: 'Strong magnet pin.' },
                { id: '12', name: 'Magnet Pin 2', price: '$3', description: 'Durable magnet pin.' },
            ]
        };
        resolve(products[category] || []);
    });
}

// Simulated API fetching function for product details by ID
function fetchProductById(productId) {
    return new Promise((resolve) => {
        const products = {
            silk: [
                { id: '1', name: 'Silk Scarf 1', price: '$10', description: 'High-quality silk scarf.' },
                { id: '2', name: 'Silk Scarf 2', price: '$12', description: 'Luxurious silk scarf.' },
            ],
            organza: [
                { id: '3', name: 'Organza Scarf 1', price: '$15', description: 'Elegant organza scarf.' },
                { id: '4', name: 'Organza Scarf 2', price: '$18', description: 'Beautiful organza scarf.' },
            ],
            crinkle: [
                { id: '5', name: 'Crinkle Scarf 1', price: '$8', description: 'Stylish crinkle scarf.' },
                { id: '6', name: 'Crinkle Scarf 2', price: '$10', description: 'Comfortable crinkle scarf.' },
            ],
            lawn: [
                { id: '7', name: 'Lawn Scarf 1', price: '$5', description: 'Soft lawn scarf.' },
                { id: '8', name: 'Lawn Scarf 2', price: '$6', description: 'Lightweight lawn scarf.' },
            ],
            scrunchies: [
                { id: '9', name: 'Scrunchie 1', price: '$3', description: 'Fashionable scrunchie.' },
                { id: '10', name: 'Scrunchie 2', price: '$4', description: 'Trendy scrunchie.' },
            ],
            magnetPins: [
                { id: '11', name: 'Magnet Pin 1', price: '$2', description: 'Strong magnet pin.' },
                { id: '12', name: 'Magnet Pin 2', price: '$3', description: 'Durable magnet pin.' },
            ]
        };

        // Find the product in all categories
        let product;
        for (const category in products) {
            product = products[category].find(p => p.id === productId);
            if (product) break;
        }
        resolve(product);
    });
}

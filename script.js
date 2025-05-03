const productModule = require('./productModule.js');

let currentEmails = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('newsletter-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        let emailInput = document.querySelector('#newsletter-form input[type="email"]').value;
        if (emailInput) {
            document.getElementById('newsletter-message').textContent = 'Thank you for subscribing';
        }
    });

    const productGrid = document.querySelector('.product-grid');
    productModule.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <label>Price: $${product.price.toFixed(2)}</label>
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });

    // Cart handling
    const cartItems = [];
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(event.target.dataset.productId);
            const product = productModule.findProduct(productId);
            
            if (product) {
                cartItems.push(product);
                
                // Update cart display
                const listItem = document.createElement('li');
                listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
                cartItemsList.appendChild(listItem);

                // Update total using module's calculate function
                const total = productModule.calculateTotal(cartItems);
                cartTotal.textContent = `Total: $${total.toFixed(2)}`;
            }
        }
    });
});

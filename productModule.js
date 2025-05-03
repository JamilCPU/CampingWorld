exports.products = [
    {
        id: 1,
        name: 'Tent',
        price: 100.00,
        image: 'product1.jpg',
        description: 'A spacious 4-person camping tent'
    },
    {
        id: 2,
        name: 'Sleeping Bag',
        price: 50.00,
        image: 'product2.jpg',
        description: 'Comfortable sleeping bag for cool weather'
    },
    {
        id: 3,
        name: 'Camping Stove',
        price: 75.00,
        image: 'product3.jpg',
        description: 'Portable camping stove for outdoor cooking'
    }
];

exports.calculateTotal = function(items) {
    return items.reduce((total, item) => total + item.price, 0);
};

exports.findProduct = function(id) {
    return this.products.find(product => product.id === id);
};

if (require.main === module) {
    console.log('Running Product Module Demo:\n');
    
    console.log('Available Products:');
    exports.products.forEach(product => {
        console.log(`${product.id}. ${product.name} - $${product.price}`);
        console.log(`   Description: ${product.description}\n`);
    });

    const productId = 2;
    const foundProduct = exports.findProduct(productId);
    console.log(`Finding product with ID ${productId}:`);
    console.log(foundProduct, '\n');

    const sampleCart = [exports.products[0], exports.products[1]];
    const total = exports.calculateTotal(sampleCart);
    console.log('Sample Cart Total Calculation:');
    console.log(`Items: ${sampleCart.map(item => item.name).join(', ')}`);
    console.log(`Total: $${total.toFixed(2)}`);
} 
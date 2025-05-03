const http = require('http');
const productModule = require('./productModule.js');

const server = http.createServer((req, res) => {
    console.log('\nAll Products:');
    productModule.products.forEach(product => {
        console.log(`${product.name} - $${product.price}`);
    });

    const foundProduct = productModule.findProduct(2);
    console.log('\nFound Product (ID: 2):');
    console.log(foundProduct);

    const sampleCart = [productModule.products[0], productModule.products[1]];
    const total = productModule.calculateTotal(sampleCart);
    console.log('\nCart Total:');
    console.log(`Items: ${sampleCart.map(item => item.name).join(', ')}`);
    console.log(`Total: $${total}`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Check server console for product module demonstration');
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Make a request to see product module in action');
}); 
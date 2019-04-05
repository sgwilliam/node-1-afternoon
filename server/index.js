const express = require('express');
const productCtrl = require('./getProducts');
const products = require('../products.json')

const app = express();
const port = 4200;


app.get('/api/products', productCtrl.getProducts);

app.get('/api/product/:id', productCtrl.getProduct);

app.get('api/products', productCtrl.getProductByPrice)
 

app.listen(port, () => {
  console.log('the server ready to receive requests!', port);
})

 
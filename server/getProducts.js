// import { builtinModules } from "module";
const products = require('../products.json');

const getProducts = (req, res) => {
  res.status(200).send(products);
}

function getProduct(req, res) {
  let { id } = req.params
  return res.status(500).send(products.filter( product => {
    return +product.id === +id;
  }))
}

function getProductByPrice(req, res) {
  let { price } = req.query
  let product = products.filter( product => product.email >= email ) 
  res.send(user[0])
}

module.exports = { 
  getProducts,
  getProduct,
  getProductByPrice
}

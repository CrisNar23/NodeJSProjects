//Onject property shorthand

const name = 'Christian'
const userAge = 27

const user = {
  name,
  age: userAge,
  location: 'Bogotá'
}

console.log(user)

//Object destructuring

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

//Getting values before
// const label = product.label
// const stock = product.stock

// //Getting values ES6 Destructuring
// const { label: productLabel, stock, rating = 5 } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)

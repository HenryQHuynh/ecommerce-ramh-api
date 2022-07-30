module.exports = {
    ...require('./users'), // adds key/values from users.js
    ...require('./distributors'), // adds key/values from distributors.js   
    ...require('./authors'), // adds key/values from authors.js   
    ...require('./categories'), // adds key/values from categories.js 
    ...require('./product'), // adds key/values from product.js 
    ...require('./cart'), // adds key/values from cart.js 
    ...require('./orders'), // adds key/values from orders.js 3
    ...require('./reviews'), // adds key/values from reviews.js 
};
module.exports = {
    ...require('./users'), // adds key/values from users.js
    ...require('./distributors'), // adds key/values from distributors.js    
    ...require('./authors'), // adds key/values from authors.js   
};
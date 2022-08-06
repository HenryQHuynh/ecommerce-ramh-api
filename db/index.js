module.exports = {
    ...require('./admin'),
    ...require('./authors'),
    ...require('./cart'),
    ...require('./orders'),
    ...require('./product'),
    // ...require('./search'), I think we'll be okay in functionality without this...
    ...require('./users'),
}
/**
 * this function calculates total price of a new order 
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} total price
 */
export const totalProducts = (products) => {
    return products.reduce((sum,product)=> sum + product.price,0);
}
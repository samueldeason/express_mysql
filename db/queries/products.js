const Query = require('../models/index');


const getAllProducts = () => {
    return Query("SELECT * FROM Products", []) 
}
const getOneProduct = (id) => {
    return Query("SELECT * FROM Products WHERE ProductID = ?", [id]) 
}
const removeProduct = (id) => {
    return Query("DELETE FROM Products WHERE ProductID = ?", [id])
}
const updateProduct = (id, body) => {
    return Query("UPDATE Products SET ? WHERE ProductID = ?", [body, id])
}
const addProduct = (body) => {
    return Query("INSERT INTO Products SET ?", [body])
}


module.exports = {
    getAllProducts,
    getOneProduct,
    removeProduct,
    addProduct,
    updateProduct,
}
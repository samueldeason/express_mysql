const Query = require('../models/index');


const getAllEmployees = () => {
    return Query("SELECT * FROM Employees", []) 
}
const getOneEmployee = (id) => {
    return Query("SELECT * FROM Employees WHERE EmployeeID = ?", [id]) 
}
const removeEmployee = (id) => {
    return Query("DELETE FROM employees WHERE EmployeeID = ?", [id])
}
const updateEmployee = (id, body) => {
    return Query("UPDATE employees SET ? WHERE EmployeeID = ?", [body, id])
}
const addEmployee = (body) => {
    return Query("INSERT INTO employees SET ?", [body])
}


module.exports = {
    getAllEmployees,
    getOneEmployee,
    removeEmployee,
    addEmployee,
    updateEmployee,
}
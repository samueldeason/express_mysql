const express = require("express");
const { getAllEmployees, getOneEmployee, addEmployee, removeEmployee, updateEmployee } = require("../db/queries/employeess")


const router = express.Router();


router.get("/:id?", async (req, res) => {
    try{
        let { id } = req.params;
        if(id){
            console.log(id)
            let data = await getOneEmployee(id)
            res.json(data)
        }else{
            let data = await getAllEmployees();
            res.json(data);
        }
    }catch(error){
        console.log(error)
    }
})

router.post("/", async (req, res) => {
    let { body } = req;
    let data = await addEmployee(body);
    res.send(data)
} )

router.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await removeEmployee(Number(id));
    res.send(data)
} )

router.put("/:id", async (req, res) => {
    let { id } = req.params;
    let { body } = req;
    let data = await updateEmployee(Number(id), body);
    res.send(data);
})


module.exports = router;
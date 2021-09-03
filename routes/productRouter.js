const express = require("express");
const { getAllProducts, getOneProduct, addProduct, removeProduct, updateProduct } = require("../db/queries/products")


const router = express.Router();


router.get("/:id?", async (req, res) => {
    try{
        let { id } = req.params;
        if(id){
            console.log(id)
            let data = await getOneProduct(id)
            res.json(data)
        }else{
            let data = await getAllProducts();
            res.json(data);
        }
    }catch(error){
        console.log(error)
    }
})

router.post("/", async (req, res) => {
    let { body } = req;
    let data = await addProduct(body);
    res.send(data)
} )

router.delete("/:id", async (req, res) => {
    let { id } = req.params;
    let data = await removeProduct(Number(id));
    res.send(data)
} )

router.put("/:id", async (req, res) => {
    let { id } = req.params;
    let { body } = req;
    let data = await updateProduct(Number(id), body);
    res.send(data);
})


module.exports = router;
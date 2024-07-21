const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.send("Contatcts Page");
     })
     .post((req, res) => {
        res.send("Create Contacts");
    });

router
    .route("/:id")
    .get((req, res) =>{
        res.send(`View Contacts for ID: ${req.params.id}`);
    })
    .put((req, res) =>{
        res.send(`Update Contact for ID : ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete Contatct for ID : ${req.params.id}`);
    });

module.exports = router;
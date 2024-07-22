const express = require("express");
const router = express.Router();
const {getAllContacts, createContact} = require("../controllers/contactController");

router
    .route("/")
    .get(getAllContacts)
    .post(createContact);

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
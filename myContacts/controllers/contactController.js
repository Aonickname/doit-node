const aysncHandler = require("express-async-handler");

// Get all contacts
// GET /contacts

const getAllContacts = aysncHandler (async (req, res) => {
    res.send("Contatcts Page");
});

// Create contact
// POST /contacts
const createContact = aysncHandler (async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        return res.send("필수 값이 입력되지 않았습니다.");
    }

    res.send("Create Contacts");
});
module.exports = { getAllContacts, createContact};
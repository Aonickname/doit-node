const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`Hello, Node!`);
});
app.get("/contacts", (req, res) => {
    res.send("Contatcts Page");
});

app.listen(3000, () =>{
    console.log("���� ���� ��");
})


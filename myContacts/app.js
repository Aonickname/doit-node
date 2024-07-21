const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`Hello, Node!`);
});

app.use("/users", require("./routes/contactRoutes"));

app.listen(3000, () =>{
    console.log("서버 실행 중");
})

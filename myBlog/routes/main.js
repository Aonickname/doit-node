const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

router.get(
    ["/", "/home"], 
    asyncHandler(async (req, res) => {
    const locals = {
        title: "Home",
    };
    const data = await Post.find();
    res.render("index.ejs", {locals, data, layout: mainLayout});
})
);

router.get("/about", (req, res) => {
    const locals = {
        title: "About"
    }
    res.render("about.ejs", { locals, layout: mainLayout});
});

/**
 * 게시물 상세 보기
 * GET /post/ :id
 */
router.get(
    "/post/:id",
    asyncHandler(async (req, res) => {
        const data = await Post.findOne({ _id: req.params.id });
        res.render("post", {data, layout: mainLayout});
    })
);

module.exports = router;

// Post.insertMany([
//     {
//         title: "제목 1",
//         body: "내용 1- 내용1의 내용!"
//     },
//     {
//         title: "제목 2",
//         body: "내용 2- 내용2의 내용!"
//     },
//     {
//         title: "제목 3",
//         body: "내용 3- 내용3의 내용!"
//     },
//     {
//         title: "제목 4",
//         body: "내용 4- 내용4의 내용!"
//     },
//     {
//         title: "제목 5",
//         body: "내용 5- 내용5의 내용!"
//     },
// ]);
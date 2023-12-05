import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const newData = new Date();
const d = newData.toLocaleDateString();
const listId = 3;

const posts = [
    {
        id: 1,
        image: "<-------img------->",
        data: d,
        like: "like",
        dislike: "dislike",
        post: "Dans la vie il faut toujour etre motive et courageux.",
        hauteur: "Amadou Oury"
    },

    {
        id: 2,
        image: "<-------img------->",
        data: d,
        like: "like",
        dislike: "dislike",
        post: "Hellow world for my App.",
        hauteur: "Ly Imam"
    },

    {
        id: 3,
        image: "<-------img------->",
        data: d,
        like: "like",
        dislike: "dislike",
        post: "Bonjour le monde entier je suis actuelement au Japon.",
        hauteur: "Boubacar"
    },
]

app.get("/", (req, res) =>{
    res.json(posts);
})

app.post("/posts", (req, res) =>{
    // const id = parseInt(req.params.id) + 1;
    const newPost = {
        id: posts.length +1,
        image: req.body.image,
        data: d,
        like: req.body.like,
        dislike: req.body.dislike,
        post: req.body.post,
        hauteur: req.body.hauteur,
    };
    posts.push(newPost);
    res.json(newPost);
})


app.listen(port, () =>{
    console.log(`This server is running on port ${port}`);
})
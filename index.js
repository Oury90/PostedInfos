import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import ejs from "ejs";
import multer from "multer";

const app = express();
const url_Api = "http://localhost:4000";
const port = 3000;
const  upload  =  multer ( {  dest : 'uploads/'  } );

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// send multer



app.get("/", async(req, res) =>{
    try {
        const response = await axios.get(url_Api);
        res.render("index.ejs", {
            posts: response.data
        })
    } catch (error) {
        console.log(error);
    }
    
})
app.get("/post", (req, res) =>{
    res.render("form.ejs");
})
app.post("/post", upload . single ( 'file' ), async(req, res) =>{
    try {
        const response = await axios.post(url_Api +"/posts", {
            image: req.body.file,
            post: req.body.message,
            hauteur: req.body.post,
        });
        console.log(response.data);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }

})

app.listen(port, () =>{
    console.log(`This server is running on port ${port}`);
})

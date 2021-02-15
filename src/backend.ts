import express from "express";
import path from "path"
import { Expression } from "typescript";

import mongoose from "mongoose"

//db.on("error", console.error.bind(console, "mongo DB connection error"));

let myApp = express()

myApp.get("/", (req: express.Request, res: express.Response) => {
    let pathToHTMLFile: string = path.resolve(__dirname, "../dist/index.html");
    res.sendFile(pathToHTMLFile);
})
    .get("/bundle.js", (req: express.Request, res: express.Response) => {
        let pathToBundleJSFile: string = path.resolve(__dirname, 
            "../dist/bundle.js");
        res.sendFile(pathToBundleJSFile);
    })
    .get("/test.css", (req: express.Request, res: express.Response) => {
        let pathToBundleJSFile: string = path.resolve(__dirname, 
            "../dist/test.css");
        res.sendFile(pathToBundleJSFile);  
    })

myApp.listen(3000, () => {
    console.log("Started!");
})

let myLink: string = "mongodb://127.0.0.1:1234/mongoDBTest"
//let myMongo: Mongoose.Mongoose ;

mongoose.connect(myLink, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
})
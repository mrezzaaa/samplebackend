import express from "express";
import { createRequire } from 'module'
const require = createRequire(import.meta.url) //membuat konstanta baru untuk fungsi serupa import tetapi menggunakan require
const bodyParser = require("body-parser"); //untuk memudahkan pengambilan data yg dikirim dari client
// var mysql      = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'me',
//   password : 'secret',
//   database : 'my_db'
// });
 

var app = express(); // membuat instance/object baru dengan variabel app yang berisi object/instance dari express 


app.use(bodyParser.text()); //configurasi bodyparser
app.use(bodyParser.json({limit: "50mb"})); //configurasi bodyparser
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000})); //configurasi bodyparser
app.use(express.urlencoded()); ////configurasi expressurlencoded
app.use(express.json());//configurasi json supaya bisa membaca data json yang dikirim dari client(postman)

app.get("/contohget",(req,res)=>{
    return res.send({
        status:200,
        statusText:"success",
        data:{
            message:"Get responded successfully"
        }
    }) // mengirim respons ke client dengan format json 
});
app.put("/contohput/:id",(req,res)=>{
    console.log("Parameter url id:",req.params.id);
    return res.send({
        status:200,
        statusText:"success",
        data:{
            message:"Parameter url id: " + req.params.id
        }
    }) // mengirim respons ke client berupa parameter id pada url untuk dikirim kembali ke client(postman)
})
app.patch("/contohpatch/:id",function(req,res){
    console.log("Parameter url id:",req.params.id);
    return res.send({
        status:200,
        statusText:"success",
        data:{
            message:"Parameter patch url id: " + req.params.id,
            form:req.body
        }
    }) // 
})
app.post("/contohpost",(req,res)=>{
    // connection.connect();
    // connection.query(`insert into SISWA VALUES (${req.body.nama},${req.body.nik})`, function (error, results, fields) {
    // if (error) throw error;
    //     console.log('The solution is: ', results[0].solution);
    //     return res.send({
    //         status:200,
    //         statusText:"success",
    //         data:req.body
    //     })
    // });
    res.status(200);
    return res.send({
        status:200,
        statusText:"success",
        data:req.body
    }) // mengirim respons ke client berupa semua data yang dikirim dari client
});


app.listen(3000,()=>{
    console.info("Server started at port 3000");
})
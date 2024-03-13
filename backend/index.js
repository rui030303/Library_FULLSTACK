import express, { json } from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Rr951753123!",
    database:"test"
})

app.get('/', (req,res)=>{
    res.json("hello");
})

app.get('/book',(req,res)=>{
    const q = "SELECT * FROM test.books"
    db.query(q,(err, data)=>{
        if (err) {return res.json(err)};
        return res.json(data)
    })
})

app.listen(3000, ()=>{
    console.log("Successfully connected to backend");
})
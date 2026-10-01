import express from "express";
import "dotenv/config"



const db = process.env.DB_STRING
const PORT = process.env.PORT

const app = express();


app.use(express.json())



console.log()
app.listen(PORT,()=>{
    console.log(`connection build sucessfully...\n on port: ${PORT}`);
})
import express from "express";
import cors from "cors"
import  "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config

const app = express();
const port = 4000

//middleware 
app.use(express.json());
app.use(cors());



//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/", (req,res)=> {
    res.send('API Working')
})

app.listen(port, () => {
    console.log(`Server Start on http://localhost:${port}`);
})

//mongodb+srv://greatstack:1999@cluster0.30oxvpw.mongodb.net/?
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')



 mongoose.connect('mongodb+srv://mohammadarshid3:arsh1234@cluster0.v2xk9we.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then((res)=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})
let teacher = express()

teacher.use(bodyParser())
teacher.use(cors())

// const {Schema} = mongoose

// const useSchema = naw Schema({

const teacherSchema = new mongoose.Schema({
    teacherName : String,
    teacherEmail : String,
    teacherSalary : Number
});

const teacherModel = mongoose.model("teacher",teacherSchema)
teacher.post('/createteacher',(req,res)=>{
    console.log(req.body);
    const teacher = new teacherModel(req.body)
    teacher.save()
    res.send("success")
})
teacher.listen(3000,(error)=>{
    if(!error)
    {
        console.log("server running");
    }
    else{
        console.log("error");
    }
})
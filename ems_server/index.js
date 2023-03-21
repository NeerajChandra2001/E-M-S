//import express
const express = require('express')

//import logic
const logic = require('./service/logic')

//import cors
const cors = require('cors')



//create server
const server = express();

//connection
server.use(cors({
    origin: 'http://localhost:3000'
}));

server.use(express.json());

server.listen(8000,()=>{
    console.log('listening on the port 8000');
})


//api cal for get all employee details

server.get('/allemployee',(req,res)=>{
logic.allEmployee().then(
    (result)=>{
        res.status(result.statusCode).json(result)
    }
)
})



//api cal for add  employee details

server.post('/addemployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
    })


    
//api cal for delete  employee details

server.delete('/delemployee/:id',(req,res)=>{
    logic.delEmployee(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
    })


     

//api cal for get an employee details

server.get('/getanemployee/:id',(req,res)=>{
    logic.getAnEmployee(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
    })


    //api cal for update an employee details

server.post('/updateemployee',(req,res)=>{
    logic.updateEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
    })
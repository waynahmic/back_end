// const greet = (num) => {
//     console.log('hello' + num)
// }

// greet('newton')

// console.log(globalThis)

// const http = require('http')
// //created a server
// const server =http.createServer((req,res)=>{
//     if (req.url === '/'){
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<h1>This is our server homepage</h1>')
//         res.end()
//     }
//     if (req.url=== '/about'){
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<h2>This is our server about page</h2>')
//         res.end()
//     }
//     console.log('This is our server')
// })
// //listen to a port
// server.listen(8080, ()=>{
//     console.log('server is now running')
// })

// seperation of concerns is the reason we create folders
//create a schema(how something should be saved in a database)
// mongodb cannot work without schema

// used to create a task
const task_route = require('../routes/taskroutes')

const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()         //so the app can have access to all the modules in the express
const cors = require("cors")
require('dotenv').config()
const PORT = 8080

// middleware
app.use(express.json()); //has access to our res and req......json format
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: ['http://localhost:3000', 'https://crud-backend-707b.onrender.com/'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  }));
  
  // ... your routes and other middleware ...
  


app.use(task_route)




app.get('/', (req,res) => {
    res.send('Server home page')
})



mongoose
 .connect(process.env.MONGO_URL)
 .then(()=>{
    app.listen(PORT, () =>{
        console.log(`server is now running on ${PORT}`)
    })
 })
 .catch((error) => console.log(error))

 //C in CRUD has been created


 //Started Cors on the 7th 
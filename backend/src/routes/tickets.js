// const Ticket = require('../models/tickets');
// // const User = require('../models/user');
// const  exprees=require('express')
// const router=exprees.Router();

// //ROUTE:1 add tickets using post:http://localhost:3000/ticket/addticket
// router.post('/addticket',(req,res)=>{
//     const ticket=Ticket(req.body);
//     ticket.save().then(()=>{
//         res.send(req.body)
//     }).catch((e)=>{
//         res.send(e)
//     })
// })

// //ROUTE:2 get user all tickets using get:http://localhost:3000/ticket/getticket
// router.get('/getticket/:email',async(req,res)=>{
//     const email = req.params.email;
//     let tickets=await Ticket.find({email:email})
//     res.send(tickets)
// })

// //ROUTE:3 get user all tickets for admin using get:http://localhost:3000/ticket/getallticket
// router.get('/getallticket',async(req,res)=>{
//     let tickets=await Ticket.find()
//     res.send(tickets)
// })

// //ROUTE:4 delete tickets using get:http://localhost:3000/ticket/delete
// router.delete('/delete/:id',async(req,res)=>{
//     // const { _id } = req.body;
//    await Ticket.findByIdAndDelete(req.params.id)
// })
// module.exports=router
const express=require("express")
const app=express();
const port=8080;
const userRouter=require('./routes/users')
// const ticketRouter=require('./routes/tickets')
const cors=require('cors')

app.use(cors())
//import mongodb connection
require('./conn');

app.get("/",(req,res)=>{
    res.send("daxit godhani")
})
app.use(express.json());
app.use('/users',userRouter);
// app.use('/ticket',ticketRouter);
app.listen(port,()=>{
    console.log(`server runnint at port ${port}`)
})

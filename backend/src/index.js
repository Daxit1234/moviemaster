const express=require("express")
const app=express();
const port=8080;
const userRouter=require('./routes/users')
const cinemaRouter=require('./routes/cinemas')
const showtimeRouter=require('./routes/showtimes')
const cors=require('cors')

app.use(cors())
//import mongodb connection
require('./conn');

app.get("/",(req,res)=>{
    res.send("daxit godhani")
})
app.use(express.json());
app.use('/cinemas',cinemaRouter);
app.use('/users',userRouter);
app.use('/show', showtimeRouter);

app.listen(port,()=>{
    console.log(`server runnint at port ${port}`)
})

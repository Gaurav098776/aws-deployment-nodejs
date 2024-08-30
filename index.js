const express =  require('express');


const app =  express();



app.get('/api/get',(req,res)=>{
     res.send({message: 'Node js AWS deploymnet'})
})

app.get('/api/user',(req,res)=>{
  res.send({name:'gaurav',profession:'devloper'})
})


app.listen(7575,()=>{
  console.log('server is runing on port 7575');
  
})
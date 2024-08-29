const express =  require('express');


const app =  express();



app.get('/api/get',(req,res)=>{
     res.send({message: 'Node js AWS deploymnet'})
})


app.listen(7575,()=>{
  console.log('server is runing on port 7575');
  
})
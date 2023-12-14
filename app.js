

// const total = users.reduce((sum, user) => sum + user.age, 0) / users.length
// fs.writeFileSync('result.txt', `orta yas - ${total.toFixed(0)}`)





const express = require('express');
const app = express();
const users = [
    {id:1 ,name:'pen', cost:'5$', size: 'full'},
    {id:2 ,name:'bag', cost:'10$' ,size:'full'},
    {id:3,name:'rules', cost:'15$'},
    {id:4,name:'book', cost:'20$'},
    {name:'coppybook', cost:'25$'},
    {name:'coppybook', cost:'25$'},
    {name:'coppybook', cost:'25$'},
    {name:'coppybook', cost:'25$'},
    {name:'coppybook', cost:'25$'},
    {name:'coppybook', cost:'25$'},
]
app.get('/', (req,res)=>{

    res.send("home page")
})

app.get('/users', (req,res)=>{
   
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const userId = req.params.users;
    const selectedUser = users.find(user=>user.id == userId)
    // console.log(username); 
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('istifadeci yoxdur')
    }
})

app.listen(5000, ()=>{
    console.log("server quruldu");
})
  

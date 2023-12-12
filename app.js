const fs = require('fs');
const userData = fs.readFileSync('./data.json');
const users = JSON.parse(userData);
// const total = users.reduce((sum, user) => sum + user.age, 0) / users.length
// fs.writeFileSync('result.txt', `orta yas - ${total.toFixed(0)}`)
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.json(users)
})

app.listen(4000, ()=>{
    console.log("server calisdi");
})

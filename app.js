const express =  require("express")
const app = express()
const path = require("path")
const fs = require('fs');

let db
const filePath = path.join(__dirname, 'data.json');
console.log(filePath)

fs.readFile(filePath, 'utf8', (err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    db = JSON.parse(data)
    console.log(db.soccer.name)
})
  
app.set('view engine', 'ejs')
app.set(__dirname, 'views' )

app.get('/r/:subreddit', (req,res)=>{
    const subreddit = req.params.subreddit
    res.render('index',{db:db} )
})

app.listen(3000, console.log("http://localhost:3000"))
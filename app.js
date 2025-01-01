const express =  require("express")
const app = express()
const path = require("path")
const fs = require('fs');
app.set('view engine', 'ejs')
app.set(__dirname, 'views' )

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
  


app.get('/r/:subreddit', (req,res)=>{
    const subreddit = req.params.subreddit
    // res.render('index',{db:db} )
    if(subreddit == "soccer"){
        res.render('soccer',{db:db})

    }
})

app.listen(3000, console.log("http://localhost:3000"))
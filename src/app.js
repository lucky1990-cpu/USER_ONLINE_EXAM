const express = require('express');
const app = express()
// var bodyParser = require('body-parser')
// const user = require('./models/user')
// const task = require('./models/task')
// const userRoute =  require('./routes/user')

require('./db/mongoose')
const path = require('path')
const PublicDirectoryPath = path.join(__dirname,'./public')
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, './views'));
app.use(express.static(PublicDirectoryPath))
app.use(express.json()) 


//Sign In code
app.get('/',(req,res)=>{
 res.render('SignIn')
})
// Sign Up Code 
app.get('/SignUp',(req,res)=>{
    res.render('SignUp')

})
//Course Info
app.get('/CourseInfo',(req,res)=>{
  res.render('CourseName');
})

//Course Info Pre Request

app.get('/CourseInfoPreRequest',(req,res)=>{
  res.render('CourseInfoPreRequest');

})

//Question Page

app.get('/QuestionPage',(req,res)=>{
    res.render('QuestionPage')
})

console.log('hello online text application');


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`${port} is listning`)
})
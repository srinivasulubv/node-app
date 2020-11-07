var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); //this will take the files from the views folder.
app.use(express.static(__dirname + '/assets')); // for CSS files. 
// Routes
// app.get("/", (req, res) => {
//     res.render('header');
//     res.render('home');
//     res.render('footer');
// });
app.get("/login",(req,res)=>{
   res.render('login');
});

app.get("/bazaar-voice-redir.htm",(req,res)=>{
    res.render('bazaar-voice-redir.html');
});
app.get("/home/",(req,res)=>{
    res.render("home"); 
}); 

// Listen
app.listen(7000, () => {
    console.log('Server listing on 7000');
}) 
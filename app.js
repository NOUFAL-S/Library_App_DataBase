 const express = require("express");

 const app = new express(); 

const nav = [
    {
        link:'/',name:'HOME',
       
    },
    {
        link:'/books',name:'BOOKS',
       
    },
    {
        link:'/authors',name:'AUTHOR',
       
    },
    {
        link:'/signup',name:'SIGNUP',
       
    },
    {
        link:'/login',name:'LOGIN',
       
    },
    {
        link:'/admin',name:'ADD BOOK',
       
    }
];


 const booksRouter =require('./src/routes/bookRoutes')(nav)
 const authorsRouter =require('./src/routes/authorRoutes')(nav)
 const loginRouter =require('./src/routes/loginRoutes')(nav)
 const signupRouter =require('./src/routes/signupRoutes')(nav)
 const adminRouter =require('./src/routes/adminRoutes')(nav)
 
app.use(express.urlencoded({extended:true})); 
app.use(express.static(`${__dirname}/public`)); 
app.set('view engine','ejs');
app.set('views','./src/views');


app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);

 app.get("/",(req,res)=>{
     res.render("index",
    {
        nav,
        title:'Library_by_Noufal'
    });

 });





 app.listen(5000,()=>{console.log("Running... in 5000");
 });
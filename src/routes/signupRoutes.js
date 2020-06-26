const express = require('express');
const signupRouter =express.Router();
const Signupdata = require('../model/Signupdata');
function routerSignup(nav){
    signupRouter.get('/',function(req,res){
        res.render("Signup",
       { nav,
           title:'Library'
    });
    });
    signupRouter.post('/sign',function(req,res){
        var item ={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            
        }
       var signupdata=Signupdata(item);
       signupdata.save();//saving to database
       res.redirect('/login');
       
    
    })


    return signupRouter;
}
module.exports = routerSignup;





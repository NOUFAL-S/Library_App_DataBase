
const express = require('express');
const loginRouter =express.Router();

function routerlogin(nav){
    loginRouter.get('/',function(req,res){
        res.render("Login",
       { nav,
           title:'Library'
    });
    });
    return loginRouter;
}
module.exports = routerlogin;








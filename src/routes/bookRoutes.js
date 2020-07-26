const express = require('express');
const booksRouter=express.Router();
const Bookdata= require('../model/Bookdata');
function router(nav){
  
    
    booksRouter.get('/',function(req,res){
      Bookdata.find()
      .then(function(books){
        res.render("books",
        { nav,
            title:'Books',
            books
     })
      })
       
    })
    
    booksRouter.get('/:id',function(req,res){
        const id= req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
          res.render('book', 
          {nav,
            title:'library',
            book
        })
        })

    booksRouter.get('/book/edit/:id',function(req,res){
        const id= req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
          res.render('bookedit', 
          {nav,
            title:'library',
            book
        })
        })
      
    booksRouter.post('/book/update',function(req,res){
      var id=req.body.id;  
      var title=req.body.title;  
      var author=req.body.author;  
      var genre=req.body.genre;  
      var image=req.body.image;  
    Bookdata.updateOne({_id:id},{$set:{title:title,author:author,genre:genre,image:image}},function(req,res){

    })
    res.redirect('/books');
    })


    booksRouter.get('/delete/:id',function(req,res){
      var id=req.params.id;
    Bookdata.findByIdAndRemove(req.params.id,function(req,res){

    })
    res.redirect('/books');
    })
   })
      
   });

    return booksRouter;
}



module.exports=router;
const express = require('express');
const booksRouter=express.Router();
const Bookdata= require('../model/Bookdata');
function router(nav){
  //   var books=[



  //     { 
      
  //       Description:`A reader lives a thousand lives before he dies . . . ...
  //       “Until I feared I would lose it, I never loved to read. ...
  //       “Never trust anyone who has not brought a book with them.” – ...
  //       “You can never get a cup of tea large enough or a book long enough to suit me.”`,

  //       img:'b1.jpg'
    
  // },
  //     { 
      
  //       Description:`A reader lives a thousand lives before he dies . . . ...
  //       “Until I feared I would lose it, I never loved to read. ...
  //       “Never trust anyone who has not brought a book with them.” – ...
  //       “You can never get a cup of tea large enough or a book long enough to suit me.”`,

  //       img:'b2.jpg'
    
  // },
  //     { 
      
  //       Description:`A reader lives a thousand lives before he dies . . . ...
  //       “Until I feared I would lose it, I never loved to read. ...
  //       “Never trust anyone who has not brought a book with them.” – ...
  //       “You can never get a cup of tea large enough or a book long enough to suit me.”`,

  //       img:'b3.jpg'
    
  // },
  //     { 
      
  //       Description:`A reader lives a thousand lives before he dies . . . ...
  //       “Until I feared I would lose it, I never loved to read. ...
  //       “Never trust anyone who has not brought a book with them.” – ...
  //       “You can never get a cup of tea large enough or a book long enough to suit me.”`,

  //       img:'c1.jpg'
    
  // },
  //     { 
      
  //       Description:`A reader lives a thousand lives before he dies . . . ...
  //       “Until I feared I would lose it, I never loved to read. ...
  //       “Never trust anyone who has not brought a book with them.” – ...
  //       “You can never get a cup of tea large enough or a book long enough to suit me.”`,

  //       img:'c2.jpg'
    
  // },
  //     { 
      
  //       Description:`A reader lives a thousand lives before he dies . . . ...
  //       “Until I feared I would lose it, I never loved to read. ...
  //       “Never trust anyone who has not brought a book with them.” – ...
  //       “You can never get a cup of tea large enough or a book long enough to suit me.”`,

  //       img:'c3.jpg'
    
  // },
  //     { 
      
  //       Description:`A reader lives a thousand lives before he dies . . . ...
  //       “Until I feared I would lose it, I never loved to read. ...
  //       “Never trust anyone who has not brought a book with them.” – ...
  //       “You can never get a cup of tea large enough or a book long enough to suit me.”`,

  //       img:'k1.jpg'
    
  // },
  //     { 
      
  //       Description:`A reader lives a thousand lives before he dies . . . ...
  //       “Until I feared I would lose it, I never loved to read. ...
  //       “Never trust anyone who has not brought a book with them.” – ...
  //       “You can never get a cup of tea large enough or a book long enough to suit me.”`,

  //       img:'k2.jpg'
    
  // },
  //     { 
      
  //       Description:`A reader lives a thousand lives before he dies . . . ...
  //       “Until I feared I would lose it, I never loved to read. ...
  //       “Never trust anyone who has not brought a book with them.” – ...
  //       “You can never get a cup of tea large enough or a book long enough to suit me.”`,

  //       img:'k3.jpg'
    
  // },
     
   
        
           
  //   ]
    
    booksRouter.get('/',function(req,res){
      Bookdata.find()
      .then(function(books){
        res.render("books",
        { nav,
            title:'Books',
            books
     });
      })
       
    });
    
    booksRouter.get('/:id',function(req,res){
        const id= req.params.id;
        Bookdata.findOne({_id: id})
        .then(function(book){
          res.render('book', 
          {nav,
            title:'library',
            book
        });
        })
      
    });

    return booksRouter;
}



module.exports=router;
const express = require('express');
const router = express.Router();
const fileUploader = require('../config/cloudinary.config')
const User = require('../models/User.model')


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post('/new-user',fileUploader.array('pictureOfDog'),(req,res)=>{
  console.log(req.files)
  res.send(req.files[0].path)
  // const {email,password} = req.body
  // User.create({email,password})
  // .then(()=>{
  //   res.redirect('/')
  // })
  // .catch((err)=>{
  //   if(err.http_code===400){
  //     res.render('index',{errorMessage:"format not allowed please upload jpg or png"})
  //   }
  //   console.log(err)
  // })
})

module.exports = router;

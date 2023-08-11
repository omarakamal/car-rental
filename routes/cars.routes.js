const router = require('express').Router()

router.get('/cars',(req,res)=>{
    res.send('all cars')
})

router.get('/new-car',(req,res)=>{
    
})

module.exports = router

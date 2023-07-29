const router = require('express').Router()

router.get('/cars',(req,res)=>{
    res.send('all cars in dev')
})

module.exports = router
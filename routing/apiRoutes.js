const path = require("path")
const router = require('express').Router()
  
router.get('/friends', function(req, res){

  res.send("get friends")
})

router.post("/friends",function(req, res){
  console.log(req.body)
  const scores = Object.values(req.body)
  const data = { 
    name: "Ahmed",
    photo: "https://static01.nyt.com/images/2017/11/14/arts/14baldwin-baldwin/14baldwin-baldwin-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    score: score 
  }

  console.log(data);
  
  res.send("post friends")
})

module.exports = router;
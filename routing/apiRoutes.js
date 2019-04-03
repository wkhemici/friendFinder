const friends = require('../data/friends')
const router = require('express').Router()
  
router.get('/friends', function(req, res){
  res.json(JSON.stringify(friends))
})

router.post("/friends",function(req, res){
  console.log(req.body)
  console.log(friends)

  let closestFriend = 50
  let closestFriendIndex = -1


friends.forEach ( (friends, index) => {
   const formula = (accum,curr) => parseInt(accum) + parseInt(curr)

   const score = friends( formula )
   const otherScore = req.body.scores( formula )

   const diff = Math.abs(score - otherScore)
   if( closestFriend>diff){
       closestFriend = diff
       closestFriendIndex = index
   }

   console.log(score, otherScore)
})
  console.log(closestFriend);
  res.json(friends[closestFriendIndex])
  friends.push(req.body);
})

module.exports = router;


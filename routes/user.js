const express = require('express');
const router = express.Router();

const users= [
    {
        id: 114,
        firstname: "Tehniyat",
        lastname: "Fatima"
        
    },

    {
        id: 116,
        firstname: "Hassan",
        lastname: "Khan"
    },

    
    {
        id: 118,
        firstname: "Faisal",
        lastname: "Asif"
    },
]

// get all users
router.get('/', (req,res) =>{
    res.send(users)

});

//post user
router.post('/', (req,res) =>{
    const user = req.body
    users.push(user)
    res.send("new record added to database")
});


module.exports = router;
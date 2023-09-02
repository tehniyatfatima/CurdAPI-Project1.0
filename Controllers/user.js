

let users= [
    {
       "id": 114,
       "firstname": "Tehniyat",
       "lastname": "Fatima"
     },
     {
       "id": 116,
       "firstname": "Hassan",
       "lastname": "Khan"
     }
]

// get all users
const getUsers = (req,res) =>{
    res.send(users)

}

// get one user by id
 const getUser = (req,res) =>{
    const { id } = req.params
    const foundUser = users.find(user => user.id == id);
    res.send(foundUser)
}

// create user post route
const createUser = (req,res) =>{
    const user = req.body
    users.push(user)
    res.send("new record added to database")
}

// create route for delete user
const deleteUser = (req,res) =>{
    const {id} = req.params
    users = users.filter((user) => user.id != id)
    res.send(`user with id ${id} is deleted from database`)
}

// create route for update user

const updateUser = (req,res) =>{
    const {id} = req.params
    const{firstname, lastname,ID} = req.body
    const userToBeUpdate = users.find((users) => users.id ==id)

    if(firstname) users.firstname = firstname
    if(lastname) users.lstname = lastname
    if(id) users.id = ID

    res.send(`user with id ${id} has been updated`)
    
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
  };

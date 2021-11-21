const {user} = require('../db')


const getAllUser = (req,res)=>{
    res.send(user)
}

const getUser = (req,res)=>{
    console.log(typeof user)
    const foundUser = user.filter((elem, i) =>{
        return i == req.params.id 
    })

    /* .find => element || undefined
    .filter => [element1, element2], || []
     */

    if(foundUser.length > 0){
    res.send(foundUser[0])
    return
    }
    res.status(404).send("user not found")
}

const addNewUser = (req,res)=>{
    const addedUser = {
        name: req.body.name,
        job: req.body.job,
        hobby: req.body.hobby,
    }

    user.push(addedUser)

    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    user.forEach((elem,i)=>{
        if(i == userId){
            elem.name = req.body.name;
            elem.job = req.body.job;
            elem.hobby = req.body.hobby;
        }
    })
}

module.exports = {getAllUser,getUser,updateUser,addNewUser}
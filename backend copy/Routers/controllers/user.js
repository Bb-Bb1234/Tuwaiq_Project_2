const {user} = require('../db')

const tsetId = function(req,res){
    const foundUser = user.find((elem) => {
        return elem.id == req.params.id
    })
    res.send(foundUser.AvailableTest[3]
  );
}
const tsetRid = function(req,res){
    const foundUser = user.find((elem) => {
        return elem.id == req.params.id
    })
    res.send(foundUser.RecordedTests[3]
  );
}
const tsetCid = function(req,res){
    const foundUser = user.find((elem) => {
        return elem.id == req.params.id
    })
    res.send(foundUser.CanceledTest[3]
  );
}
const tsetTid = function(req,res){
    const foundUser = user.find((elem) => {
        return elem.id == req.params.id
    })
    res.send(foundUser.TestResult[3]
  );
}

const getAllUser = (req,res)=>{
    res.send(user)
}

const getUser = (req,res)=>{
    console.log(req.params.id)
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
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
    }

    user.push(addedUser)

    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    user.forEach((elem,i)=>{
        if(i == userId){
            elem.email = req.body.email;
            elem.userName = req.body.userName;
            elem.password = req.body.password;
        }
    })
}

module.exports = {getAllUser,getUser,updateUser,addNewUser, tsetId, tsetRid, tsetCid, tsetTid}
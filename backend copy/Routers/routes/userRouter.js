const express = require("express");

const userRouter = express.Router();

const {getUser,getAllUser,updateUser,addNewUser, tsetId, tsetRid, tsetCid, tsetTid} = require("../controllers/user");
const { user } = require("../db");

userRouter.get('/',getAllUser);
userRouter.get('/:id',getUser);
userRouter.post('/user',addNewUser);
userRouter.put('/user',updateUser);
userRouter.get('/test/:id',tsetId);
userRouter.get('/test1/:id',tsetRid);
userRouter.get('/test2/:id',tsetCid);
userRouter.get('/test3/:id',tsetTid)
// '/user'

module.exports={userRouter};

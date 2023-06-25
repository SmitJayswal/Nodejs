import express, { request } from "express";
import { CreateUser, getUser, getUserbyId, UserbyId, UpdateUserbyID } from "../Controllers/users.js";
import { checkDatabase } from "../Controllers/auth.js";

const router = express.Router();

let users = []

router.get('/checkdb', checkDatabase);

//get all user
router.get('/getallusers', getUser);

//add user id   
router.post('/createuser', CreateUser);

//get user details by user id
router.get('/getuserbyid/:id', getUserbyId);

//delete by id 
router.delete('/deleteuser/:id', UserbyId)

//update by id 
router.post('/updateuserbyid/:id', UpdateUserbyID);


export default router;  
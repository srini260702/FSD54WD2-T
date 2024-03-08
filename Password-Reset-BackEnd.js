




PASSWORD-RESET-BACKEND

common - auth.js :

import bcrypt from 'bcryptjs'

const hashPassword = async(password)=>{
    let salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
    let hash = await bcrypt.hash(password,salt)
    return hash
}

const hashcompare = async(password,hash)=>{
    return await bcrypt.compare(password,hash)
}

export default {
    hashcompare,
    hashPassword
}


controller - users.js :


import userModel from "../models/user.js";
import auth from "../common/auth.js";
import randomstring from "randomstring";
import nodemailer from 'nodemailer'


const signup = async(req,res)=>{
    try {
        let user = await userModel.findOne({email:req.body.email})
        if(!user)
        {
            req.body.password = await auth.hashPassword(req.body.password)
            const newuser = await userModel.create(req.body)
            res.status(201).send({
                message:`User ${req.body.userName} is Succesfully created`,
                newuser
            })
        }
       
        else{
            res.status(404).send({
                message:`user with ${req.body.email} is allready exist`
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

const login = async(req,res)=>{
    try {
     let user = await userModel.findOne({email:req.body.email})
     if(user)
     {
        let hashcompare = await auth.hashcompare(req.body.password,user.password)
        if(hashcompare)
        {
            const user = await userModel.findOne({email:req.body.email},{password:0})
            res.status(201).send({
                message:` User ${user.userName} is login successfully`,
                user

            })
        }
        else
        {
            res.status(404).send({
                message:"Invalid Passward"
            })
        }
     }
     else{
        res.status(404).send({
            message:`User with ${req.body.email} is not Found pleas signup`
        })
     }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

const getAllUser = async(req,res)=>{
    try {
       const allusers = await userModel.find({},{password:0,_id:0})
       res.status(200).send({
        message:"users Fetched Successfully",
        allusers
       })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

const forgetPassword = async(req,res)=>{
    try {
        let user = await userModel.findOne({email:req.body.email})
        if(user)
        {
            const randomString = randomstring.generate({
                length:10,
                charset:"alphanumeric"
            })
            const expitationTimestamp = Date.now() + 2 * 60 * 1000

            console.log(expitationTimestamp)

            const resetLink = `${process.env.ResetUrl}/reset-password/${randomString}/${expitationTimestamp}`

            const transporter = nodemailer.createTransport({
                service:"gmail",
                auth:{
                    user:process.env.EMAIL_ID,
                    pass:process.env.EMAIL_PASSWORD,

                }
            })

            const mailOptions = {
                from: process.env.EMAIL_ID,
                to : user.email,
                subject:"Password-Reset-Link",
                html:`
                <p> Dear ${user.userName} , </p>
                
                <p>Sorry to hear you’re having trouble logging into your account. We got a message that you forgot your password. If this was you, you can get right back into your account or reset your password now. </p>
                <p> Click the following Link to reset your password \n ${resetLink} </p>

                <p>If you didn’t request a login link or a password reset, you can ignore this message. </P>

                <p> Only people who know your account password or click the login link in this email can log into your account. </P>
                `

                
                
            }
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log(error)
                    res.status(500).send({
                        message:"Failed to send the password reset mail"
                    })
                }
                else
                {
                    console.log("password reset email sent" + info.response)
                    res.status(201).send({
                        message:"password reset mail sent sucessfully"
                    })
                }
                user.randomString=randomString
                 user.save()
                res.status(201).send({message:"Reset password email sent successfully and random string update in db"})
            })
        }
        else
        {
            res.status(400).send({
                message:`user with ${req.body.email} is exists`
            })
        }
    } catch (error) {
        console.log (error)
        res.status(500).send({
            message:"Internel Server Error"
        })
    }
}

const resetPassword = async(req,res)=>{
    
    try {
        const {randomString,expitationTimestamp}= req.params

        const user = await userModel.findOne({randomString:randomString})
        if(!user || user.randomString !== randomString)
        {
            res.status(400).send({
                message:"Invalid Random Sting"
            })
        }
        else
        {
            if(expitationTimestamp && expitationTimestamp<Date.now())
            {
                res.status(400).send({
                    message:"expirationTimestamp token has expired. Please request a new reset link."
                })
            } else{
                if(req.body.newPassword){
                    const newPassword = await auth.hashPassword(req.body.newPassword)

                    user.password = newPassword
                    user.randomString=null
                    await user.save()

                    res.status(201).send({
                        message:"Your new password has been updated"
                    })
                }else{
                    res.status(400).send({
                        message:"Invalid password provider"
                    })
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
        message: "Internal server error",
        });
    }

}

export default{
    signup,
    login,
    getAllUser,
    forgetPassword,
    resetPassword

}

model - index.js :


import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

try {
    mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`)
    console.log("moongoose Connected")
} catch (error) {
    console.log(error)
}

export default mongoose
   

model - users.js :

import mongoose from "./index.js"

const validateEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e); 
}

const userSchema = new mongoose.Schema ({
     userName : {
        type:String,
        requried:[true,"UserName required"]

     },

     email:{
        type:String,
        reqired:[true,"Email is reqired"],
         validate:validateEmail
     },

     password :{
        type:String,
        required:[true,"password is required"]

     },

     randomString:{
        type:String
     }


},
{
    versionKey:false
})

const userModel = mongoose.model('users',userSchema)

export default userModel

Routes - index.js :

import express from 'express'
import UserRouter from './user.js'

const router = express.Router()
router.get("/", (req, res) => {
    res.status(200).send(` <h1> Welcome to our Password Reset</h1>`);
  });
router.use('/user',UserRouter)

export default router

Routes - user.js :

import express from 'express'
import userCrl from '../controller/user.js'

const router = express.Router()

router.post('/signup',userCrl.signup)
router.post('/login',userCrl.login)
router.post('/forget-password',userCrl.forgetPassword)
router.post('/reset-password/:randomString/:expitationTimestamp',userCrl.resetPassword)
router.get('/getAlluser',userCrl.getAllUser)


export default router

index.js :

import express from 'express'
import dotenv from 'dotenv'

import AppRouter from './src/routes/index.js'
import cors from 'cors'


dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

app.use('/',AppRouter)

app.listen(PORT,()=>console.log(`app is listening to port ${PORT}`))

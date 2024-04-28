const router =require("express").Router();
const nodemailer =require('nodemailer')


        
     const {email,subject,text}= router.post('/email',async(req,res)=>{
      try {
        const transporter = nodemailer.createTransport({
          service:"gmail",
           auth: {
            user: process.env.USER,
            pass: process.env.PASS,
          },
        });
        await transporter.sendMail({
          from:process.env.USER,
          to:req.body.email,
          subject:req.body.subject,
          text:req.body.text,
        });
        
        console.log("mail sended successfully");
        res.status(200).send("mail sended successfully")
        
      } catch (error) {
        console.log(error)
        res.status(400).send("oops somthing error")
        
      }

      })
      module.exports =router
    
     
    

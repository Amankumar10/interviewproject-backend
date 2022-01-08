const express = require("express");
const router = express.Router();

require("../db");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hellow");
});



router.post("/register",async(req,res) => {
  const { name, email, phone,  password, cpassword } = req.body;

  if(!name || !email || !phone  || !password || !cpassword){
    return res.status(422).json({ error: "please filled the field properly" });
  }

try {
  const userExist = await User.findOne({email:email})
  if (userExist) {
    return res.status(422).json({ error: "user already exist" });
    
  }
  const user = new User({name,email,phone,password,cpassword})
  await user.save()
  res.status(201).json({ message: "user registered successful" });
} catch (err) {
  console.log(err)
}
});

//LOGIN ROUTEs



router.post('/login',async(req,res)=> {
 
 try {
  const {email,password} = req.body
  if (!email || !password){
    return res.status(422).json({ error: "please filled the field properly" });

  }
  const userLogin = await User.findOne({email:email, password:password })
  console.log(userLogin)
  if (!userLogin) {
    res.json({error:"user error"})
    
  } else {
    res.json({message:"user sign successfully"})
  }

 } catch (err) {
   console.log(err)
   
 }
})



module.exports = router;

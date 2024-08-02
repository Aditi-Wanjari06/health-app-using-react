import User from "../models/User.js";

const postSignUp = async (req, res) => {
    const {
      fullName,
      gender,
      age,
      email,
      password,
      profilePhoto
    } = req.body
  
    const user = new User({
      fullName,
      gender,
      age,
      email,
      password,
      profilePhoto
    })
  
    try{const savedUser = await user.save();
    
      res.json({
        success: true,
        message:"User Registered Successfully..",
        data: savedUser
      })}
  
      catch(e){
        res.json({
          success: false,
          message: e.message,
          data: null
        })
      }
  }

  const login = async(req,res)=>{

    const { Email , Password } = req.body

    const user = await User.findOne({
      Email:Email,
      Password:Password
    })



   if(user){
    res.json({
      success:true,
      message:"You Loggedin Successfully",
      data:user
    })
   }

   else{
    res.json({
      success:false,
      message:"user not found",
      data:null
    })
   }

  }

  export {postSignUp , login}
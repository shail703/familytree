exports.createUser=async(req,res,next)=>{
    
    const newUser=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordConfirm:req.body.passwordConfirm,
        passwordChangedAt:Date.now(),
        role:req.body.role       
    });

    res.status(200).json({
        status:'success',
        token,
        data:{
            newuser
        }
    });
  
    // createSendToken(newUser,201,res);
};

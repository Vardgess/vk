const UserModel=require("../models/UserModel")

class AuthController{

    registerView(req,res){
        let message=""
        res.render('register',{message:message})
    }

    /**
     * register post function
     * @param {*} req 
     * @param {*} res 
     */
    async registerNewUser(req,res){

   try{
        let user=await UserModel.create({
                email:req.body.email,
                password:req.body.password,
            })
         if(!user){
            return  res.status(400).json({error:"lracreq dzer tvyalnery"})
         }
             return res.end("Grancumy katarvac e")

   }catch(err){
       console.log("err")
        return res.status(400).json({error:"Kan sxalner , uxxeq dranq"})
   }     
    }
}

module.exports=new AuthController()
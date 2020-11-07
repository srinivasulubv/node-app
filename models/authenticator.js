var db=require("../config/db");
var auth={
    checkCredentials=function(email,pass){
      let con=db.connectDB(); 
      return true;
    },
    
   
}

module.exports=auth;

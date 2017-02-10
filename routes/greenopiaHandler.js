var greenopiaUsersDAO1 = require('../greenopia').greenopiaUsersDAO;

  function greenopiaHandler(db){
  "use strict";
  var userProfile = new greenopiaUsersDAO1(db);
  this.insertUser = function (req,res){
    "use strict";
    var data = req.body;
    var user ={
      name: data.name,
      gCode: data.gCode,
      deliveryDate: data.deliveryDate,
      role: data.role,
      imgUrl: data.imgUrl,
      receiverEmail: data.receiverEmail,
      senderEmail: data.senderEmail,
      waterDates: [],
      receiverAddress:data.receiverAddress
    };
    userProfile.insertUser(user,function(err,record){
      if(err){return res.json(err);}
      else {return res.json(record);}
    });
  }
  }


module.exports = greenopiaHandler;

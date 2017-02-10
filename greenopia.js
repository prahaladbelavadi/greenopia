function greenopiaUsersDAO(db){
  "use strict";
  /* If this constructor is called without the "new" operator, "this" points
   * to the global object. Log a warning and call it correctly. */
   if (false === (this instanceof greenopiaUsersDAO)){
     console.log("Warning: greenopiaUsersDAO constructor called without another operator");
     return new greenopiaUsersDAO(db)
   }

  var mongoGreenopia = db.collection("greenopiausers");

 this.insertUser = function (user, callback){
   "use strict";

    mongoGreenopia.insert(user, function (err,result){
      "use strict";
      if (!err){
        console.log("inserted new user");
        return callback (null, result[0]);
      }
      return callback(err, null);
    });

 }
}

module.exports.greenopiaUsersDAO = greenopiaUsersDAO;

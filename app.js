var express = require ("express");
var app = express ();
var PORT =process.env.PORT || 3001;

app.get("/about", function(req,res){
  res.send("About Us!!")
})

app.use(express.static(__dirname+"/public"));


app.listen(PORT, function(){
  console.log("Express Server started at port:"+ PORT+"!");
});

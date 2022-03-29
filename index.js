var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/internship";  
MongoClient.connect(url, function(err, client) {  
if (err) throw err;  
var myobj = { name: "Ajeet Kumar", age: "28", address: "Delhi" };  
client.db("internship").collection("student").insertOne(myobj, function(err, res) {  
if (err) 
throw err;  
console.log("1 record inserted");  
client.close();  
});  
}); 
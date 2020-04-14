const mongo_client = require("mongodb").MongoClient;
const url = "mongodb+srv://quentin:quentin123456@quentin-ngb9m.mongodb.net/test?retryWrites=true&w=majority";

mongo_client.connect(url, { useNewUrlParser: true }, function(error, client) {
    const collect = client.db("GH").collection("web");
    console.log("Database is ready");
    var data = { name: "Thant Zin Oo", email: "2017-miit-cse-050" };
    collect.insertOne(data, function(error, response) {
        console.log("Data is inserted");
    });
});
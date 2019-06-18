//index.js
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://jon-cunicella:jsboot2019@cluster0-uw3xb.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (error, client) => {
    const db = client.db("mongo-introduction");
    //this will be abstracted with mongoose
    //creates collection and adds a single people document "Brian"
    //everything under here is for CRUD
    db.collection("people").insertOne(
      {
        name: "Brian",
        age: 37
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to connect", error);
        }
        console.log(result);
      }
    );
  }
);
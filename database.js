const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://mohammadzakirnizam:JXNMrRLume2Gl2Ci@nizamdev.sgpiihz.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");
  const db = client.db(dbName);
  const collection = db.collection("User");
const data ={
  Name:"Shahim",
  Place :"Mangalore"
}
const newdata=await collection.insertMany([data])
console.log("***Recently Added data***",newdata);


//Read 
const findResults = await collection.find({}).toArray();
console.log("****Found Documents*****",findResults)
  return "DONE";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

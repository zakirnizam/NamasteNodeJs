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

  await collection.deleteMany({}); // used to clear all the documnets before running again

  const data = [
    { Name: "Shahim", Place: "Mangalore" },
    { Name: "Salam", Place: "Mangalore" },
  ];

  const newData = await collection.insertMany(data);
  console.log("***Recently Added data***", newData);

  // ✅ Update
  const updateResult = await collection.updateOne(
    { Name: "Salam" },
    { $set: { Place: "Udupi" } }
  );
  console.log("****Updated****", updateResult);

  // ✅ Read
  const findResults = await collection.find({}).toArray();
  console.log("****Found Documents****", findResults);

  return "DONE";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

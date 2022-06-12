const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("contactDB");
    const coll = db.collection("contacts");
    // insert code goes here
    const docs = [{
            firstName: "John",
            lastName: "Alabi",
            email: "johnalabi@gmail.com", 
            favoriteColor:"Blue", 
            birthday: "05/09/1999"},
    {
        firstName: "Michael",
        lastName: "Rollerstone",
        email: "m.roller@gmail.com", 
        favoriteColor:"Green", 
        birthday: "07/07/1983"
    },
    {
        firstName: "Clarence",
        lastName: "Pete",
        email: "pete4meandyou@gmail.com", 
        favoriteColor:"Pink", 
        birthday: "06/07/2002"
    }]
    const result = await coll.insertMany(docs);
    // display the results of your operation
    console.log(result.insertedIds);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
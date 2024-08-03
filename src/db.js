import { MongoClient } from "mongodb";

let db;

async function connectToDb(callback) {
  const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:%23C*FP*%404P%24HzT%23k@cluster0.zjkedxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  const client = new MongoClient(uri);
  await client.connect();

  db = client.db("react-blog-db");

  callback();
}
export { db, connectToDb };

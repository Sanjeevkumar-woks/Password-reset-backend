const { MongoClient } = require("mongodb");

const URL= "mongodb+srv://sanjeev:sanjeev143@cluster0.1cfhn.mongodb.net";

// const URL = process.env.URL;

const DB_NAME = process.env.DB_NAME;
const client = new MongoClient(URL);

const mongodb = {
  db: null,
  users: null,

  async connect() {
    await client.connect();
    this.db = client.db(DB_NAME);
    this.users = this.db.collection("users");
  },
};

module.exports = mongodb;

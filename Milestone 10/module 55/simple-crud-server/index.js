const express = require("express");
const app = express();
const port = process.env.port || 3000;
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
//middleware
app.use(cors());
app.use(express.json());

//mongoDB user pass
// programmarimran
// s0yFgM0U9qxifC3a
//************************ */
const uri="mongodb://127.0.0.1:27017"
//user:imran
//pass:DzLVQeAS6YyuXBaA
// const uri =
//   "mongodb+srv://imran:DzLVQeAS6YyuXBaA@cluster0.rdhp12d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();

    const database = client.db("user");
    const userCollection = database.collection("users");

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray(); //ekane toArry kothai theke paise .ar er documentation kothai
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      console.log("data in the server", req.body);
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    app.put(`/users/:id`, async (req, res) => { 
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const user = req.body;
      // console.log(user)
      const updateDoc = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("SImple crud server is running");
});

app.listen(port, () => {
  console.log(`this is server console port ${port}`);
});

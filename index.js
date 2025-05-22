require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3000;
app.use(express.json());
app.use(cors());
//MongoDB is start

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rdhp12d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // Connect to the "sample_mflix" database and access its "movies" collection
    const database = client.db("diverseDishDB");
    const productCollection = database.collection("recipes");
    const userCollection = database.collection("users");

    app.get("/recipes", async (req, res) => {
      const cursor = productCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get("/recipes/home",async(req,res)=>{
      const topLikeData=productCollection.find().sort( { "likeCount": -1 } )
      const result=(await topLikeData.toArray()).slice(0,6)
      res.send(result)
    })
    app.get("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });
    app.post("/recipes", async (req, res) => {
      const data = req.body;
      let result;
      if (Array.isArray(data)) {
        result = await productCollection.insertMany(data);
      } else {
        result = await productCollection.insertOne(data);
      }
      res.send(result);
    });

    app.put("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: req.body,
      };
      const result = await productCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });
    app.patch("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const { likeCount } = req.body;
      // console.log(likeCount)
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $inc:{likeCount:1}
      };
      const result = await productCollection.updateOne(filter,updateDoc);
      res.send(result)
    });
    app.delete("/recipes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Diverse Dish Server is Running>......");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

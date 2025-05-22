const mongoose = require("mongoose");

require("dotenv").config();

// Update below to match your own MongoDB connection string.
const MONGO_URL =
  "mongodb://nasa-api:GlOghOJIw83PB27U@ac-ry9akvx-shard-00-00.imqfmsj.mongodb.net:27017,ac-ry9akvx-shard-00-01.imqfmsj.mongodb.net:27017,ac-ry9akvx-shard-00-02.imqfmsj.mongodb.net:27017/nasa?ssl=true&replicaSet=atlas-13c8lx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=NASAcluster";
// "mongodb+srv://nasa-api:GlOghOJIw83PB27U@nasacluster.imqfmsj.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};

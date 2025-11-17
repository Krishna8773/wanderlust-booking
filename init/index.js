const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.MONGO_URL;

async function main() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        tls: true,
    });
    console.log("Connected to DB");
}

main().catch(err => {
    console.log("MongoDB connection error:", err);
});

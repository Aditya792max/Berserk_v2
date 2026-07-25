const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log(`Connected to MONGODB`);
    }).catch((err) => {
        console.log(`Connected to Unable to Connect, ${err}`);
    });

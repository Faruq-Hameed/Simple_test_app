const mongoose = require('mongoose');
const request = require('supertest')
const app = require('../app')
require("dotenv").config();

/* Connecting to the database before each test. */

beforeEach(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('connected to db for testing');
    })
})

/** Closing database connection after each test */

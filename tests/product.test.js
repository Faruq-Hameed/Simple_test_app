const mongoose = require('mongoose');
const request = require('supertest')
const app = require('../app')
require("dotenv").config();

/* Connecting to the database before each test. */

beforeEach(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI)
})

/** Closing database connection after each test */

afterEach(async ()=>{
    await mongoose.connection.close()
})

//unit tests


describe("GET /api/products", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

/*in the above
- We use describe to describe the unit test though it is optional
- In it, we write the actual test code. Tell what the test performs in the first argument, 
and then in the second argument, write a callback function that contains the test code.
- In the callback function, the request is sent to the endpoint first, 
and the expected and actual responses are then compared. 
The test passes if both answers match, else, it fails.

*/
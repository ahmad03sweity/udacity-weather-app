// Require Express to run server and routes
const framework = require("express");

// Start up an instance of app
const application = framework();

// Require CORS to handle Cross-Origin Resource Sharing
const crossOrigin = require("cors");

// Enable All CORS Requests
application.use(crossOrigin());

// Require body-parser to parse incoming request bodies
const jsonParser = require("body-parser");

// Parse application/x-www-form-urlencoded
application.use(jsonParser.urlencoded({ extended: false }));

// Parse application/json
application.use(jsonParser.json());

// Setup empty JS object to act as endpoint for all routes
let endpointData = {};

// Initialize the main project folder
application.use(framework.static("website"));

// Callback function to complete GET '/all'
const retrieveAll = (req, res) => res.status(200).send(endpointData);
// GET Route
application.get("/all", retrieveAll);

// Callback function to complete POST '/add'
const updateData = (req, res) => {
    endpointData = req.body;
    console.log(endpointData);
    res.status(200).send(endpointData);
};
// POST Route
application.post("/add", updateData);

// Define the port and host for the server
const serverPort = 4000;
const serverHost = "127.0.0.1";

// Function to test the server
const startServer = () =>
console.log(`Server running at http://${serverHost}:${serverPort}/`);

// Spin up the server
application.listen(serverPort, startServer);

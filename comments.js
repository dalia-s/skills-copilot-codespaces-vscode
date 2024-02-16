// Create web server
const express = require('express');
const app = express();

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET /comments route');
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('This is a POST /comments route');
});

// Create a route for PUT /comments
app.put('/comments', (req, res) => {
  res.send('This is a PUT /comments route');
});

// Create a route for DELETE /comments
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE /comments route');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the code with node comments.js
// Open the browser and navigate to http://localhost:3000/comments, you should see the message This is a GET /comments route
// Open the browser and navigate to http://localhost:3000/comments with a POST request, you should see the message This is a POST /comments route
// Open the browser and navigate to http://localhost:3000/comments with a PUT request, you should see the message This is a PUT /comments route
// Open the browser and navigate to http://localhost:3000/comments with a DELETE request, you should see the message This is a DELETE /comments route
// You can also use tools like Postman to test the

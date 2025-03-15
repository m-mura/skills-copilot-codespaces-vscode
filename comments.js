// Create web server
// Start server
// Create a new comment
// Read all comments
// Update a comment
// Delete a comment

// Initialize express
const express = require('express');
const app = express();

// Initialize body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a new comment
app.post('/comments', (req, res) => {
    // Get the comment from the request
    const comment = req.body.comment;
    console.log(comment);

    // Send a response
    res.send('Comment is received');
});

// Read all comments
app.get('/comments', (req, res) => {
    // Send a response
    res.send('All comments are received');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
    // Get the comment id from the request
    const id = req.params.id;
    console.log(id);

    // Get the comment from the request
    const comment = req.body.comment;
    console.log(comment);

    // Send a response
    res.send('Comment is updated');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    // Get the comment id from the request
    const id = req.params.id;
    console.log(id);

    // Send a response
    res.send('Comment is deleted');
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Run the server
// http://localhost:3000/comments
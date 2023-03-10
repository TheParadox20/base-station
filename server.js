const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;

// sendFile will go here
app.use(express.static(path.join(__dirname,'frontend', 'dist')));

app.listen(port);
console.log('Server started at http://localhost:' + port);
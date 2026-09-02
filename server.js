const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./config/dbConnection');
dotenv.config();
const app = express();
const port = process.env.PORT;
dbConnection();



app.get('/api', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
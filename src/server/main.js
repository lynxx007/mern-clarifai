const express = require("express");
const ViteExpress = require("vite-express");
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

// Route for handling POST requests
app.post('/api/postdata', (req, res) => {
  const data = req.body;
  console.log('Received POST data:', data);

  // You can perform some processing with the received data here

  res.json({ message: 'Data received successfully' });
});


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

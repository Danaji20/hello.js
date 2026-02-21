require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT;


// Middleware to parse JSON body
app.use(express.json());

app.use((req, res, next) => { // Logs every request for a defined middleware
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();// Pass to next handler(required!)
  });


app.get('/', (req, res) => {
  res.send('My Week 2 API!')
})

// POST /user
app.post('/user', (req, res) => {
 console.log(req.body);
res.json({echoed: req.body}); // req.body now available
});



app.get('/user/:id', (req, res) => {   // Route: / (home) - no more if else!
  const id = req.params.id;
  console.log(id);
  res.send(id); // Response: HTML or text (headers auto!)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// MUST be placed last
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status

  res.status(500).json({
    error: 'Something went wrong'
 });
});
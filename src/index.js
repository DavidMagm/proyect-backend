const express = require('express');
const indexRoute = require('./routes');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

indexRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
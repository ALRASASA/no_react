const express = require('express');
const app = express();

app.get('/api/message', (req, res) => {
  res.send('Hello, World!');
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const path = require('path');
const express = require('express');
var compression = require('compression');
const app = express();
const publicPath = path.join(__dirname, 'public');
const port = process.env.PORT || 80;

app.use(express.static(publicPath));
app.use(compression({ filter: shouldCompress }));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

const staticDir = __dirname + '/client/build';
app.use(express.static(staticDir));

app.get('*', function(req, res) {
    return res.sendFile(path.resolve(staticDir + '/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '/app')));
app.listen(process.env.PORT || 4200);

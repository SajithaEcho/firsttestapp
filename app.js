const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.get('/', (req, res) => res.render('index'))

app.listen(3000, () => console.log('Example app listening on port 3000!'));
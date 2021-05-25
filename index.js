const express = require('express');
const port = 8000
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

app.use(express.static('./assets'));

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('error', err);
        return;
    }
    console.log('Connect successfully');
});



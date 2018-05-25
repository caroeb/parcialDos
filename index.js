express = require ("express"),
consolidate = require("consolidate"),
handlebars = require("handlebars");

var app = express();

app.engine('hbs', consolidate.handlebars);

app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


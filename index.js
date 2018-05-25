express = require ("express"),
consolidate = require("consolidate"),
handlebars = require("handlebars");


var app = express();

app.engine('hbs', consolidate.handlebars);

app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render("index", {
         
    });
});

app.listen(3000, console.log ("conectado"));

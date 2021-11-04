const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ partialsDir: "./views/partials", viewPath: './views', layoutsDir: './views/layouts' }));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3007;


app.get("/", (req, res, next) => {
   
});

app.post("/", (req, res) => {

    res.render("index", {})
 
})








app.listen(PORT, () => { console.log(`Listening at PORT : ${PORT}`) })

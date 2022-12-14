import express from 'express';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Handle
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err){});




//servir contedido estatico

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Ginnet",
    titulo: "Curso de Node"
  });
});

app.get('/generic', (req, res) => {
  res.render("generic", {
    nombre: "Ginnet",
    titulo: "Curso de Node"
  });
});

app.get('/elements', (req, res) => {
  res.render("elements", {
    nombre: "Ginnet",
    titulo: "Curso de Node"
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http//localhost: ${port}`)
});
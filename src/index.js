const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

// Settings
app.set("views", path.join(__dirname, "views"));
//motor de las vistas
app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "misession",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

//variables globales
app.use((req, res, next) => {
  //pasando a todas las vistas 
  //la variable message puede accederse desde cualquier ruta
  app.locals.message = req.flash("success");
  next() //para que continue con las siguientes rutas
});

//routes
app.use(require("./routes/index"));

app.listen(3000);
console.log("Server on port 3000");

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.post("/register", (req, res) => {
  //usamos la sesion para guardar datos y pasarlas a la vista profile
  //req.session.user_data = req.body usaremos flash-connect
  //req.flash("user", req.body);
  req.flash('success','regitsrado correctamente')
  console.log(req.body);
  /*[Object: null prototype] { email: 'fm@gmail.com', password: '123' }*/
  res.redirect("/profile");
});

router.get("/profile", (req, res) => {
  //viendo por consola
  //usando flash
  //const message = req.flash('success')[0] //recibiendo el mernsaje flash sera global
  //const user = req.flash('user')[0] //devuelve un arreglo 
  //console.log(user) //[ { email: 'rgc@gmail.com', password: '121212' } ]
  /* const user = req.session.user_data; //las sesiones sirven para pasar datos entre vistas
  delete req.session.user_data; //se elimina despyes de usarla */
  /* este es 
    [Object: null prototype] { email: 'gnavarro82', password: 'aass' }
    * */
  res.render("profile");
});

router.get("/products", (req, res) => {
  res.render("products" );
});



module.exports = router;

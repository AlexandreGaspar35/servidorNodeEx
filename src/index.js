//importando modulos
const { Router } = require("express");
const express = require("express");
const path = require("path");

//trabalhando com o modulo puxando uma instancia do express
const app = express();

const router = express.Router();
//Definindo rotas das paginas!
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/home.html"));
});

router.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/contato.html"));
});
//informando que o app vai usar as rotas
app.use(router);
//agora o app esta escutando a requisições.
app.listen(3333, () => {
  console.log("Servidor Rodando!!");
});

//__dirname recupera o caminho completo do diretorio, por isso utilizamos o path.
//console.log(path.join(__dirname + "/pages/home.html"));

const express = require("express");

const app = express();
app.use(express.json());
const lista = [];

//teste requisição
app.get("/", (req, res) => {
  res.send("seja bem vindo a API");
});
//lista itens
app.get("/itens", (req, res) => {
  res.json(lista);
});
//adiciona itens
app.post("/itens", (req, res) => {
  const id = lista.length + 1;

  const dadosRecebidos = req.body;
  const meusDados = { id, ...dadosRecebidos };

  lista.push(meusDados);

  res.status(201).json(meusDados);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
});

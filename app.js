const express = require("express");

const app = express();
app.use(express.json());
const lista = [];

app.get("/", (req, res) => {
  res.send("seja bem vindo a API");
});

app.get("/itens", (req, res) => {
  res.json(lista);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
});

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

//Editar itens
app.put("/itens/:id", (req, res) => {
  const id = Number(req.params.id);
  const dadosAtualizados = req.body;

  const item = lista.find((item) => item.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item não encontrado." });
  }

  Object.assign(item, dadosAtualizados);

  res.status(200).json(item);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
});

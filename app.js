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
  const { id } = req.params;
  const dadosAtualizados = req.body;

  const itemIndex = lista.findIndex((item) => item.id === Number(id));

  console.log("itemIndex >>>", itemIndex);

  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item não encontrado." });
  }

  const itemAtual = lista[itemIndex];
  const itemAtualizado = { ...itemAtual, ...dadosAtualizados };

  lista[itemIndex] = itemAtualizado;

  res.status(200).json(itemAtualizado);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
});

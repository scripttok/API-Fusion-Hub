const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("seja bem vindo a API");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
});

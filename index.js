const express = require("express");
const path = require("path");

const app = express();
const PORT = 80;

app.get("/gustavo-gouveia", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



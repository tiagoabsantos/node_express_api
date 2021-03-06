const mongoose = require("mongoose");

const mongodb = {
  pathLocalhost: "mongodb://localhost/inscricoes_app",
  pathAtlas: "mongodb+srv://...",
  url:
    "mongodb+srv://dbadmin:qwerty123@clustercomputacaodistribuida-ij9x3.mongodb.net/test?retryWrites=true&w=majority",
};

const urlBaseDados = mongodb.url;
mongoose.connect(urlBaseDados, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose.connect(urlBaseDados, {useMongoClient: true});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose ligado a ${urlBaseDados}`);
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose erro ao conectar: ", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose: foi desligada a ligação. ");
});

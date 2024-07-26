const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require(cors);
dotenv.config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
//middleware
app.use(express.json());

const booksRouter = require("./routes/books.route");
const authorsRouter = require("./routes/authors.route");
const editorsRouter = require("./routes/editors.route");
const specialtiesRouter = require("./routes/specialties.route");

// Connexion à la base données
mongoose
  .connect(process.env.DATABASECLOUD, {
    // useNewUrlParser: true,
    // useUnifieldTopology: true,
  })
  .then(() => {
    console.log("DataBase Successfully Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("Acceuil Page");
});

app.get("/contact", (req, res) => {
  res.send("contact Page");
});

app.use("/api/editors", editorsRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/books", booksRouter);
app.use("/api/specialties", specialtiesRouter);

app.listen(process.env.PORT);
console.log("application execute with port" + process.env.PORT);

module.exports = app;

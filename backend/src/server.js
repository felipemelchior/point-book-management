const express = require("express");
const routes = require("./routes");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoCredential = require("./Credentials/credential.json").credential;

mongoose.connect(mongoCredential, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(9091);

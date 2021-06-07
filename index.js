require("dotenv").config();

const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000;
const cors = require("cors");

const axios = require("axios");
const appID = "App ID";
const appSecret = "App Secret";

app.use(cors());

app.listen(port, () => console.log("Backend server live on " + port));

app.get("/prueba", (req, res) => {
  res.send("Prueba completada");
});

app.get("/qvapay-login", (req, res) => {
  axios
    .get({
      url: qpayUrl + "/info",
      params: {
        app_id: appID,
        app_secret: appSecret,
      },
      headers: {
        Accept: "application/json",
      },
    })
    .then((dataString) => {
      console.log("Login succesfully");
      res.send(dataString);
    })
    .catch((err) => {
      console.log("Error on Login: " + err);
      res.send("Sorry, there was a problem logging in");
    });
});

app.get("/qvapay-transacciones", (req, res) => {
  axios
    .get({
      url: qpayUrl + "/transactions",
      params: {
        app_id: appID,
        app_secret: appSecret,
      },
      headers: {
        Accept: "application/json",
      },
    })
    .then((dataString) => {
      console.log("Transactions gotten succesfully");
      res.send(dataString);
    })
    .catch((err) => {
      console.log("Error on getting transactions: " + err);
      res.send("Sorry, there was a problem on getting transactions");
    });
});

app.get("/qvapay-factura", (req, res) => {
  axios
    .get({
      url: qpayUrl + "/balance",
      params: {
        app_id: appID,
        app_secret: appSecret,
      },
      headers: {
        Accept: "application/json",
      },
    })
    .then((dataString) => {
      console.log("Balance succesfully");
      res.send(dataString);
    })
    .catch((err) => {
      console.log("Error on balance: " + err);
      res.send("Sorry, there was a problem getting the balance");
    });
});

app.get("/qvapay-saldo", (req, res) => {
  axios
    .get({
      url: qpayUrl + "/create_invoice",
      params: {
        app_id: appID,
        app_secret: appSecret,
      },
      headers: {
        Accept: "application/json",
      },
    })
    .then((dataString) => {
      console.log("Proceding to pay");
      res.send(dataString);
    })
    .catch((err) => {
      console.log("Error on paying: " + err);
      res.send("Sorry, there was a problem on paying");
    });
});

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});

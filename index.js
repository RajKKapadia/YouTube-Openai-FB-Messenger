const express = require('express');
require('dotenv').config();

const webApp = express();

const PORT = process.env.PORT || 5000;

webApp.use(express.urlencoded({ extended: true }));
webApp.use(express.json());
webApp.use((req, res, next) => {
  console.log(`Path ${req.path} with Method ${req.method}`);
  next();
});

const homeRoute = require('./routes/homeRoute');
const fbWebhookRoute = require('./routes/fbWebhookRoute');

webApp.use('/', homeRoute.router);
webApp.use('/facebook', fbWebhookRoute.router);

webApp.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});

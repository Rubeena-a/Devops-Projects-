const express = require('express');

const createApp = () => {
  const app = express();
  app.get('/', (req, res) => {
    res.json({ message: "Hello from CI/CD demo app!" });
  });
  return app;
};

module.exports = createApp;


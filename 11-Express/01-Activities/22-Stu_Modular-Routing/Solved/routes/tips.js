/**
 * @typedef {Object} Tip
 * @property {string} username
 * @property {string} topic
 * @property {string} tip
 * @property {string} tip_id
 */
const tips = require("express").Router();
// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
// Helper method for generating unique ids
const uuid = require("../helpers/uuid");

// GET Route for retrieving all the tips
tips.get("/", (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile("./db/tips.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
tips.post("/", (req, res) => {
  console.info(`${req.method} request received to add a tip`);

  const { username, topic, tip } = req.body;

  if (username && topic && tip) {

    /**
     * @type {Tip} newTip
     */
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuid(),
    };

    readAndAppend(newTip, "./db/tips.json");
    res.json(`Tip added successfully`);
  } else {
    res.error("Error in adding tip");
  }
});

module.exports = tips;

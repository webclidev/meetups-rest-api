const fs = require("fs");
const path = require("path");

const meetupsFilePath = path.join(__dirname, "..", "data", "meetups.json");

const loadMeetups = () => {
  try {
    const data = fs.readFileSync(meetupsFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveMeetups = (meetups) => {
  fs.writeFileSync(meetupsFilePath, JSON.stringify(meetups, null, 2));
};

module.exports = { loadMeetups, saveMeetups };

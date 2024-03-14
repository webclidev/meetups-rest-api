const meetupUtils = require("../utils/meetupUtils");

let meetups = meetupUtils.loadMeetups();

const getMeetups = (req, res) => {
  res.json(meetups);
};

const createMeetup = (req, res, next) => {
  try {
    const { title, summary, address } = req.body;
    if (
      !title ||
      !summary ||
      !address ||
      typeof title !== "string" ||
      typeof summary !== "string" ||
      typeof address !== "string"
    ) {
      return res.status(400).json({
        message:
          "Please provide valid title, summary, and address for the meetup",
      });
    }

    const newMeetup = {
      id: meetups.length > 0 ? meetups[meetups.length - 1].id + 1 : 1,
      title,
      summary,
      address,
    };

    meetups.push(newMeetup);
    meetupUtils.saveMeetups(meetups);
    res.status(201).json(newMeetup);
  } catch (error) {
    next(error);
  }
};

const updateMeetup = (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, summary, address } = req.body;

    const meetup = meetups.find((meetup) => meetup.id === parseInt(id));
    if (!meetup) {
      return res.status(404).json({ message: "Meetup not found" });
    }

    if (title && typeof title === "string") meetup.title = title;
    if (summary && typeof summary === "string") meetup.summary = summary;
    if (address && typeof address === "string") meetup.address = address;

    meetupUtils.saveMeetups(meetups);
    res.json(meetup);
  } catch (error) {
    next(error);
  }
};

const deleteMeetup = (req, res, next) => {
  try {
    const { id } = req.params;

    meetups = meetups.filter((meetup) => meetup.id !== parseInt(id));
    meetupUtils.saveMeetups(meetups);

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMeetups,
  createMeetup,
  updateMeetup,
  deleteMeetup,
};

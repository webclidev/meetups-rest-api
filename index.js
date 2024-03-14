const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/authRoutes");
const meetupRoutes = require("./routes/meetupRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Generic error handling middleware
app.use(errorHandler);

app.use(authRoutes);
app.use(meetupRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config({ path: ".env", override: true });

connectDB();
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", require("./routes/taskRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/moods", require("./routes/moodRoute"));

app.listen(port, () => console.log(`Server is running on port ${port}`));

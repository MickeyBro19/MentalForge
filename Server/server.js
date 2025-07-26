const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: ".env", override: true });

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", require("./routes/taskRoute"));

app.listen(port, () => console.log(`Server is running on port ${port}`));

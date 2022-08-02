const express = require('express');
const cors = require('cors');
const app = express();
const toDoRoutes = require('./routes/toDoRoutes');
const userRoutes = require('./routes/userRoutes');
const morgan = require('morgan');

app.use(cors());
app.use(express.json());

app.use("/api/main/tasks", toDoRoutes);
app.use("/api/users", userRoutes);

module.exports = app;

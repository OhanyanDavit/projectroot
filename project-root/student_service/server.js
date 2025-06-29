const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());

app.use('/api/students', studentRoutes);

app.listen(3001, () => console.log('Student service running on port 3001'));

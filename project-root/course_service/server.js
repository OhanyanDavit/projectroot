const express = require('express');
const app = express();
const courseRoutes = require('./routes/courseRoute');

app.use(express.json());
app.use('/api/courses', courseRoutes);

app.listen(3002, () => console.log('Course service running on port 3002'));

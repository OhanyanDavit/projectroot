const express = require('express');
const app = express();
const routes = require('./routes/registrationRoutes');

app.use(express.json());
app.use('/api/register', routes);

app.listen(3003, () => console.log('Registration service running on port 3003'));

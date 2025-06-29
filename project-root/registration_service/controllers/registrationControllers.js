const model = require('../models/registrationModels');

async function getAll(req, res) {
  const registrations = await model.getAllRegistrations();
  res.json(registrations);
}

async function create(req, res) {
  const { student_id, course_id } = req.body;
  const registration = await model.createRegistration(student_id, course_id);
  res.status(201).json(registration);
}

module.exports = { getAll, create };

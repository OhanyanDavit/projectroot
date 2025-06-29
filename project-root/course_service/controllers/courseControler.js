const model = require('../models/courseModels');

async function getAll(req, res) {
  const courses = await model.getAllCourses();
  res.json(courses);
}

async function getOne(req, res) {
  const course = await model.getCourseById(req.params.id);
  course ? res.json(course) : res.status(404).json({ message: 'Not found' });
}

async function create(req, res) {
  const { title } = req.body;
  const course = await model.createCourse(title);
  res.status(201).json(course);
}

async function update(req, res) {
  const { title } = req.body;
  const course = await model.updateCourse(req.params.id, title);
  course ? res.json(course) : res.status(404).json({ message: 'Not found' });
}

async function remove(req, res) {
  await model.deleteCourse(req.params.id);
  res.status(204).end();
}

module.exports = { getAll, getOne, create, update, remove };

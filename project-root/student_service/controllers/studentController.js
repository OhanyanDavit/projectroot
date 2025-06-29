const studentModel = require('../models/studentModel');

async function getAll(req, res) {
  const students = await studentModel.getAllStudents();
  res.json(students);
}

async function getOne(req, res) {
  const student = await studentModel.getStudentById(req.params.id);
  if (student) res.json(student);
  else res.status(404).json({ message: 'Student not found' });
}

async function create(req, res) {
  const { name } = req.body;
  const student = await studentModel.createStudent(name);
  res.status(201).json(student);
}

async function update(req, res) {
  const { name } = req.body;
  const student = await studentModel.updateStudent(req.params.id, name);
  if (student) res.json(student);
  else res.status(404).json({ message: 'Student not found' });
}

async function remove(req, res) {
  await studentModel.deleteStudent(req.params.id);
  res.status(204).end();
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};

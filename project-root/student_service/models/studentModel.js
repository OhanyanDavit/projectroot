const pool = require('../config/db');

async function getAllStudents() {
  const result = await pool.query('SELECT * FROM students');
  return result.rows;
}

async function getStudentById(id) {
  const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  return result.rows[0];
}

async function createStudent(name) {
  const result = await pool.query('INSERT INTO students(name) VALUES($1) RETURNING *', [name]);
  return result.rows[0];
}

async function updateStudent(id, name) {
  const result = await pool.query('UPDATE students SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
  return result.rows[0];
}

async function deleteStudent(id) {
  await pool.query('DELETE FROM students WHERE id = $1', [id]);
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};

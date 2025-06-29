const pool = require('../config/db');

async function getAllCourses() {
  const result = await pool.query('SELECT * FROM courses');
  return result.rows;
}

async function getCourseById(id) {
  const result = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
  return result.rows[0];
}

async function createCourse(title) {
  const result = await pool.query('INSERT INTO courses(title) VALUES($1) RETURNING *', [title]);
  return result.rows[0];
}

async function updateCourse(id, title) {
  const result = await pool.query('UPDATE courses SET title = $1 WHERE id = $2 RETURNING *', [title, id]);
  return result.rows[0];
}

async function deleteCourse(id) {
  await pool.query('DELETE FROM courses WHERE id = $1', [id]);
}

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};

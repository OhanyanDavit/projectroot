const pool = require('../config/db');

async function getAllRegistrations() {
  const result = await pool.query(`
    SELECT r.id, s.name AS student, c.title AS course
    FROM registrations r
    JOIN students s ON r.student_id = s.id
    JOIN courses c ON r.course_id = c.id
  `);
  return result.rows;
}

async function createRegistration(student_id, course_id) {
  const result = await pool.query(
    'INSERT INTO registrations(student_id, course_id) VALUES($1, $2) RETURNING *',
    [student_id, course_id]
  );
  return result.rows[0];
}

module.exports = {
  getAllRegistrations,
  createRegistration,
};

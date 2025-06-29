-- Active: 1749377451012@@127.0.0.1@5432@school
CREATE DATABASE school;

/c school;

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
SELECT * FROM students;


CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);

CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id)
);

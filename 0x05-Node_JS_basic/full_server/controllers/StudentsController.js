// full_server/controllers/StudentsController.js

const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByFields = await readDatabase(req.app.locals.dbFilePath);
      const fields = Object.keys(studentsByFields).sort();

      res.status(200).send('This is the list of our students\n');

      fields.forEach(field => {
        const students = studentsByFields[field].join(', ');
        res.write(`Number of students in ${field}: ${studentsByFields[field].length}. List: ${students}\n`);
      });

      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByFields = await readDatabase(req.app.locals.dbFilePath);
      const students = studentsByFields[major] || [];

      res.status(200).send(`List: ${students.join(', ')}\n`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;

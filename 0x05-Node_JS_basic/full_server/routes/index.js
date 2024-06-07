import express from 'express';
import AppCtrl from '../controllers/AppController';
import StdCtrl from '../controllers/StudentsController';

const router = express.Router();

router.use('/', AppCtrl.getHomepage);
router.use('/students', StdCtrl.getAllStudents);
router.use('/students/:major', StdCtrl.getAllStudentsByMajor);

export default router;

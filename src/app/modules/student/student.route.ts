import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

router.get('/', studentControllers.getAllStudents);
router.get('/:studentId', studentControllers.getASingleStudent);
router.delete('/:studentId', studentControllers.deleteASingleStudent);
export const studentRoutes = router;

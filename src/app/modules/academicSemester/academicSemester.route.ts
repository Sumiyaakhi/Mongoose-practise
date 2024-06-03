import express from 'express'
import { AcademicSemesterControllers } from './academicSemester.controller'
import validateRequest from '../middlewares/validateRequest'
import { AcademicSemesterValidations } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.CreateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
)

router.get('/', AcademicSemesterControllers.getAllAcademicSemester)
router.get(
  '/:semisterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
)

router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
)

export const AcademicSemesterRoutes = router

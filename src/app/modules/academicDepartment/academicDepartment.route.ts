import express from 'express'
import validateRequest from '../middlewares/validateRequest'
import { AcademicDepartmentValidations } from './academicDepartment.validation'
import { AcademicDepartmentControllers } from './academicDepartment.controllers'

const router = express.Router()

router.post(
  '/create-academic-departments',
  validateRequest(
    AcademicDepartmentValidations.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
)

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments)
router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
)
router.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidations.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
)

export const AcademicDepartmentsRoutes = router

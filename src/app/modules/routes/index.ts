import { Router } from 'express'
import { UserRoutes } from '../user/user.route'
import { StudentRoutes } from '../student/student.route'
import { AcademicSemesterRoutes } from '../academicSemester/academicSemester.route'
import { AcademicFacultiesRoutes } from '../academicFaculty/academicFaculty.route'
import { AcademicDepartmentsRoutes } from '../academicDepartment/academicDepartment.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-facalties',
    route: AcademicFacultiesRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentsRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router

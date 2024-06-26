import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import { AcademicDepartmentServices } from './academicDepartment.service'

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department is created succesfully',
    data: result,
  })
})

const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department are retrieved succesfully',
    data: result,
  })
})
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { studentId } = req.params
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
      studentId,
    )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department is retrieved succesfully',
    data: result,
  })
})

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params
  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
      departmentId,
      req.body,
    )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department is updated succesfully',
    data: result,
  })
})

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
}

import httpStatus from 'http-status'
import sendResponse from '../utils/sendResponse'
import catchAsync from '../utils/catchAsync'
import { AcademicSemesterServices } from './academicSemester.service'

const createAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  })
})

export const AcademicSemesterControllers = {
  createAcademicSemester,
}

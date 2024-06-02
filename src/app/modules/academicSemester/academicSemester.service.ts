import { AcademicSemesterNameCodeMapper } from './academicSemester.constant'
import {
  TAcademicSemester,
  TAcademicSemesterNameCodeMapper,
} from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  //   academicSemesterNameCodeMapper['Fall']
  if (AcademicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Academic Semester Code')
  }
  const result = await AcademicSemester.create(payload)

  return result
}

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
}
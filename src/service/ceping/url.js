/**
 * demo
 */
const baseUrl = '/inception';

export default {
  // 获取教师测评列表
  getRatingList: `${baseUrl}/teacherRating/ratingList`,
  // 获取教师测评基本信息
  getRatingInfo: `${baseUrl}/teacherRating/ratingInfo`,
  // 获取临时密钥
  getTempKey: `${baseUrl}/teacherRating/tempKey`,
  // 获取学科列表
  getSubjects: `${baseUrl}/teacherRating/upload/subjectProduct`,
  // 获取年级列表
  getGrades: `${baseUrl}/teacherRating/upload/grade`,
  // 获取教师列表
  getTeachers: `${baseUrl}/teacherRating/upload/teacher`,
};

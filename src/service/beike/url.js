/**
 * demo
 */
const baseUrl = '/inception';

export default {
  // 权限判断
  getPageAccess: `${baseUrl}/bkLesson/getPageAccess`,
  // 授课权限判断
  verification: `${baseUrl}/shouke/verification`,
  // 获取用户信息
  getMenu: `${baseUrl}/insCommon/menu`,
  // 获取科目
  getSubject: `${baseUrl}/bkLesson/getSubject`,
  // 获取上次备课记录
  getLastLesson: `${baseUrl}/beiShouKe/lastLesson`,
  // 保存用户选择班级（班级）记录
  saveHistory: `${baseUrl}/beiShouKe/classType`,
  // 获取班型列表
  getClassTypeList: `${baseUrl}/beiShouKe/classTypeList`,
  // 获取筛选条件
  getCondition: `${baseUrl}/beiShouKe/condition`,
  // 删除班型
  delClassType: `${baseUrl}/beiShouKe/classType`,
  // 获取我的班级及课程历史记录
  getMyClassAndType: `${baseUrl}/beiShouKe/myClassAndType`,
  // 获取班级数量
  getClassNum: `${baseUrl}/beiShouKe/classNum`,
  // 获取讲次列表
  getLessonList: `${baseUrl}/beiShouKe`,
  // 即将上课提醒
  getComingClass: `${baseUrl}/beiShouKe/comingClass`,

  getAdminList: `${baseUrl}/shouke/adminAndEducational`,

  getDetail: `${baseUrl}/bkLessonDetail/getDetail`,

  getHandoutTopic: `${baseUrl}/bkLessonDetail/getHandoutTopic`,
  // 考区列表
  getExamArea: `${baseUrl}/bkLessonDetail/getExamArea`,
  // 保存设置的考区
  saveExamArea: `${baseUrl}/bkLessonDetail/saveExamArea`,
  // 学员作业详情
  getStudentHomeworkTopicInfo: `${baseUrl}/studentTask/getStudentHomeworkTopicInfo`,
  // 本讲作业正确率信息
  getStudentRatioInfo: `${baseUrl}/studentTask/getStudentRatioInfo`,
  // 获取讲次序号和名称
  getLessionDetail: `${baseUrl}/studentTask/getLessionDetail`,
  // 获取左侧课程列表
  getLessonListByClassId: `${baseUrl}/studentTask/getLessonList`,
  // 题目和简答
  getQuestionDetail: `${baseUrl}/studentTask/getQuestionDetail`,
  // 获取个性化教案数据
  getModule: `${baseUrl}/prepareLesson/getModule`,
  // 更新模块时长
  updateModuleTime: `${baseUrl}/prepareLesson/updateModuleTime`,
  // 更新本讲备课任务
  updateLessonTask: `${baseUrl}/prepareLesson/updateTask`,
  // 详略标签处理
  updataLabelStatus: `${baseUrl}/prepareLesson/updatePieceStatus`,
  // 获取预览打印之课程所属信息
  getPrintLessonInfo: `${baseUrl}/prepareLesson/coursePrintInfo`,
  getPrintLesson: `${baseUrl}/bkLesson/getPrintLesson`,
  // 教师讲义打印（diy）
  getPrintLesson4Diy: `${baseUrl}/bkLesson/getPrintLesson4Diy`,
  // 是否提示切换编辑考区
  getCustomDistrictOldExam: `${baseUrl}/bkLessonDetail/getCustomDistrictOldExam`,
  // 根据讲次id获取视频列表
  getVideosById: `${baseUrl}/beiShouKe/videos/v1`, // beiShouKe/videos/v1
  // 新版目录
  getDetailNew: `${baseUrl}/beiShouKe/content/v1`,
  // 课件目录
  getCoursewareCatalog: `${baseUrl}/beiShouKe/coursewareCatalog`,
  // 获取课件个人批注
  getRemark: `${baseUrl}/beiShouKe/modules`,
  // 修改个人备注
  updateLessonRemark: `${baseUrl}/prepareLesson/updateLessonRemark`,
  // 备课随机提问模式学生
  getStudentListMock: `${baseUrl}/beiShouKe/getStudentList`,
  // 备课随机提问模式学生 未到
  absentStudentMock: `${baseUrl}/beiShouKe/absentStudent`,
  // 获取语文批注教案
  getChineseGuide: `${baseUrl}/bkLessonDetail/chinese/guide`,

  getPolyvToken: `${baseUrl}/polyv/getPolyvToken`,
  // 查询新手引导
  getOption: `${baseUrl}/option/getOption`,
  // 更新新手引导
  updateOptionStatus: `${baseUrl}/option/updateOptionStatus`,
  // 获取筛选条件-选择班级课程页
  getMyCondition: `${baseUrl}/beiShouKe/my/condition`,
  //快速建班-获取信息
  newClass: `${baseUrl}/beiShouKe/newClass/index`,
  // 快速建班-保存
  saveNewClass: `${baseUrl}/beiShouKe/newClass/save`
};

import qs from 'qs';
import { fetch } from 'common/fetch';
import url from './url';
const noloading = true;

export default {
  // 权限判断
  getPageAccess() {
    return fetch({
      url: url.getPageAccess,
      method: 'get'
    });
  },
  verification() {
    return fetch({
      url: url.verification,
      method: 'get'
    });
  },
  // 顶部菜单栏
  getMenu(data) {
    return fetch({
      url: url.getMenu,
      method: 'post',
      data
    });
  },
  // 获取科目
  getSubject() {
    return fetch({
      url: url.getSubject,
      method: 'get'
    });
  },
  // 获取上次备课记录
  getLastLesson() {
    return fetch({
      url: url.getLastLesson,
      method: 'get'
    });
  },
  // 保存用户选择班级（班级）记录
  saveHistory(data) {
    return fetch({
      url: url.saveHistory,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  // 获取班型列表
  getClassTypeList(params) {
    return fetch({
      url: url.getClassTypeList,
      method: 'get',
      params
    });
  },
  // 获取筛选条件
  getCondition(subjectId) {
    return fetch({
      url: `${url.getCondition}/${subjectId}`,
      method: 'get'
    });
  },
  // 删除班型
  delClassType(classTypeId) {
    return fetch({
      url: `${url.delClassType}/${classTypeId}`,
      method: 'delete'
    });
  },
  // 获取我的班级及课程历史记录
  getMyClassAndType(params) {
    return fetch({
      url: url.getMyClassAndType,
      method: 'get',
      params
    });
  },
  // 获取班级数量
  getClassNum() {
    return fetch({
      url: url.getClassNum,
      method: 'get'
    });
  },
  // 获取讲次列表
  getLessonListNew (params) {
    return fetch({
      url: `${url.getLessonList}/${params.businessId}/${params.type}/lessonList`,
      method: 'get'
    });
  },
  // 即将上课提醒
  getComingClass() {
    return fetch({
      url: url.getComingClass,
      method: 'get',
      noloading
    });
  },
  getAdminList() {
    return fetch({
      url: url.getAdminList,
      method: 'get'
    });
  },
  getDetail(data) {
    return fetch({
      url: url.getDetail,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getHandoutTopic(data) {
    return fetch({
      url: url.getHandoutTopic,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getExamArea(data) {
    return fetch({
      url: url.getExamArea,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  saveExamArea(data) {
    return fetch({
      url: url.saveExamArea,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getStudentHomeworkTopicInfo(data) {
    return fetch({
      url: url.getStudentHomeworkTopicInfo,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getStudentRatioInfo(data) {
    return fetch({
      url: url.getStudentRatioInfo,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getLessionDetail(data) {
    return fetch({
      url: url.getLessionDetail,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getLessonListByClassId(data) {
    return fetch({
      url: url.getLessonListByClassId,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getQuestionDetail(data) {
    return fetch({
      url: url.getQuestionDetail,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getModule(data) {
    return fetch({
      url: url.getModule,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  updateModuleTime(data) {
    return fetch({
      url: url.updateModuleTime,
      method: 'post',
      data
    });
  },
  updateLessonTask(data) {
    return fetch({
      url: url.updateLessonTask,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  updataLabelStatus(data) {
    return fetch({
      url: url.updataLabelStatus,
      method: 'post',
      data
    });
  },
  getPrintLessonInfo(data) {
    return fetch({
      url: url.getPrintLessonInfo,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getPrintLesson(data) {
    return fetch({
      url: url.getPrintLesson,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getPrintLesson4Diy(data) {
    return fetch({
      url: url.getPrintLesson4Diy,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getCustomDistrictOldExam(data) {
    return fetch({
      url: url.getCustomDistrictOldExam,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getVideosById(params) {
    return fetch({
      url: `${url.getVideosById}/${params.type}/${params.businessId}/${params.lessonId}`,
      method: 'get'
    });
  },
  getDetailNew(lessonId, type, businessId) {
    return fetch({
      url: `${url.getDetailNew}/${lessonId}/${type}/${businessId}`,
      method: 'get'
    });
  },
  getCoursewareCatalog(params) {
    return fetch({
      url: `${url.getCoursewareCatalog}/${params.type}/${params.businessId}/${params.lessonId}`,
      method: 'get'
    });
  },
  getRemark(lessonId) {
    return fetch({
      url: `${url.getRemark}/${lessonId}`,
      method: 'get'
    });
  },
  updateLessonRemark(data) {
    return fetch({
      url: url.updateLessonRemark,
      method: 'post',
      data
    });
  },
  getStudentListMock(params) {
    return fetch({
      url: `${url.getStudentListMock}`,
      method: 'get',
      params
    });
  },
  absentStudentMock(params) {
    return fetch({
      url: `${url.absentStudentMock}`,
      method: 'get',
      params
    });
  },
  getChineseGuide(data) {
    return fetch({
      url: url.getChineseGuide,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    });
  },
  getPolyvToken(params) {
    return fetch({
      url: `${url.getPolyvToken}`,
      method: 'get',
      params
    })
  },
  getOption(params) {
    return fetch({
      url: url.getOption,
      method: 'get',
      params
    });
  },
  updateOptionStatus(params) {
    return fetch({
      url: url.updateOptionStatus,
      method: 'get',
      params
    });
  },
  getMyCondition() {
    return fetch({
      url: url.getMyCondition,
      method: 'get'
    });
  },
  newClass() {
    return fetch({
      url: url.newClass,
      method: 'get'
    });
  },
  saveNewClass(data) {
    return fetch({
      url: url.saveNewClass,
      method: 'post',
      data
    });
  }
};

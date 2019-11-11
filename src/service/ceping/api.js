// import qs from 'qs';
import { fetch } from 'common/fetch';
import url from './url';
// const noloading = true;

export default {
  // 获取教师测评列表
  getRatingList(data) {
    return fetch({
      url: url.getRatingList,
      method: 'get',
      data,
    })
  },
  getRatingInfo(data) {
    return fetch({
      url: url.getRatingInfo,
      method: 'get'
    })
  },
  // 获取临时密钥
  getTempKey() {
    return fetch({
      url: url.getTempKey,
      method: 'get'
    })
  },
  getSubjects(){
    return fetch({
      url: url.getSubjects,
      method: 'get'
    })
  },
  getGrades(params){
    return fetch({
      url: `${url.getGrades}/${params.subjectProductId}`,
      method: 'get'
    })
  },
  getTeachers(params){
    return fetch({
      url: `${url.getTeachers}/${params.subjectProductId}/${params.gradeId}`,
      method: 'get'
    })
  }
};

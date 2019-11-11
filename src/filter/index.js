import utils from '../utils/utils';
import moment from 'moment'

export default (Vue) => {
  /**
   * 转换学期
   * 1：春 2：夏 3：秋 4：冬
   */
  Vue.filter('filterPerid', (value) => {
    const map = {
      1: '春季',
      2: '暑假',
      3: '秋季',
      4: '寒假'
    };
    return map[value];
  });
  Vue.filter('formatTime', (value) => {
    return moment(value).format('YYYY-MM-DD HH:mm:ss')
  })
  /**
   * 返回页面按钮ID 埋点使用
   */
  Vue.filter('aadId', (pathName, routeName, btnId) => {
    if (pathName && routeName && btnId) {
      return utils.getAad(pathName, routeName, btnId);
    }
    return '';
  });
};

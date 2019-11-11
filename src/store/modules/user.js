import S from 'service';

const state = {
  userInfo: {}
}

const getters = {
  authenticated: (state) => {
    return state.userInfo.userId != null;
  },
  userInfo: (state) => {
    return state.userInfo;
  },
  // 是否有权限创建班级
  canCreateClass(state) {
    const roles = state.userInfo.roles;
    // 非双师主讲 + （教师+教务）或者 （教师+管理员）或者（教师+超管）
    return state.userInfo.fastCreateClass && state.userInfo.doubleTeacherStatus !== 2 && roles.indexOf('teacher') !== -1 && (roles.indexOf('jiaowu') !== -1 || roles.indexOf('manage') !== -1 || roles.indexOf('super_manager') !== -1);
  }
}

const mutations = {
  // 更新用户state数据
  async updateUserInfo(state, data) {
    state.userInfo = Object.assign({}, state.userInfo, data);
  }
}

const actions = {
  // 加载用户信息
  fetchUserInfo() {
    return S.bk.getMenu();
  },
  getPageAccess() {
    return S.bk.getPageAccess();
  },
  getClassNum() {
    return S.bk.getClassNum();
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

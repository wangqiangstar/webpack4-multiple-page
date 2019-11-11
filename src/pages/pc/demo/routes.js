const Index = () => import(/* webpackChunkName: 'demo-index'*/'./views/index');
const HelloWorld = () => import(/* webpackChunkName: 'demo-HelloWorld'*/'./views/common/HelloWorld');

export default {
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      children: [
        // 课件
        {
          path: '/kejian',
          name: 'kejian',
          component: HelloWorld,
          meta: {
            pad: 'aw332'
          }
        }
      ]
    }
  ]
};

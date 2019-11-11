import logConfig from '../log_config';
import S from 'service';

export default {
  /**
   * 音频播放
   * @param {String} oAudio audio dom
   * @param {String} url audio url
   * @returns null
   */
  audioPlay(oAudio, url) {
    oAudio.src = url;
    oAudio.play();
  },
  /**
   * 音频停止
   * @param {String} oAudio audio dom
   * @param {String} url audio url
   */
  audioPause(oAudio, url) {
    if(!oAudio && !url) {
      oAudio.src = url;
      oAudio.pause();
    }
  },
  audioPauseDom(oAudio, url) {
    if(oAudio && url) {
      oAudio.src = url;
      oAudio.pause();
    }
  },
  appendScript(name, url) {
    let _url = '';
    return new Promise((resolve) => {
      if (url === undefined) {
        _url = `/assets/libs/${name}`;
      } else {
        _url = url;
      }

      if (!document.getElementById(name)) {
        const script = document.createElement('script');
        script.id = name;

        if (_url.indexOf('?') === -1) {
          script.src = _url + '?v=' + (Math.random() + '').replace('0.', '');
        } else {
          script.src = _url + '&v=' + (Math.random() + '').replace('0.', '');
        }
        document.body.appendChild(script);
        script.onload = resolve;
      } else {
        resolve();
      }
    });
  },
  _ajaxRequest(opt) {
    opt.async = opt.async === undefined;
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'GET';
    opt.url = opt.url || '';
    opt.data = opt.data || null;
    let xmlHttp = null;
    if (window.XMLHttpRequest) {
      xmlHttp = new window.XMLHttpRequest();
    }
    else {
      xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    let params = {};
    for (let key in opt.data) {
      params[key] = opt.data[key];
    }
    let postData = JSON.stringify(params);
    return new Promise((resolve, reject) => {
      if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        // xmlHttp.withCredentials = true;
        if (opt.token)
        { xmlHttp.setRequestHeader('X-Storage-Authorization', opt.token); }
        xmlHttp.send(postData);
      }
      else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + (postData ? '?' + postData : ''), opt.async);
        xmlHttp.withCredentials = true;
        xmlHttp.send(null);
      }

      xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4 && (xmlHttp.status === 200 || xmlHttp.status === 0)) {
          if (!xmlHttp.responseText) { 
            reject(); 
          }
          resolve(JSON.parse(xmlHttp.responseText).body);
        }
      };
    });
  },
  /**
   * 动画垂直滚动到页面指定位置
   * @param { Number } currentY 当前位置
   * @param { Number } targetY 目标位置
   */
  scrollAnimation(dom, currentY, targetY) {
    // 获取当前位置方法
    // const currentY = document.documentElement.scrollTop || document.body.scrollTop

    // 计算需要移动的距离
    let needScrollTop = targetY - currentY;
    let _currentY = currentY;
    setTimeout(() => {
      // 一次调用滑动帧数，每次调用会不一样
      const dist = Math.ceil(needScrollTop / 10);
      _currentY += dist;
      dom.scrollTo(_currentY, currentY);
      // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
      if (needScrollTop > 10 || needScrollTop < -10) {
        this.scrollAnimation(dom, _currentY, targetY);
      } else {
        dom.scrollTo(_currentY, targetY);
      }
    }, 1);
  },
  // 全屏
  requestFullscreen(element) {
    if (!element) {
      element = document.body;
    }
    try {
      if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      }
    } catch (error) {
      console.log('requestFullscreen error: ', error);
    }
  },
  // 退出全屏
  exitFullscreen() {
    try {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.oRequestFullscreen) {
        document.oCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } catch (error) {
      console.log('exitFullscreen error: ', error);
    }
  },
  /**
   * 页面埋点对应id值
   * @param {*} pathName
   * @param {*} routeName
   */
  getPad(pathName, routeName, routePath) {
    console.log(pathName, routeName, routePath)
    if (pathName === '/' || pathName === '') {
      pathName = 'index';
    }
    try {
      const pad = logConfig[pathName][routeName]['pad'];
      return pad;
      // if(routeName === 'jiaoan' && routePath) {
      //   let path = routePath.substring(1).replace('/', '-');
      //   let pad = logConfig[pathName][routeName]['subPad'][path];
      //   let subPad = logConfig[pathName][routeName]['subPad'];
      //   return pad;
      // }else {
      //   const pad = logConfig[pathName][routeName]['pad'];
      //   return pad;
      // }
      
    } catch (error) {
      return ''
    }
    
  },
  /**
   * 点击事件埋点统计对应值
   * @param {String} pathName 页面pad
   * @param {} id
   */
  getAad(pathName, routeName, btnId) {
    try {
      let aads = logConfig[pathName][routeName]['aads'];
      let aad = aads[btnId];
      return aad;
    } catch (error) {
      return '';
    }
    
  },
  /**
   * 手动发送点击埋点
   */
  sendAction(pathName, routeName, btnId, options={}) {
    let aad = this.getAad(pathName, routeName, btnId);
    let t_obj = document.getElementById('maidian_page');
    let uid = t_obj.getAttribute('data-uid');
    let pad = t_obj.getAttribute('data-pad');
    
    let target = document.createElement('div');
    target.setAttribute('data-uid', uid);
    target.setAttribute('data-pad', pad);
    target.setAttribute('data-aad', aad);
    if (Object.keys(options).length) {
      target.setAttribute('data-pp1', JSON.stringify(options))
    }
    
    window.track_util.send_action(target, 'clk');
  },
  getPathName() {
    let pathname = window.location.pathname;
    return pathname.substr(1, pathname.indexOf('.') - 1);
  },
  /**
   * 初始化保利威视播放器-flash
   * @param {*} wrapId 
   * @param {*} vid 
   * @param {*} autoplay 
   */
  initPlayerFlash(wrapId, options) {
    let player = polyvObject(`#${wrapId}`).videoPlayer({
      'width': '100%',
      'height': '100%',
      'vid': options.vid,
      'session_id': options.session_id,
      'flashParams': {
        'wmode': 'window',
        'allowScriptAccess': 'always',
        'allowFullScreen': 'true'
      },
      'flashvars': {
        'autoplay': options.autoplay ? 1 : 0
      }
    });
    return player;
  },
  /**
   * 初始化保利威视播放器-HTML5
   * @param {*} wrapId 
   * @param {*} vid 
   * @param {*} autoplay 
   */
  initPlayerH5(wrapId, options) {
    if(!wrapId || !options.vid) {
      return false;
    }
    let player = polyvPlayer({
      wrap: `#${wrapId}`,
      width: '100%',
      height: '100%',
      speed: false,
      hideSwitchPlayer: true,
      autoplay: options.autoplay,
      speed: [0.5, 1.5, 1.7],
      statistics: {
        session_id: options.session_id
      },
      vid: options.vid,
      'allowFullscreen': options.allowFullscreen,
      ignoreIE: true,
      playsafe: function(vid, next) {
        S.bk.getPolyvToken({vid: vid})
          .then((res) => {
            next(res)
          })
      }
    });
    return player;
  },

  throttle(func, limit) {
    var inThrottle;
    return function() {
      var context = this
      var args = arguments;
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(function() {
          inThrottle = false
        }, limit)
      }
    }
  },
  // 预加载图片
  preloadImg(arr) {
    let imgWrap = [];
    for(var i =0; i< arr.length ;i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];
    }
  },
  // python url 跳转函数
  jumpPython(context, url) {
    const delayTime = 3000;
    if(!context.openedTab){
      context.openedTab = window.open(url);
      // 因为接口返回 url 的时候，虚拟机页面还没有完全准备好，两秒以后刷新才能正常使用
      setTimeout(() => {
        context.openedTab.location.href = url;
      }, delayTime);
    }else{
      if(context.openedTab.closed){
        context.openedTab = window.open(url);
        setTimeout(() => {
          context.openedTab.location.href = url;
        }, delayTime);
      }else{
        setTimeout(() => {
          context.openedTab.location.href = url; 
        }, delayTime);
      }
    }
  },
  
};

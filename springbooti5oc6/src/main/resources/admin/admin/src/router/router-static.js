import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import news from '@/views/modules/news/list'
import yuangong from '@/views/modules/yuangong/list'
import yuangongqiandao from '@/views/modules/yuangongqiandao/list'
import qiuzhijianli from '@/views/modules/qiuzhijianli/list'
import jiangchengjilu from '@/views/modules/jiangchengjilu/list'
import zhaopinxinxi from '@/views/modules/zhaopinxinxi/list'
import yuangongqingjia from '@/views/modules/yuangongqingjia/list'
import luyongxinxi from '@/views/modules/luyongxinxi/list'
import xinchoujilu from '@/views/modules/xinchoujilu/list'
import qiuzhizhe from '@/views/modules/qiuzhizhe/list'
import peixunxuexi from '@/views/modules/peixunxuexi/list'
import xiaojiaxinxi from '@/views/modules/xiaojiaxinxi/list'
import mianshiyaoqing from '@/views/modules/mianshiyaoqing/list'
import orgname from '@/views/modules/orgname/list'
import jobTitle from '@/views/modules/jobTitle/list'
import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
  path: '/index',
  name: '系统首页',
  component: Index,
  children: [{
    // 这里不设置值，是把main作为默认页面
    path: '/',
    name: '系统首页',
    component: Home,
    meta: { icon: '', title: 'center' }
  }, {
    path: '/updatePassword',
    name: '修改密码',
    component: UpdatePassword,
    meta: { icon: '', title: 'updatePassword' }
  }, {
    path: '/pay',
    name: '支付',
    component: pay,
    meta: { icon: '', title: 'pay' }
  }, {
    path: '/center',
    name: '个人信息',
    component: center,
    meta: { icon: '', title: 'center' }
  }
    , {
    path: '/news',
    name: '公告信息',
    component: news
  }
    , {
    path: '/yuangong',
    name: '员工',
    component: yuangong
  }
    , {
    path: '/yuangongqiandao',
    name: '员工签到',
    component: yuangongqiandao
  }
    , {
    path: '/qiuzhijianli',
    name: '求职简历',
    component: qiuzhijianli
  }
    , {
    path: '/jiangchengjilu',
    name: '奖惩记录',
    component: jiangchengjilu
  }
    , {
    path: '/zhaopinxinxi',
    name: '招聘信息',
    component: zhaopinxinxi
  }
    , {
    path: '/yuangongqingjia',
    name: '员工请假',
    component: yuangongqingjia
  }
    , {
    path: '/luyongxinxi',
    name: '录用信息',
    component: luyongxinxi
  }
    , {
    path: '/xinchoujilu',
    name: '薪酬记录',
    component: xinchoujilu
  }, {
    path: '/orgname',
    name: '部门管理',
    component: orgname
  } ,{
    path: '/jobTitle',
    name: '岗位管理',
    component: jobTitle
  }
  
    , {
    path: '/qiuzhizhe',
    name: '求职者',
    component: qiuzhizhe
  }
    , {
    path: '/peixunxuexi',
    name: '培训学习',
    component: peixunxuexi
  }
    , {
    path: '/xiaojiaxinxi',
    name: '销假信息',
    component: xiaojiaxinxi
  }
    , {
    path: '/mianshiyaoqing',
    name: '面试邀请',
    component: mianshiyaoqing
  }
    , {
    path: '/config',
    name: '轮播图管理',
    component: config
  }
  ]
},
{
  path: '/login',
  name: 'login',
  component: Login,
  meta: { icon: '', title: 'login' }
},
{
  path: '/register',
  name: 'register',
  component: register,
  meta: { icon: '', title: 'register' }
},
{
  path: '/',
  name: '系统首页',
  redirect: '/index'
}, /*默认跳转路由*/
{
  path: '*',
  component: NotFound
}
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router;

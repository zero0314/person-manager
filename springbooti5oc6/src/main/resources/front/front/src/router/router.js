import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yuangongList from '../pages/yuangong/list'
import yuangongDetail from '../pages/yuangong/detail'
import yuangongAdd from '../pages/yuangong/add'
import qiuzhizheList from '../pages/qiuzhizhe/list'
import qiuzhizheDetail from '../pages/qiuzhizhe/detail'
import qiuzhizheAdd from '../pages/qiuzhizhe/add'
import xinchoujiluList from '../pages/xinchoujilu/list'
import xinchoujiluDetail from '../pages/xinchoujilu/detail'
import xinchoujiluAdd from '../pages/xinchoujilu/add'
import peixunxuexiList from '../pages/peixunxuexi/list'
import peixunxuexiDetail from '../pages/peixunxuexi/detail'
import peixunxuexiAdd from '../pages/peixunxuexi/add'
import jiangchengjiluList from '../pages/jiangchengjilu/list'
import jiangchengjiluDetail from '../pages/jiangchengjilu/detail'
import jiangchengjiluAdd from '../pages/jiangchengjilu/add'
import yuangongqingjiaList from '../pages/yuangongqingjia/list'
import yuangongqingjiaDetail from '../pages/yuangongqingjia/detail'
import yuangongqingjiaAdd from '../pages/yuangongqingjia/add'
import xiaojiaxinxiList from '../pages/xiaojiaxinxi/list'
import xiaojiaxinxiDetail from '../pages/xiaojiaxinxi/detail'
import xiaojiaxinxiAdd from '../pages/xiaojiaxinxi/add'
import yuangongqiandaoList from '../pages/yuangongqiandao/list'
import yuangongqiandaoDetail from '../pages/yuangongqiandao/detail'
import yuangongqiandaoAdd from '../pages/yuangongqiandao/add'
import zhaopinxinxiList from '../pages/zhaopinxinxi/list'
import zhaopinxinxiDetail from '../pages/zhaopinxinxi/detail'
import zhaopinxinxiAdd from '../pages/zhaopinxinxi/add'
import qiuzhijianliList from '../pages/qiuzhijianli/list'
import qiuzhijianliDetail from '../pages/qiuzhijianli/detail'
import qiuzhijianliAdd from '../pages/qiuzhijianli/add'
import mianshiyaoqingList from '../pages/mianshiyaoqing/list'
import mianshiyaoqingDetail from '../pages/mianshiyaoqing/detail'
import mianshiyaoqingAdd from '../pages/mianshiyaoqing/add'
import luyongxinxiList from '../pages/luyongxinxi/list'
import luyongxinxiDetail from '../pages/luyongxinxi/detail'
import luyongxinxiAdd from '../pages/luyongxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yuangong',
					component: yuangongList
				},
				{
					path: 'yuangongDetail',
					component: yuangongDetail
				},
				{
					path: 'yuangongAdd',
					component: yuangongAdd
				},
				{
					path: 'qiuzhizhe',
					component: qiuzhizheList
				},
				{
					path: 'qiuzhizheDetail',
					component: qiuzhizheDetail
				},
				{
					path: 'qiuzhizheAdd',
					component: qiuzhizheAdd
				},
				{
					path: 'xinchoujilu',
					component: xinchoujiluList
				},
				{
					path: 'xinchoujiluDetail',
					component: xinchoujiluDetail
				},
				{
					path: 'xinchoujiluAdd',
					component: xinchoujiluAdd
				},
				{
					path: 'peixunxuexi',
					component: peixunxuexiList
				},
				{
					path: 'peixunxuexiDetail',
					component: peixunxuexiDetail
				},
				{
					path: 'peixunxuexiAdd',
					component: peixunxuexiAdd
				},
				{
					path: 'jiangchengjilu',
					component: jiangchengjiluList
				},
				{
					path: 'jiangchengjiluDetail',
					component: jiangchengjiluDetail
				},
				{
					path: 'jiangchengjiluAdd',
					component: jiangchengjiluAdd
				},
				{
					path: 'yuangongqingjia',
					component: yuangongqingjiaList
				},
				{
					path: 'yuangongqingjiaDetail',
					component: yuangongqingjiaDetail
				},
				{
					path: 'yuangongqingjiaAdd',
					component: yuangongqingjiaAdd
				},
				{
					path: 'xiaojiaxinxi',
					component: xiaojiaxinxiList
				},
				{
					path: 'xiaojiaxinxiDetail',
					component: xiaojiaxinxiDetail
				},
				{
					path: 'xiaojiaxinxiAdd',
					component: xiaojiaxinxiAdd
				},
				{
					path: 'yuangongqiandao',
					component: yuangongqiandaoList
				},
				{
					path: 'yuangongqiandaoDetail',
					component: yuangongqiandaoDetail
				},
				{
					path: 'yuangongqiandaoAdd',
					component: yuangongqiandaoAdd
				},
				{
					path: 'zhaopinxinxi',
					component: zhaopinxinxiList
				},
				{
					path: 'zhaopinxinxiDetail',
					component: zhaopinxinxiDetail
				},
				{
					path: 'zhaopinxinxiAdd',
					component: zhaopinxinxiAdd
				},
				{
					path: 'qiuzhijianli',
					component: qiuzhijianliList
				},
				{
					path: 'qiuzhijianliDetail',
					component: qiuzhijianliDetail
				},
				{
					path: 'qiuzhijianliAdd',
					component: qiuzhijianliAdd
				},
				{
					path: 'mianshiyaoqing',
					component: mianshiyaoqingList
				},
				{
					path: 'mianshiyaoqingDetail',
					component: mianshiyaoqingDetail
				},
				{
					path: 'mianshiyaoqingAdd',
					component: mianshiyaoqingAdd
				},
				{
					path: 'luyongxinxi',
					component: luyongxinxiList
				},
				{
					path: 'luyongxinxiDetail',
					component: luyongxinxiDetail
				},
				{
					path: 'luyongxinxiAdd',
					component: luyongxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhaopinxinxi/detail"],{"20ce":function(t,i,n){"use strict";var e=n("472a"),a=n.n(e);a.a},"3bb5":function(t,i,n){"use strict";(function(t){n("6cdc"),n("921b");e(n("66fd"));var i=e(n("ef19"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("543d")["createPage"])},"472a":function(t,i,n){},"6cab":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,i,n,e,a,r,s){try{var o=t[r](s),u=o.value}catch(c){return void n(c)}o.done?i(u):Promise.resolve(u).then(e,a)}function s(t){return function(){var i=this,n=arguments;return new Promise((function(e,a){var s=t.apply(i,n);function o(t){r(s,e,a,o,u,"next",t)}function u(t){r(s,e,a,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(e.default.mark((function t(i){return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=i.id,i.userid&&(this.userid=i.userid),this.init();case 3:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var i=s(e.default.mark((function i(n){var a,r;return e.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=t.getStorageSync("nowTable"),i.next=3,this.$api.session(a);case 3:r=i.sent,this.user=r.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 6:case"end":return i.stop()}}),i,this)})));function n(t){return i.apply(this,arguments)}return n}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","zhaopinxinxi"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(i){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(i.id,"&userid=")+this.userid)},onAcrossTap:function(i,n,e,a,r){if(t.setStorageSync("crossTable","zhaopinxinxi"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",e),t.setStorageSync("statusColumnValue",r),t.setStorageSync("tips",a),""!=e&&!e.startsWith("[")){var s=t.getStorageSync("crossObj");for(var o in s)if(o==e&&s[o]==r)return void this.$utils.msg(a)}this.$utils.jump("../".concat(i,"/add-or-update?cross=true"))},init:function(){var t=s(e.default.mark((function t(){var i;return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timer&&clearInterval(this.timer),t.next=3,this.$api.info("zhaopinxinxi",this.id);case 3:i=t.sent,this.detail=i.data,this.swiperList=this.detail.zhaopinfengmian?this.detail.zhaopinfengmian.split(","):[],this.detail.zhiweimiaoshu=this.detail.zhiweimiaoshu.replace(/img src/gi,'img style="width:100%;" src'),this.detail.jibentiaojian=this.detail.jibentiaojian.replace(/img src/gi,'img style="width:100%;" src'),this.detail.gongzidaiyu=this.detail.gongzidaiyu.replace(/img src/gi,'img style="width:100%;" src'),this.detail.zhaopinliucheng=this.detail.zhaopinliucheng.replace(/img src/gi,'img style="width:100%;" src');case 10:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=s(e.default.mark((function t(i){return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.endSuccess(i.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(i){var n=this;i=n.$base.url+i,t.downloadFile({url:i,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(i))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=s(e.default.mark((function t(){return e.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discusszhaopinxinxi/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),onSHTap:function(){this.$refs.popup.open()}}};i.default=o}).call(this,n("543d")["default"])},"6fc3":function(t,i,n){"use strict";n.r(i);var e=n("6cab"),a=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(i,t,(function(){return e[t]}))}(r);i["default"]=a.a},c3ae:function(t,i,n){"use strict";var e={"mescroll-uni":()=>Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f05e"))},a=function(){var t=this,i=t.$createElement,n=(t._self._c,t.__map(t.swiperList,(function(i,n){var e=i.substring(0,4);return{$orig:t.__get_orig(i),g0:e}}))),e=t.isAuth("zhaopinxinxi","求职"),a=t.isAuthFront("zhaopinxinxi","求职");t.$mp.data=Object.assign({},{$root:{l0:n,m0:e,m1:a}})},r=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return e}))},ef19:function(t,i,n){"use strict";n.r(i);var e=n("c3ae"),a=n("6fc3");for(var r in a)"default"!==r&&function(t){n.d(i,t,(function(){return a[t]}))}(r);n("20ce");var s,o=n("f0c5"),u=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,"fae76074",null,!1,e["a"],s);i["default"]=u.exports}},[["3bb5","common/runtime","common/vendor"]]]);
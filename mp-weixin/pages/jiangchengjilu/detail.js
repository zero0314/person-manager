(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiangchengjilu/detail"],{"2e09":function(t,n,e){"use strict";e.r(n);var i=e("dd11"),r=e("e07c");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("c664");var s,u=e("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"897efb7c",null,!1,i["a"],s);n["default"]=o.exports},"96c7":function(t,n,e){},a052:function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");i(e("66fd"));var n=i(e("2e09"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},bf76:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,r,a,s){try{var u=t[a](s),o=u.value}catch(c){return void e(c)}u.done?n(o):Promise.resolve(o).then(i,r)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var s=t.apply(n,e);function u(t){a(s,i,r,u,o,"next",t)}function o(t){a(s,i,r,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=n.id,n.userid&&(this.userid=n.userid),this.init();case 3:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var n=s(i.default.mark((function n(e){var r,a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:a=n.sent,this.user=a.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 6:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","jiangchengjilu"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(n){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(n.id,"&userid=")+this.userid)},onAcrossTap:function(n,e,i,r,a){if(t.setStorageSync("crossTable","jiangchengjilu"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",i),t.setStorageSync("statusColumnValue",a),t.setStorageSync("tips",r),""!=i&&!i.startsWith("[")){var s=t.getStorageSync("crossObj");for(var u in s)if(u==i&&s[u]==a)return void this.$utils.msg(r)}this.$utils.jump("../".concat(n,"/add-or-update?cross=true"))},init:function(){var t=s(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timer&&clearInterval(this.timer),t.next=3,this.$api.info("jiangchengjilu",this.id);case 3:n=t.sent,this.detail=n.data,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[];case 6:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=s(i.default.mark((function t(n){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.endSuccess(n.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(n){var e=this;n=e.$base.url+n,t.downloadFile({url:n,success:function(t){200===t.statusCode&&(e.$utils.msg("下载成功"),window.open(n))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=s(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussjiangchengjilu/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()}}};n.default=u}).call(this,e("543d")["default"])},c664:function(t,n,e){"use strict";var i=e("96c7"),r=e.n(i);r.a},dd11:function(t,n,e){"use strict";var i={"mescroll-uni":()=>Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"f05e"))},r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.swiperList,(function(n,e){var i=n.substring(0,4);return{$orig:t.__get_orig(n),g0:i}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},a=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},e07c:function(t,n,e){"use strict";e.r(n);var i=e("bf76"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a}},[["a052","common/runtime","common/vendor"]]]);
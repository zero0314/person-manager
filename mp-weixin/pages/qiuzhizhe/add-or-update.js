(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qiuzhizhe/add-or-update"],{"28c5":function(e,t,i){"use strict";var n=i("cd37"),r=i.n(n);r.a},"3e3c":function(e,t,i){"use strict";(function(e){i("6cdc"),i("921b");n(i("66fd"));var t=n(i("ca46"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},"761d":function(e,t,i){"use strict";var n,r=function(){var e=this,t=e.$createElement,i=(e._self._c,e.ruleForm.touxiang.split(","));e.$mp.data=Object.assign({},{$root:{g0:i}})},a=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},"90e6":function(e,t,i){"use strict";i.r(t);var n=i("e3e7"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},ca46:function(e,t,i){"use strict";i.r(t);var n=i("761d"),r=i("90e6");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("28c5");var u,s=i("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"46aaee35",null,!1,n["a"],u);t["default"]=o.exports},cd37:function(e,t,i){},e3e7:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,i,n,r,a,u){try{var s=e[a](u),o=s.value}catch(h){return void i(h)}s.done?t(o):Promise.resolve(o).then(n,r)}function u(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var u=e.apply(t,i);function s(e){a(u,n,r,s,o,"next",e)}function o(e){a(u,n,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"e2b1"))},o=function(){return i.e("components/xia-editor/xia-editor").then(i.bind(null,"064f"))},h={data:function(){return{cross:"",ruleForm:{qiuzhizhezhanghao:"",mima:"",qiuzhizhexingming:"",xingbie:"",nianling:"",zhuanye:"",xueli:"",lianxidianhua:"",dianziyouxiang:"",shenfenzheng:"",touxiang:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{qiuzhizhezhanghao:!1,mima:!1,qiuzhizhexingming:!1,xingbie:!1,nianling:!1,zhuanye:!1,xueli:!1,lianxidianhua:!1,dianziyouxiang:!1,shenfenzheng:!1,touxiang:!1}}},components:{wPicker:s,xiaEditor:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(n.default.mark((function t(i){var r,a,u,s;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(a=t.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){t.next=14;break}return this.ruleForm.id=i.id,t.next=12,this.$api.info("qiuzhizhe",this.ruleForm.id);case 12:a=t.sent,this.ruleForm=a.data;case 14:if(this.cross=i.cross,!i.cross){t.next=66;break}u=e.getStorageSync("crossObj"),t.t0=n.default.keys(u);case 18:if((t.t1=t.t0()).done){t.next=66;break}if(s=t.t1.value,"qiuzhizhezhanghao"!=s){t.next=24;break}return this.ruleForm.qiuzhizhezhanghao=u[s],this.ro.qiuzhizhezhanghao=!0,t.abrupt("continue",18);case 24:if("mima"!=s){t.next=28;break}return this.ruleForm.mima=u[s],this.ro.mima=!0,t.abrupt("continue",18);case 28:if("qiuzhizhexingming"!=s){t.next=32;break}return this.ruleForm.qiuzhizhexingming=u[s],this.ro.qiuzhizhexingming=!0,t.abrupt("continue",18);case 32:if("xingbie"!=s){t.next=36;break}return this.ruleForm.xingbie=u[s],this.ro.xingbie=!0,t.abrupt("continue",18);case 36:if("nianling"!=s){t.next=40;break}return this.ruleForm.nianling=u[s],this.ro.nianling=!0,t.abrupt("continue",18);case 40:if("zhuanye"!=s){t.next=44;break}return this.ruleForm.zhuanye=u[s],this.ro.zhuanye=!0,t.abrupt("continue",18);case 44:if("xueli"!=s){t.next=48;break}return this.ruleForm.xueli=u[s],this.ro.xueli=!0,t.abrupt("continue",18);case 48:if("lianxidianhua"!=s){t.next=52;break}return this.ruleForm.lianxidianhua=u[s],this.ro.lianxidianhua=!0,t.abrupt("continue",18);case 52:if("dianziyouxiang"!=s){t.next=56;break}return this.ruleForm.dianziyouxiang=u[s],this.ro.dianziyouxiang=!0,t.abrupt("continue",18);case 56:if("shenfenzheng"!=s){t.next=60;break}return this.ruleForm.shenfenzheng=u[s],this.ro.shenfenzheng=!0,t.abrupt("continue",18);case 60:if("touxiang"!=s){t.next=64;break}return this.ruleForm.touxiang=u[s].split(",")[0],this.ro.touxiang=!0,t.abrupt("continue",18);case 64:t.next=18;break;case 66:this.styleChange();case 67:case"end":return t.stop()}}),t,this)})));function i(e){return t.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(n.default.mark((function t(){var i,r,a,u,s,o,h,c,l,f;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.qiuzhizhezhanghao){t.next=3;break}return this.$utils.msg("求职者账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.qiuzhizhexingming){t.next=9;break}return this.$utils.msg("求职者姓名不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=12;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 12:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){t.next=15;break}return this.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 15:if(!this.ruleForm.dianziyouxiang||this.$validate.isEmail(this.ruleForm.dianziyouxiang)){t.next=18;break}return this.$utils.msg("电子邮箱应输入邮件格式"),t.abrupt("return");case 18:if(!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){t.next=21;break}return this.$utils.msg("身份证应输入身份证格式"),t.abrupt("return");case 21:if(!this.cross){t.next=37;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){t.next=37;break}if(i||(i=e.getStorageSync("crossObj")),s.startsWith("[")){t.next=33;break}for(h in i)h==s&&(i[h]=o);return c=e.getStorageSync("crossTable"),t.next=31,this.$api.update("".concat(c),i);case 31:t.next=37;break;case 33:r=Number(e.getStorageSync("userid")),a=i["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 37:if(!a||!r){t.next=59;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:r,crossrefid:a},t.next=43,this.$api.list("qiuzhizhe",l);case 43:if(f=t.sent,!(f.data.total>=u)){t.next=49;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 49:if(!this.ruleForm.id){t.next=54;break}return t.next=52,this.$api.update("qiuzhizhe",this.ruleForm);case 52:t.next=56;break;case 54:return t.next=56,this.$api.add("qiuzhizhe",this.ruleForm);case 56:this.$utils.msgBack("提交成功");case 57:t.next=67;break;case 59:if(!this.ruleForm.id){t.next=64;break}return t.next=62,this.$api.update("qiuzhizhe",this.ruleForm);case 62:t.next=66;break;case 64:return t.next=66,this.$api.add("qiuzhizhe",this.ruleForm);case 66:this.$utils.msgBack("提交成功");case 67:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(i,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=h}).call(this,i("543d")["default"])}},[["3e3c","common/runtime","common/vendor"]]]);
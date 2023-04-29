<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"padding":"30px","boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","borderRadius":"6px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="100px"
		>
			<template >
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'" label="招聘编号" prop="zhaopinbianhao">
					<el-input v-model="ruleForm.zhaopinbianhao" placeholder="招聘编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.zhaopinbianhao" label="招聘编号" prop="zhaopinbianhao">
					<el-input v-model="ruleForm.zhaopinbianhao" placeholder="招聘编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="企业名称" prop="qiyemingcheng">
					<el-input v-model="ruleForm.qiyemingcheng" placeholder="企业名称" clearable  :readonly="ro.qiyemingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="企业名称" prop="qiyemingcheng">
					<el-input v-model="ruleForm.qiyemingcheng" placeholder="企业名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" clearable  :readonly="ro.lianxifangshi"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="联系方式" prop="lianxifangshi">
					<el-input v-model="ruleForm.lianxifangshi" placeholder="联系方式" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="邮箱" prop="youxiang">
					<el-input v-model="ruleForm.youxiang" placeholder="邮箱" clearable  :readonly="ro.youxiang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="邮箱" prop="youxiang">
					<el-input v-model="ruleForm.youxiang" placeholder="邮箱" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="招聘地区" prop="zhaopindiqu">
					<el-input v-model="ruleForm.zhaopindiqu" placeholder="招聘地区" clearable  :readonly="ro.zhaopindiqu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="招聘地区" prop="zhaopindiqu">
					<el-input v-model="ruleForm.zhaopindiqu" placeholder="招聘地区" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="招聘专业" prop="zhaopinzhuanye">
					<el-input v-model="ruleForm.zhaopinzhuanye" placeholder="招聘专业" clearable  :readonly="ro.zhaopinzhuanye"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="招聘专业" prop="zhaopinzhuanye">
					<el-input v-model="ruleForm.zhaopinzhuanye" placeholder="招聘专业" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="upload" v-if="type!='info' && !ro.zhaopinfengmian" label="招聘封面" prop="zhaopinfengmian">
					<file-upload
						tip="点击上传招聘封面"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.zhaopinfengmian?ruleForm.zhaopinfengmian:''"
						@change="zhaopinfengmianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="upload" v-else-if="ruleForm.zhaopinfengmian" label="招聘封面" prop="zhaopinfengmian">
					<img v-if="ruleForm.zhaopinfengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.zhaopinfengmian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.zhaopinfengmian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="招聘职位" prop="zhaopinzhiwei">
					<el-input v-model="ruleForm.zhaopinzhiwei" placeholder="招聘职位" clearable  :readonly="ro.zhaopinzhiwei"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="招聘职位" prop="zhaopinzhiwei">
					<el-input v-model="ruleForm.zhaopinzhiwei" placeholder="招聘职位" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="招聘人数" prop="zhaopinrenshu">
					<el-input v-model="ruleForm.zhaopinrenshu" placeholder="招聘人数" clearable  :readonly="ro.zhaopinrenshu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else class="input" label="招聘人数" prop="zhaopinrenshu">
					<el-input v-model="ruleForm.zhaopinrenshu" placeholder="招聘人数" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="职位描述" prop="zhiweimiaoshu">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.zhiweimiaoshu" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.zhiweimiaoshu" label="职位描述" prop="zhiweimiaoshu">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.zhiweimiaoshu"></span>
                </el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="基本条件" prop="jibentiaojian">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.jibentiaojian" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.jibentiaojian" label="基本条件" prop="jibentiaojian">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.jibentiaojian"></span>
                </el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="工资待遇" prop="gongzidaiyu">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.gongzidaiyu" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.gongzidaiyu" label="工资待遇" prop="gongzidaiyu">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.gongzidaiyu"></span>
                </el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-if="type!='info'"  label="招聘流程" prop="zhaopinliucheng">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.zhaopinliucheng" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0"}' v-else-if="ruleForm.zhaopinliucheng" label="招聘流程" prop="zhaopinliucheng">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#000","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.zhaopinliucheng"></span>
                </el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"30px","background":"#93C7B3","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"30px","background":"#93C7B3","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"30px","background":"#93C7B3","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				zhaopinbianhao : false,
				qiyemingcheng : false,
				lianxifangshi : false,
				youxiang : false,
				zhaopindiqu : false,
				zhaopinzhuanye : false,
				zhaopinfengmian : false,
				zhaopinzhiwei : false,
				zhaopinrenshu : false,
				zhiweimiaoshu : false,
				jibentiaojian : false,
				gongzidaiyu : false,
				zhaopinliucheng : false,
			},
			
			
			ruleForm: {
				zhaopinbianhao: this.getUUID(),
				qiyemingcheng: '',
				lianxifangshi: '',
				youxiang: '',
				zhaopindiqu: '',
				zhaopinzhuanye: '',
				zhaopinfengmian: '',
				zhaopinzhiwei: '',
				zhaopinrenshu: '',
				zhiweimiaoshu: '',
				jibentiaojian: '',
				gongzidaiyu: '',
				zhaopinliucheng: '',
			},
		
			
			rules: {
				zhaopinbianhao: [
				],
				qiyemingcheng: [
				],
				lianxifangshi: [
				],
				youxiang: [
				],
				zhaopindiqu: [
				],
				zhaopinzhuanye: [
				],
				zhaopinfengmian: [
				],
				zhaopinzhiwei: [
				],
				zhaopinrenshu: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				zhiweimiaoshu: [
				],
				jibentiaojian: [
				],
				gongzidaiyu: [
				],
				zhaopinliucheng: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='zhaopinbianhao'){
							this.ruleForm.zhaopinbianhao = obj[o];
							this.ro.zhaopinbianhao = true;
							continue;
						}
						if(o=='qiyemingcheng'){
							this.ruleForm.qiyemingcheng = obj[o];
							this.ro.qiyemingcheng = true;
							continue;
						}
						if(o=='lianxifangshi'){
							this.ruleForm.lianxifangshi = obj[o];
							this.ro.lianxifangshi = true;
							continue;
						}
						if(o=='youxiang'){
							this.ruleForm.youxiang = obj[o];
							this.ro.youxiang = true;
							continue;
						}
						if(o=='zhaopindiqu'){
							this.ruleForm.zhaopindiqu = obj[o];
							this.ro.zhaopindiqu = true;
							continue;
						}
						if(o=='zhaopinzhuanye'){
							this.ruleForm.zhaopinzhuanye = obj[o];
							this.ro.zhaopinzhuanye = true;
							continue;
						}
						if(o=='zhaopinfengmian'){
							this.ruleForm.zhaopinfengmian = obj[o];
							this.ro.zhaopinfengmian = true;
							continue;
						}
						if(o=='zhaopinzhiwei'){
							this.ruleForm.zhaopinzhiwei = obj[o];
							this.ro.zhaopinzhiwei = true;
							continue;
						}
						if(o=='zhaopinrenshu'){
							this.ruleForm.zhaopinrenshu = obj[o];
							this.ro.zhaopinrenshu = true;
							continue;
						}
						if(o=='zhiweimiaoshu'){
							this.ruleForm.zhiweimiaoshu = obj[o];
							this.ro.zhiweimiaoshu = true;
							continue;
						}
						if(o=='jibentiaojian'){
							this.ruleForm.jibentiaojian = obj[o];
							this.ro.jibentiaojian = true;
							continue;
						}
						if(o=='gongzidaiyu'){
							this.ruleForm.gongzidaiyu = obj[o];
							this.ro.gongzidaiyu = true;
							continue;
						}
						if(o=='zhaopinliucheng'){
							this.ruleForm.zhaopinliucheng = obj[o];
							this.ro.zhaopinliucheng = true;
							continue;
						}
				}
				













			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.qiyemingcheng!=''&&json.qiyemingcheng) || json.qiyemingcheng==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.qiyemingcheng = json.qiyemingcheng
						this.ro.qiyemingcheng = true;
					}
					if(((json.lianxifangshi!=''&&json.lianxifangshi) || json.lianxifangshi==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.lianxifangshi = json.lianxifangshi
						this.ro.lianxifangshi = true;
					}
					if(((json.youxiang!=''&&json.youxiang) || json.youxiang==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.youxiang = json.youxiang
						this.ro.youxiang = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `zhaopinxinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.zhiweimiaoshu = this.ruleForm.zhiweimiaoshu.replace(reg,'../../../springbooti5oc6/upload');
        this.ruleForm.jibentiaojian = this.ruleForm.jibentiaojian.replace(reg,'../../../springbooti5oc6/upload');
        this.ruleForm.gongzidaiyu = this.ruleForm.gongzidaiyu.replace(reg,'../../../springbooti5oc6/upload');
        this.ruleForm.zhaopinliucheng = this.ruleForm.zhaopinliucheng.replace(reg,'../../../springbooti5oc6/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {














	if(this.ruleForm.zhaopinfengmian!=null) {
		this.ruleForm.zhaopinfengmian = this.ruleForm.zhaopinfengmian.replace(new RegExp(this.$base.url,"g"),"");
	}













var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "zhaopinxinxi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `zhaopinxinxi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.zhaopinxinxiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `zhaopinxinxi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.zhaopinxinxiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.zhaopinxinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    zhaopinfengmianUploadChange(fileUrls) {
	    this.ruleForm.zhaopinfengmian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #666;
	  	  font-weight: 500;
	  	  width: 100px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 100px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px dashed #797979;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #797979;
	  	  width: 90px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #797979;
	  	  border-radius: 0;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>

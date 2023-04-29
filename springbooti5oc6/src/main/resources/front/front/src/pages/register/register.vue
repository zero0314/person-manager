<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230109/cc084b475fe046298dc937f1cc43f1a3.jpg) no-repeat center top / 100% 100%","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"border":"1px solid #ccc","padding":"20px 2%","margin":"0","borderRadius":"10px","flexWrap":"wrap","background":"rgba(255,255,255,.9)","display":"flex","width":"750px","justifyContent":"center","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"width":"100%","margin":"0 auto 20px","lineHeight":"44px","fontSize":"20px","color":"#aa844c","textAlign":"center"}'>人事管理小程序注册</p></div>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="yuangonggonghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>员工工号：</div>
				<el-input v-model="registerForm.yuangonggonghao"  placeholder="请输入员工工号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="yuangongxingming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>员工姓名：</div>
				<el-input v-model="registerForm.yuangongxingming"  placeholder="请输入员工姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="xingbie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yuangongxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="bumen">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>部门：</div>
				<el-input v-model="registerForm.bumen" readonly placeholder="请输入部门" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="gangwei">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>岗位：</div>
				<el-input v-model="registerForm.gangwei" readonly placeholder="请输入岗位" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="biyeyuanxiao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>毕业院校：</div>
				<el-input v-model="registerForm.biyeyuanxiao"  placeholder="请输入毕业院校" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="youxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="shoujihao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>手机号：</div>
				<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="shenfenzheng">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>身份证：</div>
				<el-input v-model="registerForm.shenfenzheng"  placeholder="请输入身份证" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='yuangong'" prop="touxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yuangongtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="qiuzhizhezhanghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>求职者账号：</div>
				<el-input v-model="registerForm.qiuzhizhezhanghao"  placeholder="请输入求职者账号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="qiuzhizhexingming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>求职者姓名：</div>
				<el-input v-model="registerForm.qiuzhizhexingming"  placeholder="请输入求职者姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="xingbie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in qiuzhizhexingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="nianling">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>年龄：</div>
				<el-input v-model="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="zhuanye">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>专业：</div>
				<el-input v-model="registerForm.zhuanye"  placeholder="请输入专业" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="xueli">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>学历：</div>
				<el-input v-model="registerForm.xueli"  placeholder="请输入学历" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="lianxidianhua">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>联系电话：</div>
				<el-input v-model="registerForm.lianxidianhua"  placeholder="请输入联系电话" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="dianziyouxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>电子邮箱：</div>
				<el-input v-model="registerForm.dianziyouxiang"  placeholder="请输入电子邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="shenfenzheng">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>身份证：</div>
				<el-input v-model="registerForm.shenfenzheng"  placeholder="请输入身份证" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0 8%","margin":"0 auto 30px","height":"auto"}' v-if="tableName=='qiuzhizhe'" prop="touxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="qiuzhizhetouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px ","outline":"none","color":"#fff","borderRadius":"8px","background":"#cca162","display":"inline-block","width":"20%","fontSize":"16px","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px ","outline":"none","color":"#fff","borderRadius":"8px","background":"#999999","display":"inline-block","width":"20%","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","color":"rgba(159, 159, 159, 1)","textAlign":"right","display":"inline-block","width":"100%","lineHeight":"2","fontSize":"12px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {
                xingbie: '',
                xingbie: '',
            },
			rules: {},
            yuangongxingbieOptions: [],
            qiuzhizhexingbieOptions: [],
		}
    },
	mounted() {
	},
    created() {
      this.pageFlag = this.$route.query.pageFlag;
      this.tableName = this.$route.query.role;
      if ('yuangong' == this.tableName) {
        this.rules.yuangonggonghao = [{ required: true, message: '请输入员工工号', trigger: 'blur' }];
      }
      if ('yuangong' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('yuangong' == this.tableName) {
        this.rules.yuangongxingming = [{ required: true, message: '请输入员工姓名', trigger: 'blur' }];
      }
        this.yuangongxingbieOptions = "男,女".split(',');
      if ('yuangong' == this.tableName) {
        this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
      }
      if ('yuangong' == this.tableName) {
        this.rules.shoujihao = [{ required: true, validator: this.$validate.isMobileNotNull, trigger: 'blur' }];
      }
      if ('yuangong' == this.tableName) {
        this.rules.shenfenzheng = [{ required: true, validator: this.$validate.isIdCardNotNull, trigger: 'blur' }];
      }
      if ('qiuzhizhe' == this.tableName) {
        this.rules.qiuzhizhezhanghao = [{ required: true, message: '请输入求职者账号', trigger: 'blur' }];
      }
      if ('qiuzhizhe' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('qiuzhizhe' == this.tableName) {
        this.rules.qiuzhizhexingming = [{ required: true, message: '请输入求职者姓名', trigger: 'blur' }];
      }
        this.qiuzhizhexingbieOptions = "男,女".split(',');
      if ('qiuzhizhe' == this.tableName) {
        this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
      }
      if ('qiuzhizhe' == this.tableName) {
        this.rules.lianxidianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
      if ('qiuzhizhe' == this.tableName) {
        this.rules.dianziyouxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
      }
      if ('qiuzhizhe' == this.tableName) {
        this.rules.shenfenzheng = [{ required: true, validator: this.$validate.isIdCard, trigger: 'blur' }];
      }
    },
    //方法集合
    methods: {
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yuangongtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      qiuzhizhetouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
               if(`yuangong` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
               if(`qiuzhizhe` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20230109/cc084b475fe046298dc937f1cc43f1a3.jpg) no-repeat center top / 100% 100%;

		.el-date-editor.el-input {
			width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 2px solid #eee;
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #333;
						width: 100%;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 2px solid #eee;
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #333;
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 2px solid #eee;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #333;
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 2px solid #eee;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #333;
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 2px solid #eee;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #333;
		  		  width: 80px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 2px solid #eee;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #333;
		  		  width: 80px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 2px solid #eee;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #333;
		  		  width: 80px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>

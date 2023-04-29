<template>
<div :style='{"width":"1200px","padding":"120px 7% 100px","margin":"0px auto","position":"relative","background":"url(http://codegen.caihongy.cn/20230109/138a4d606eae4a168810cef229969885.png) no-repeat center top,url(http://codegen.caihongy.cn/20230109/b95aeae1c1294f398aefb7c6cd5b16de.png) no-repeat center top,url(http://codegen.caihongy.cn/20230109/5ffc803e6682418eb7f0b09a98e35527.png) no-repeat center bottom,#faf0e6"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="110px"
    >
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="求职者账号" prop="qiuzhizhezhanghao">
            <el-input v-model="ruleForm.qiuzhizhezhanghao" 
                placeholder="求职者账号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="求职者姓名" prop="qiuzhizhexingming">
            <el-input v-model="ruleForm.qiuzhizhexingming" 
                placeholder="求职者姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="性别" prop="xingbie">
            <el-input v-model="ruleForm.xingbie" 
                placeholder="性别" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="年龄" prop="nianling">
            <el-input v-model="ruleForm.nianling" 
                placeholder="年龄" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="专业" prop="zhuanye">
            <el-input v-model="ruleForm.zhuanye" 
                placeholder="专业" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="学历" prop="xueli">
            <el-input v-model="ruleForm.xueli" 
                placeholder="学历" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="联系电话" prop="lianxidianhua">
            <el-input v-model="ruleForm.lianxidianhua" 
                placeholder="联系电话" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="头像" v-if="type!='cross' || (type=='cross' && !ro.touxiang)" prop="touxiang">
            <file-upload
            tip="点击上传头像"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
            @change="touxiangUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' class="upload" v-else label="头像" prop="touxiang">
                <img v-if="ruleForm.touxiang.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.touxiang.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.touxiang.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="求职日期" prop="qiuzhiriqi" >
              <el-date-picker
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.qiuzhiriqi" 
                  type="date"
                  placeholder="求职日期">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="求职岗位" prop="qiuzhigangwei">
            <el-input v-model="ruleForm.qiuzhigangwei" 
                placeholder="求职岗位" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="期望薪资" prop="qiwangxinzi">
            <el-input v-model="ruleForm.qiwangxinzi" 
                placeholder="期望薪资" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="获奖证书" prop="huojiangzhengshu">
            <editor 
                :style='{"border":"1px solid #e5d9c6","minHeight":"300px","padding":"0","margin":"0","backgroundColor":"#fff","borderRadius":"0","width":"100%","height":"auto"}'
                v-model="ruleForm.huojiangzhengshu" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","boxShadow":"0 2px 0 #efe4d4","margin":"0 0 10px"}' label="教育背景" prop="jiaoyubeijing">
            <editor 
                :style='{"border":"1px solid #e5d9c6","minHeight":"300px","padding":"0","margin":"0","backgroundColor":"#fff","borderRadius":"0","width":"100%","height":"auto"}'
                v-model="ruleForm.jiaoyubeijing" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","textAlign":"center","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#cca162","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#009688","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            qiuzhizhezhanghao : false,
            qiuzhizhexingming : false,
            xingbie : false,
            nianling : false,
            zhuanye : false,
            xueli : false,
            lianxidianhua : false,
            touxiang : false,
            qiuzhiriqi : false,
            qiuzhigangwei : false,
            qiwangxinzi : false,
            huojiangzhengshu : false,
            jiaoyubeijing : false,
            sfsh : false,
            shhf : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          qiuzhizhezhanghao: '',
          qiuzhizhexingming: '',
          xingbie: '',
          nianling: '',
          zhuanye: '',
          xueli: '',
          lianxidianhua: '',
          touxiang: '',
          qiuzhiriqi: '',
          qiuzhigangwei: '',
          qiwangxinzi: '',
          huojiangzhengshu: '',
          jiaoyubeijing: '',
        },
        rules: {
          qiuzhizhezhanghao: [
          ],
          qiuzhizhexingming: [
          ],
          xingbie: [
          ],
          nianling: [
          ],
          zhuanye: [
          ],
          xueli: [
          ],
          lianxidianhua: [
          ],
          touxiang: [
          ],
          qiuzhiriqi: [
          ],
          qiuzhigangwei: [
          ],
          qiwangxinzi: [
          ],
          huojiangzhengshu: [
          ],
          jiaoyubeijing: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.qiuzhiriqi = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='qiuzhizhezhanghao'){
              this.ruleForm.qiuzhizhezhanghao = obj[o];
              this.ro.qiuzhizhezhanghao = true;
              continue;
            }
            if(o=='qiuzhizhexingming'){
              this.ruleForm.qiuzhizhexingming = obj[o];
              this.ro.qiuzhizhexingming = true;
              continue;
            }
            if(o=='xingbie'){
              this.ruleForm.xingbie = obj[o];
              this.ro.xingbie = true;
              continue;
            }
            if(o=='nianling'){
              this.ruleForm.nianling = obj[o];
              this.ro.nianling = true;
              continue;
            }
            if(o=='zhuanye'){
              this.ruleForm.zhuanye = obj[o];
              this.ro.zhuanye = true;
              continue;
            }
            if(o=='xueli'){
              this.ruleForm.xueli = obj[o];
              this.ro.xueli = true;
              continue;
            }
            if(o=='lianxidianhua'){
              this.ruleForm.lianxidianhua = obj[o];
              this.ro.lianxidianhua = true;
              continue;
            }
            if(o=='touxiang'){
              this.ruleForm.touxiang = obj[o].split(",")[0];
              this.ro.touxiang = true;
              continue;
            }
            if(o=='qiuzhiriqi'){
              this.ruleForm.qiuzhiriqi = obj[o];
              this.ro.qiuzhiriqi = true;
              continue;
            }
            if(o=='qiuzhigangwei'){
              this.ruleForm.qiuzhigangwei = obj[o];
              this.ro.qiuzhigangwei = true;
              continue;
            }
            if(o=='qiwangxinzi'){
              this.ruleForm.qiwangxinzi = obj[o];
              this.ro.qiwangxinzi = true;
              continue;
            }
            if(o=='huojiangzhengshu'){
              this.ruleForm.huojiangzhengshu = obj[o];
              this.ro.huojiangzhengshu = true;
              continue;
            }
            if(o=='jiaoyubeijing'){
              this.ruleForm.jiaoyubeijing = obj[o];
              this.ro.jiaoyubeijing = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.qiuzhizhezhanghao!=''&&json.qiuzhizhezhanghao) || json.qiuzhizhezhanghao==0){
                this.ruleForm.qiuzhizhezhanghao = json.qiuzhizhezhanghao
            }
            if((json.qiuzhizhexingming!=''&&json.qiuzhizhexingming) || json.qiuzhizhexingming==0){
                this.ruleForm.qiuzhizhexingming = json.qiuzhizhexingming
            }
            if((json.xingbie!=''&&json.xingbie) || json.xingbie==0){
                this.ruleForm.xingbie = json.xingbie
            }
            if((json.nianling!=''&&json.nianling) || json.nianling==0){
                this.ruleForm.nianling = json.nianling
            }
            if((json.zhuanye!=''&&json.zhuanye) || json.zhuanye==0){
                this.ruleForm.zhuanye = json.zhuanye
            }
            if((json.xueli!=''&&json.xueli) || json.xueli==0){
                this.ruleForm.xueli = json.xueli
            }
            if((json.lianxidianhua!=''&&json.lianxidianhua) || json.lianxidianhua==0){
                this.ruleForm.lianxidianhua = json.lianxidianhua
            }
            if((json.touxiang!=''&&json.touxiang) || json.touxiang==0){
                this.ruleForm.touxiang = json.touxiang
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('qiuzhijianli/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('qiuzhijianli/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('qiuzhijianli/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('qiuzhijianli/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
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
        this.$router.go(-1);
      },
      touxiangUploadChange(fileUrls) {
          this.ruleForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 110px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 110px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #e5d9c6;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #e5d9c6;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #333;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #e5d9c6;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #333;
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
	  border: 1px solid #e5d9c6;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #e5d9c6;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #e5d9c6;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #333;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #e5d9c6;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #333;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>

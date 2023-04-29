<template>
  <div class="addEdit-block" style="width: 100%">
    <el-form
      :style="{
        padding: '30px',
        boxShadow: '0 0px 0px rgba(64, 158, 255, .3)',
        borderRadius: '6px',
        flexWrap: 'wrap',
        background: '#fff',
        display: 'flex',
        width: '100%',
      }"
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
    >
      <template>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="select"
          v-if="type != 'info'"
          label="月份"
          prop="yuefen"
        >
          <el-select
            :disabled="ro.yuefen"
            v-model="ruleForm.yuefen"
            placeholder="请选择月份"
          >
            <el-option
              v-for="(item, index) in yuefenOptions"
              v-bind:key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="月份"
          prop="yuefen"
        >
          <el-input
            v-model="ruleForm.yuefen"
            placeholder="月份"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="select"
          v-if="type != 'info'"
          label="员工工号"
          prop="yuangonggonghao"
        >
          <el-select
            :disabled="ro.yuangonggonghao"
            @change="yuangonggonghaoChange"
            v-model="ruleForm.yuangonggonghao"
            placeholder="请选择员工工号"
          >
            <el-option
              v-for="(item, index) in yuangonggonghaoOptions"
              v-bind:key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-else-if="ruleForm.yuangonggonghao"
          label="员工工号"
          prop="yuangonggonghao"
        >
          <el-input
            v-model="ruleForm.yuangonggonghao"
            placeholder="员工工号"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-if="type != 'info'"
          label="员工姓名"
          prop="yuangongxingming"
        >
          <el-input
            v-model="ruleForm.yuangongxingming"
            placeholder="员工姓名"
            clearable
            :readonly="ro.yuangongxingming"
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="员工姓名"
          prop="yuangongxingming"
        >
          <el-input
            v-model="ruleForm.yuangongxingming"
            placeholder="员工姓名"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="upload"
          v-if="type != 'info' && !ro.tupian"
          label="图片"
          prop="tupian"
        >
          <file-upload
            tip="点击上传图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.tupian ? ruleForm.tupian : ''"
            @change="tupianUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="upload"
          v-else-if="ruleForm.tupian"
          label="图片"
          prop="tupian"
        >
          <img
            v-if="ruleForm.tupian.substring(0, 4) == 'http'"
            class="upload-img"
            style="margin-right: 20px"
            v-bind:key="index"
            :src="ruleForm.tupian.split(',')[0]"
            width="100"
            height="100"
          />
          <img
            v-else
            class="upload-img"
            style="margin-right: 20px"
            v-bind:key="index"
            v-for="(item, index) in ruleForm.tupian.split(',')"
            :src="$base.url + item"
            width="100"
            height="100"
          />
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-if="type != 'info'"
          label="部门"
          prop="bumen"
        >
          <el-select
            :disabled="ro.yuangonggonghao"
            @change="orgNmaechange"
            v-model="ruleForm.bumen"
            placeholder="请选择部门"
          >
            <el-option
              v-for="(item, index) in parent.OrgList"
              v-bind:key="index"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="部门"
          prop="bumen"
        >
          <el-input
            v-model="ruleForm.bumen"
            placeholder="部门"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-if="type != 'info'"
          label="手机号"
          prop="shoujihao"
        >
          <el-input
            v-model="ruleForm.shoujihao"
            placeholder="手机号"
            clearable
            :readonly="ro.shoujihao"
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="手机号"
          prop="shoujihao"
        >
          <el-input
            v-model="ruleForm.shoujihao"
            placeholder="手机号"
            readonly
          ></el-input>
        </el-form-item>
   
          <el-form-item
            :style="{ width: '50%', margin: '0 0 20px 0' }"
            class="input"
            v-if="type != 'info'"
            label="岗位"
            prop="bumen"
          >
            <el-select
              :disabled="ro.yuangonggonghao"
              @change="jobchange"
              v-model="ruleForm.gangwei"
              placeholder="请选择岗位"
            >
              <el-option
                v-for="(item, index) in jobList"
                v-bind:key="index"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="岗位"
          prop="gangwei"
        >
          <el-input
            v-model="ruleForm.gangwei"
            placeholder="岗位"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-if="type != 'info'"
          label="基本工资"
          prop="jibengongzi"
        >
          <el-input
            v-model="ruleForm.jibengongzi"
            placeholder="基本工资"
            clearable
            :readonly="ro.jibengongzi"
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="基本工资"
          prop="jibengongzi"
        >
          <el-input
            v-model="ruleForm.jibengongzi"
            placeholder="基本工资"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-if="type != 'info'"
          label="全勤奖励"
          prop="quanqinjiangli"
        >
          <el-input
            v-model="ruleForm.quanqinjiangli"
            placeholder="全勤奖励"
            clearable
            :readonly="ro.quanqinjiangli"
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="全勤奖励"
          prop="quanqinjiangli"
        >
          <el-input
            v-model="ruleForm.quanqinjiangli"
            placeholder="全勤奖励"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-if="type != 'info'"
          label="其他补助"
          prop="qitabuzhu"
        >
          <el-input
            v-model="ruleForm.qitabuzhu"
            placeholder="其他补助"
            clearable
            :readonly="ro.qitabuzhu"
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="其他补助"
          prop="qitabuzhu"
        >
          <el-input
            v-model="ruleForm.qitabuzhu"
            placeholder="其他补助"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-if="type != 'info'"
          label="扣款事项"
          prop="koukuanshixiang"
        >
          <el-input
            v-model="ruleForm.koukuanshixiang"
            placeholder="扣款事项"
            clearable
            :readonly="ro.koukuanshixiang"
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="扣款事项"
          prop="koukuanshixiang"
        >
          <el-input
            v-model="ruleForm.koukuanshixiang"
            placeholder="扣款事项"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-if="type != 'info'"
          label="扣款金额"
          prop="koukuanjine"
        >
          <el-input
            v-model="ruleForm.koukuanjine"
            placeholder="扣款金额"
            clearable
            :readonly="ro.koukuanjine"
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          v-else
          class="input"
          label="扣款金额"
          prop="koukuanjine"
        >
          <el-input
            v-model="ruleForm.koukuanjine"
            placeholder="扣款金额"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-if="type != 'info'"
          label="实发工资"
          prop="shifagongzi"
        >
          <el-input
            v-model="shifagongzi"
            placeholder="实发工资"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-else-if="ruleForm.shifagongzi"
          label="实发工资"
          prop="shifagongzi"
        >
          <el-input
            v-model="ruleForm.shifagongzi"
            placeholder="实发工资"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="date"
          v-if="type != 'info'"
          label="登记时间"
          prop="dengjishijian"
        >
          <el-date-picker
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            v-model="ruleForm.dengjishijian"
            type="date"
            :readonly="ro.dengjishijian"
            placeholder="登记时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item
          :style="{ width: '50%', margin: '0 0 20px 0' }"
          class="input"
          v-else-if="ruleForm.dengjishijian"
          label="登记时间"
          prop="dengjishijian"
        >
          <el-input
            v-model="ruleForm.dengjishijian"
            placeholder="登记时间"
            readonly
          ></el-input>
        </el-form-item>
      </template>
      <el-form-item
        :style="{ width: '100%', padding: '0', margin: '0' }"
        class="btn"
      >
        <el-button
          :style="{
            border: '0',
            cursor: 'pointer',
            padding: '0',
            margin: '0 20px 0 0',
            outline: 'none',
            color: 'rgba(255, 255, 255, 1)',
            borderRadius: '30px',
            background: '#93C7B3',
            width: '128px',
            lineHeight: '40px',
            fontSize: '14px',
            height: '40px',
          }"
          v-if="type != 'info'"
          type="primary"
          class="btn-success"
          @click="onSubmit"
          >提交</el-button
        >
        <el-button
          :style="{
            border: '0px solid rgba(64, 158, 255, 1)',
            cursor: 'pointer',
            padding: '0',
            margin: '0',
            outline: 'none',
            color: '#fff',
            borderRadius: '30px',
            background: '#93C7B3',
            width: '128px',
            lineHeight: '40px',
            fontSize: '14px',
            height: '40px',
          }"
          v-if="type != 'info'"
          class="btn-close"
          @click="back()"
          >取消</el-button
        >
        <el-button
          :style="{
            border: '0px solid rgba(64, 158, 255, 1)',
            cursor: 'pointer',
            padding: '0',
            margin: '0',
            outline: 'none',
            color: '#fff',
            borderRadius: '30px',
            background: '#93C7B3',
            width: '128px',
            lineHeight: '40px',
            fontSize: '14px',
            height: '40px',
          }"
          v-if="type == 'info'"
          class="btn-close"
          @click="back()"
          >返回</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import {
  isNumber,
  isIntNumer,
  isEmail,
  isPhone,
  isMobile,
  isURL,
  checkIdCard,
} from "@/utils/validate";
export default {
  data() {
    let self = this;
    var validateIdCard = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if (!value) {
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
      id: "",
      type: "",
      ro: {
        yuefen: false,
        yuangonggonghao: false,
        yuangongxingming: false,
        tupian: false,
        bumen: false,
        shoujihao: false,
        gangwei: false,
        jibengongzi: false,
        quanqinjiangli: false,
        qitabuzhu: false,
        koukuanshixiang: false,
        koukuanjine: false,
        shifagongzi: false,
        dengjishijian: false,
      },

      ruleForm: {
        yuefen: "",
        yuangonggonghao: "",
        yuangongxingming: "",
        tupian: "",
        bumen: "",
        shoujihao: "",
        gangwei: "",
        jibengongzi: "",
        quanqinjiangli: "",
        qitabuzhu: "",
        koukuanshixiang: "",
        koukuanjine: "",
        shifagongzi: "",
        dengjishijian: "",
      },

      yuefenOptions: [],
      yuangonggonghaoOptions: [],
      jobList: [],
      rules: {
        yuefen: [],
        yuangonggonghao: [],
        yuangongxingming: [],
        tupian: [],
        bumen: [],
        shoujihao: [],
        gangwei: [],
        jibengongzi: [{ validator: validateIntNumber, trigger: "blur" }],
        quanqinjiangli: [{ validator: validateIntNumber, trigger: "blur" }],
        qitabuzhu: [{ validator: validateIntNumber, trigger: "blur" }],
        koukuanshixiang: [],
        koukuanjine: [{ validator: validateIntNumber, trigger: "blur" }],
        shifagongzi: [],
        dengjishijian: [],
      },
    };
  },
  props: ["parent"],
  computed: {
    shifagongzi: {
      get: function () {
        return (
          0 +
            parseFloat(
              this.ruleForm.jibengongzi == "" ? 0 : this.ruleForm.jibengongzi
            ) +
            parseFloat(
              this.ruleForm.quanqinjiangli == ""
                ? 0
                : this.ruleForm.quanqinjiangli
            ) +
            parseFloat(
              this.ruleForm.qitabuzhu == "" ? 0 : this.ruleForm.qitabuzhu
            ) -
            parseFloat(
              this.ruleForm.koukuanjine == "" ? 0 : this.ruleForm.koukuanjine
            ) || 0
        );
      },
    },
  },
  created() {},
  methods: {
    // 下载
    download(file) {
      window.open(`${file}`);
    },
    // 初始化
    init(id, type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if (this.type == "info" || this.type == "else") {
        this.info(id);
      } else if (this.type == "logistics") {
        this.logistics = false;
        this.info(id);
      } else if (this.type == "cross") {
        var obj = this.$storage.getObj("crossObj");
        for (var o in obj) {
          if (o == "yuefen") {
            this.ruleForm.yuefen = obj[o];
            this.ro.yuefen = true;
            continue;
          }
          if (o == "yuangonggonghao") {
            this.ruleForm.yuangonggonghao = obj[o];
            this.ro.yuangonggonghao = true;
            continue;
          }
          if (o == "yuangongxingming") {
            this.ruleForm.yuangongxingming = obj[o];
            this.ro.yuangongxingming = true;
            continue;
          }
          if (o == "tupian") {
            this.ruleForm.tupian = obj[o];
            this.ro.tupian = true;
            continue;
          }
          if (o == "bumen") {
            this.ruleForm.bumen = obj[o];
            this.ro.bumen = true;
            continue;
          }
          if (o == "shoujihao") {
            this.ruleForm.shoujihao = obj[o];
            this.ro.shoujihao = true;
            continue;
          }
          if (o == "gangwei") {
            this.ruleForm.gangwei = obj[o];
            this.ro.gangwei = true;
            continue;
          }
          if (o == "jibengongzi") {
            this.ruleForm.jibengongzi = obj[o];
            this.ro.jibengongzi = true;
            continue;
          }
          if (o == "quanqinjiangli") {
            this.ruleForm.quanqinjiangli = obj[o];
            this.ro.quanqinjiangli = true;
            continue;
          }
          if (o == "qitabuzhu") {
            this.ruleForm.qitabuzhu = obj[o];
            this.ro.qitabuzhu = true;
            continue;
          }
          if (o == "koukuanshixiang") {
            this.ruleForm.koukuanshixiang = obj[o];
            this.ro.koukuanshixiang = true;
            continue;
          }
          if (o == "koukuanjine") {
            this.ruleForm.koukuanjine = obj[o];
            this.ro.koukuanjine = true;
            continue;
          }
          if (o == "shifagongzi") {
            this.ruleForm.shifagongzi = obj[o];
            this.ro.shifagongzi = true;
            continue;
          }
          if (o == "dengjishijian") {
            this.ruleForm.dengjishijian = obj[o];
            this.ro.dengjishijian = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get("sessionTable")}/session`,
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });

      this.yuefenOptions =
        "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(
          ","
        );
      this.$http({
        url: `option/yuangong/yuangonggonghao`,
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.yuangonggonghaoOptions = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
	jobchange(){
		console.log(123)
	},
    orgNmaechange() {
      let id = this.parent.OrgList.find(
        (item) => item.name == this.ruleForm.bumen
      ).id;
      let params = {
        page: 1,
        size: 999,
        position: {
          departmentid:id,
        },
      };
      this.$http({
        url: "position/queryPage",
        method: "post",
        data: params,
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.jobList = data.data.list;
        } else {
          this.dataList = [];
        }
      });
    },
    // 下二随
    yuangonggonghaoChange() {
      this.$http({
        url:
          `follow/yuangong/yuangonggonghao?columnValue=` +
          this.ruleForm.yuangonggonghao,
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 0) {
          if (data.data.yuangongxingming) {
            this.ruleForm.yuangongxingming = data.data.yuangongxingming;
          }
          if (data.data.bumen) {
            this.ruleForm.bumen = data.data.bumen;
          }
          if (data.data.shoujihao) {
            this.ruleForm.shoujihao = data.data.shoujihao;
          }
          if (data.data.gangwei) {
            this.ruleForm.gangwei = data.data.gangwei;
          }
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 多级联动参数

    info(id) {
      this.$http({
        url: `xinchoujilu/info/${id}`,
        method: "get",
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.ruleForm = data.data;
          //解决前台上传图片后台不显示的问题
          let reg = new RegExp("../../../upload", "g"); //g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },

    // 提交
    onSubmit() {
      this.ruleForm.shifagongzi = this.shifagongzi;

      if (this.ruleForm.tupian != null) {
        this.ruleForm.tupian = this.ruleForm.tupian.replace(
          new RegExp(this.$base.url, "g"),
          ""
        );
      }

      var objcross = this.$storage.getObj("crossObj");

      //更新跨表属性
      var crossuserid;
      var crossrefid;
      var crossoptnum;
      if (this.type == "cross") {
        var statusColumnName = this.$storage.get("statusColumnName");
        var statusColumnValue = this.$storage.get("statusColumnValue");
        if (statusColumnName != "") {
          var obj = this.$storage.getObj("crossObj");
          if (statusColumnName && !statusColumnName.startsWith("[")) {
            for (var o in obj) {
              if (o == statusColumnName) {
                obj[o] = statusColumnValue;
              }
            }
            var table = this.$storage.get("crossTable");
            this.$http({
              url: `${table}/update`,
              method: "post",
              data: obj,
            }).then(({ data }) => {});
          } else {
            crossuserid = this.$storage.get("userid");
            crossrefid = obj["id"];
            crossoptnum = this.$storage.get("statusColumnName");
            crossoptnum = crossoptnum.replace(/\[/, "").replace(/\]/, "");
          }
        }
      }
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          if (crossrefid && crossuserid) {
            this.ruleForm.crossuserid = crossuserid;
            this.ruleForm.crossrefid = crossrefid;
            let params = {
              page: 1,
              limit: 10,
              crossuserid: this.ruleForm.crossuserid,
              crossrefid: this.ruleForm.crossrefid,
            };
            this.$http({
              url: "xinchoujilu/page",
              method: "get",
              params: params,
            }).then(({ data }) => {
              if (data && data.code === 0) {
                if (data.data.total >= crossoptnum) {
                  this.$message.error(this.$storage.get("tips"));
                  return false;
                } else {
                  this.$http({
                    url: `xinchoujilu/${!this.ruleForm.id ? "save" : "update"}`,
                    method: "post",
                    data: this.ruleForm,
                  }).then(({ data }) => {
                    if (data && data.code === 0) {
                      this.$message({
                        message: "操作成功",
                        type: "success",
                        duration: 1500,
                        onClose: () => {
                          this.parent.showFlag = true;
                          this.parent.addOrUpdateFlag = false;
                          this.parent.xinchoujiluCrossAddOrUpdateFlag = false;
                          this.parent.search();
                          this.parent.contentStyleChange();
                        },
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
              url: `xinchoujilu/${!this.ruleForm.id ? "save" : "update"}`,
              method: "post",
              data: this.ruleForm,
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.$message({
                  message: "操作成功",
                  type: "success",
                  duration: 1500,
                  onClose: () => {
                    this.parent.showFlag = true;
                    this.parent.addOrUpdateFlag = false;
                    this.parent.xinchoujiluCrossAddOrUpdateFlag = false;
                    this.parent.search();
                    this.parent.contentStyleChange();
                  },
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
    getUUID() {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.xinchoujiluCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    tupianUploadChange(fileUrls) {
      this.ruleForm.tupian = fileUrls;
    },
  },
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
  box-shadow: 0 0 0px rgba(64, 158, 255, 0.5);
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
  box-shadow: 0 0 0px rgba(64, 158, 255, 0.5);
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
  box-shadow: 0 0 0px rgba(64, 158, 255, 0.5);
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
  box-shadow: 0 0 0px rgba(64, 158, 255, 0.5);
  outline: none;
  color: #000;
  width: 400px;
  font-size: 14px;
  height: 120px;
}
</style>

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/register/register"], {
    "0453": function (e, i, t) {
      "use strict";
      (function (e) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var n = a(t("a34a"));

        function a(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function r(e, i, t, n, a, r, u) {
          try {
            var s = e[r](u),
              h = s.value
          } catch (o) {
            return void t(o)
          }
          s.done ? i(h) : Promise.resolve(h).then(n, a)
        }

        function u(e) {
          return function () {
            var i = this,
              t = arguments;
            return new Promise((function (n, a) {
              var u = e.apply(i, t);

              function s(e) {
                r(u, n, a, s, h, "next", e)
              }

              function h(e) {
                r(u, n, a, s, h, "throw", e)
              }
              s(void 0)
            }))
          }
        }

        function s(e, i, t) {
          return i in e ? Object.defineProperty(e, i, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[i] = t, e
        }
        var h = function () {
            return t.e("components/momo-multipleSelect/momo-multipleSelect").then(t.bind(null, "bd56"))
          },
          o = {
            data: function () {
              var e;
              return {
                yuangongxingbieOptions: [],
                yuangongxingbieIndex: 0,
                qiuzhizhexingbieOptions: [],
                qiuzhizhexingbieIndex: 0,
                ruleForm: (e = {
                  yuangonggonghao: "",
                  mima: "",
                  yuangongxingming: "",
                  xingbie: "",
                  bumen: "",
                  gangwei: "",
                  biyeyuanxiao: "",
                  youxiang: "",
                  shoujihao: "",
                  shenfenzheng: "",
                  touxiang: "",
                  qiuzhizhezhanghao: ""
                }, s(e, "mima", ""), s(e, "qiuzhizhexingming", ""), s(e, "xingbie", ""), s(e, "nianling", ""), s(e, "zhuanye", ""), s(e, "xueli", ""), s(e, "lianxidianhua", ""), s(e, "dianziyouxiang", ""), s(e, "shenfenzheng", ""), s(e, "touxiang", ""), e),
                tableName: ""
              }
            },
            components: {
              multipleSelect: h
            },
            computed: {
              baseUrl: function () {
                return this.$base.url
              }
            },
            onLoad: function () {
              var i = u(n.default.mark((function i() {
                var t;
                return n.default.wrap((function (i) {
                  while (1) switch (i.prev = i.next) {
                    case 0:
                      [], t = e.getStorageSync("loginTable"), this.tableName = t, "yuangong" == this.tableName && (this.yuangongxingbieOptions = "男,女".split(","), this.ruleForm.xingbie = this.yuangongxingbieOptions[0]), "qiuzhizhe" == this.tableName && (this.qiuzhizhexingbieOptions = "男,女".split(","), this.ruleForm.xingbie = this.qiuzhizhexingbieOptions[0]), this.styleChange();
                    case 6:
                    case "end":
                      return i.stop()
                  }
                }), i, this)
              })));

              function t() {
                return i.apply(this, arguments)
              }
              return t
            }(),
            methods: {
              yuangongxingbieChange: function (e) {
                this.yuangongxingbieIndex = e.target.value, this.ruleForm.xingbie = this.yuangongxingbieOptions[this.yuangongxingbieIndex]
              },
              yuangongtouxiangTap: function () {
                var e = this;
                this.$api.upload((function (i) {
                  e.ruleForm.touxiang = "upload/" + i.file, e.$forceUpdate()
                }))
              },
              qiuzhizhexingbieChange: function (e) {
                this.qiuzhizhexingbieIndex = e.target.value, this.ruleForm.xingbie = this.qiuzhizhexingbieOptions[this.qiuzhizhexingbieIndex]
              },
              qiuzhizhetouxiangTap: function () {
                var e = this;
                this.$api.upload((function (i) {
                  e.ruleForm.touxiang = "upload/" + i.file, e.$forceUpdate()
                }))
              },
              toggleTab: function (e) {
                this.$refs[e].show()
              },
              styleChange: function () {
                this.$nextTick((function () {}))
              },
              getUUID: function () {
                return (new Date).getTime()
              },
              register: function () {
                var e = u(n.default.mark((function e() {
                  return n.default.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                     /**
                      case 0:
                        if (this.ruleForm.yuangonggonghao || "yuangong" != this.tableName) {
                          e.next = 3;
                          break
                        }
                        return this.$utils.msg("员工工号不能为空"), e.abrupt("return");
                      case 3:
                        if (this.ruleForm.mima || "yuangong" != this.tableName) {
                          e.next = 6;
                          break
                        }
                        return this.$utils.msg("密码不能为空"), e.abrupt("return");
                      case 6:
                        if ("yuangong" != this.tableName || this.ruleForm.mima == this.ruleForm.mima2) {
                          e.next = 9;
                          break
                        }
                        return this.$utils.msg("两次密码输入不一致"), e.abrupt("return");
                      case 9:
                        if (this.ruleForm.yuangongxingming || "yuangong" != this.tableName) {
                          e.next = 12;
                          break
                        }
                        return this.$utils.msg("员工姓名不能为空"), e.abrupt("return");
                      case 12:
                        if ("yuangong" != this.tableName || !this.ruleForm.youxiang || this.$validate.isEmail(this.ruleForm.youxiang)) {
                          e.next = 15;
                          break
                        }
                        return this.$utils.msg("邮箱应输入邮件格式"), e.abrupt("return");
                      case 15:
                        if (this.ruleForm.shoujihao || "yuangong" != this.tableName) {
                          e.next = 18;
                          break
                        }
                        return this.$utils.msg("手机号不能为空"), e.abrupt("return");
                      case 18:
                        if ("yuangong" != this.tableName || !this.ruleForm.shoujihao || this.$validate.isMobile(this.ruleForm.shoujihao)) {
                          e.next = 21;
                          break
                        }
                        return this.$utils.msg("手机号应输入手机格式"), e.abrupt("return");
                      case 21:
                        if (this.ruleForm.shenfenzheng || "yuangong" != this.tableName) {
                          e.next = 24;
                          break
                        }
                        return this.$utils.msg("身份证不能为空"), e.abrupt("return");
                      case 24:
                        if ("yuangong" != this.tableName || !this.ruleForm.shenfenzheng || this.$validate.checkIdCard(this.ruleForm.shenfenzheng)) {
                          e.next = 27;
                          break
                        }
                        return this.$utils.msg("身份证应输入身份证格式"), e.abrupt("return");
                        */
                      case 27:
                        if (this.ruleForm.qiuzhizhezhanghao || "qiuzhizhe" != this.tableName) {
                          e.next = 30;
                          break
                        }
                        return this.$utils.msg("求职者账号不能为空"), e.abrupt("return");
                      case 30:
                        if (this.ruleForm.mima || "qiuzhizhe" != this.tableName) {
                          e.next = 33;
                          break
                        }
                        return this.$utils.msg("密码不能为空"), e.abrupt("return");
                      case 33:
                        if ("qiuzhizhe" != this.tableName || this.ruleForm.mima == this.ruleForm.mima2) {
                          e.next = 36;
                          break
                        }
                        return this.$utils.msg("两次密码输入不一致"), e.abrupt("return");
                      case 36:
                        if (this.ruleForm.qiuzhizhexingming || "qiuzhizhe" != this.tableName) {
                          e.next = 39;
                          break
                        }
                        return this.$utils.msg("求职者姓名不能为空"), e.abrupt("return");
                      case 39:
                        if ("qiuzhizhe" != this.tableName || !this.ruleForm.nianling || this.$validate.isIntNumer(this.ruleForm.nianling)) {
                          e.next = 42;
                          break
                        }
                        return this.$utils.msg("年龄应输入整数"), e.abrupt("return");
                      case 42:
                        if ("qiuzhizhe" != this.tableName || !this.ruleForm.lianxidianhua || this.$validate.isMobile(this.ruleForm.lianxidianhua)) {
                          e.next = 45;
                          break
                        }
                        return this.$utils.msg("联系电话应输入手机格式"), e.abrupt("return");
                      case 45:
                        if ("qiuzhizhe" != this.tableName || !this.ruleForm.dianziyouxiang || this.$validate.isEmail(this.ruleForm.dianziyouxiang)) {
                          e.next = 48;
                          break
                        }
                        return this.$utils.msg("电子邮箱应输入邮件格式"), e.abrupt("return");
                      case 48:
                        if ("qiuzhizhe" != this.tableName || !this.ruleForm.shenfenzheng || this.$validate.checkIdCard(this.ruleForm.shenfenzheng)) {
                          e.next = 51;
                          break
                        }
                        return this.$utils.msg("身份证应输入身份证格式"), e.abrupt("return");
                      case 51:
                        return e.next = 53, this.$api.register("".concat(this.tableName), this.ruleForm);
                      case 53:
                        this.$utils.msgBack("注册成功");
                      case 55:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));

                function i() {
                  return e.apply(this, arguments)
                }
                return i
              }()
            }
          };
        i.default = o
      }).call(this, t("543d")["default"])
    },
    "0943": function (e, i, t) {
      "use strict";
      (function (e) {
        t("6cdc"), t("921b");
        n(t("66fd"));
        var i = n(t("3735"));

        function n(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(i.default)
      }).call(this, t("543d")["createPage"])
    },
    "101e": function (e, i, t) {
      "use strict";
      var n = t("aad5"),
        a = t.n(n);
      a.a
    },
    2264: function (e, i, t) {
      "use strict";
      var n, a = function () {
          var e = this,
            i = e.$createElement;
          e._self._c
        },
        r = [];
      t.d(i, "b", (function () {
        return a
      })), t.d(i, "c", (function () {
        return r
      })), t.d(i, "a", (function () {
        return n
      }))
    },
    3735: function (e, i, t) {
      "use strict";
      t.r(i);
      var n = t("2264"),
        a = t("48c7");
      for (var r in a) "default" !== r && function (e) {
        t.d(i, e, (function () {
          return a[e]
        }))
      }(r);
      t("101e");
      var u, s = t("f0c5"),
        h = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "a5115288", null, !1, n["a"], u);
      i["default"] = h.exports
    },
    "48c7": function (e, i, t) {
      "use strict";
      t.r(i);
      var n = t("0453"),
        a = t.n(n);
      for (var r in n) "default" !== r && function (e) {
        t.d(i, e, (function () {
          return n[e]
        }))
      }(r);
      i["default"] = a.a
    },
    aad5: function (e, i, t) {}
  },
  [
    ["0943", "common/runtime", "common/vendor"]
  ]
]);
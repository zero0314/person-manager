(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/yuangongqiandao/add-or-update"], {
    "3b93": function (n, e, t) {
      "use strict";
      (function (n) {
        t("6cdc"), t("921b");
        a(t("66fd"));
        var e = a(t("ba48"));

        function a(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(e.default)
      }).call(this, t("543d")["createPage"])
    },
    "838d": function (n, e, t) {},
    "867f": function (n, e, t) {
      "use strict";
      var a = t("838d"),
        i = t.n(a);
      i.a
    },
    9474: function (n, e, t) {
      "use strict";
      (function (n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = i(t("a34a"));

        function i(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }

        function r(n, e, t, a, i, r, o) {
          try {
            var u = n[r](o),
              s = u.value
          } catch (c) {
            return void t(c)
          }
          u.done ? e(s) : Promise.resolve(s).then(a, i)
        }

        function o(n) {
          return function () {
            var e = this,
              t = arguments;
            return new Promise((function (a, i) {
              var o = n.apply(e, t);

              function u(n) {
                r(o, a, i, u, s, "next", n)
              }

              function s(n) {
                r(o, a, i, u, s, "throw", n)
              }
              u(void 0)
            }))
          }
        }
        var u = function () {
            return Promise.all([t.e("common/vendor"), t.e("components/w-picker/w-picker")]).then(t.bind(null, "e2b1"))
          },
          s = function () {
            return t.e("components/xia-editor/xia-editor").then(t.bind(null, "064f"))
          },
          c = {
            data: function () {
              return {
                cross: "",
                userface: "",
                faceMatchFlag: !1,
                ruleForm: {
                  yuangonggonghao: "",
                  yuangongxingming: "",
                  bumen: "",
                  gangwei: "",
                  qiandaoleixing: "",
                  qiandaoshijian: "",
                  tupian: ""
                },
                qiandaoleixingOptions: [],
                qiandaoleixingIndex: 0,
                user: {},
                ro: {
                  yuangonggonghao: !1,
                  yuangongxingming: !1,
                  bumen: !1,
                  gangwei: !1,
                  qiandaoleixing: !1,
                  qiandaoshijian: !1,
                  tupian: !1
                }
              }
            },
            components: {
              wPicker: u,
              xiaEditor: s
            },
            computed: {
              baseUrl: function () {
                return this.$base.url
              }
            },
            onLoad: function () {
              var e = o(a.default.mark((function e(t) {
                var i, r, o, u;
                return a.default.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    
                    
                    case 0:
                      return this.ruleForm.qiandaoshijian = this.$utils.getCurDateTime(), i = n.getStorageSync("nowTable"), e.next = 4, this.$api.session(i);

                      case 4:
                      if (r = e.sent, this.user = r.data, /*this.userface = this.user.touxiang, */this.ruleForm.yuangonggonghao = this.user.yuangonggonghao, this.ro.yuangonggonghao = !0, this.ruleForm.yuangongxingming = this.user.yuangongxingming, this.ro.yuangongxingming = !0, this.ruleForm.bumen = this.user.bumen, this.ro.bumen = !0, this.ruleForm.gangwei = this.user.gangwei, this.ro.gangwei = !0, this.qiandaoleixingOptions = "签到,签退".split(","), this.ruleForm.userid = n.getStorageSync("userid"), t.refid && (this.ruleForm.refid = t.refid, this.ruleForm.nickname = n.getStorageSync("nickname")), !t.id) {
                        e.next = 24;
                        break
                      }
                      return this.ruleForm.id = t.id, e.next = 22, this.$api.info("yuangongqiandao", this.ruleForm.id);
                    case 22:
                      r = e.sent, this.ruleForm = r.data;
                    case 24:
                      if (this.cross = t.cross, !t.cross) {
                        e.next = 60;
                        break
                      }
                      o = n.getStorageSync("crossObj"), e.t0 = a.default.keys(o);
                    case 28:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 60;
                        break
                      }
                      if (u = e.t1.value, "yuangonggonghao" != u) {
                        e.next = 34;
                        break
                      }
                      return this.ruleForm.yuangonggonghao = o[u], this.ro.yuangonggonghao = !0, e.abrupt("continue", 28);
                    case 34:
                      if ("yuangongxingming" != u) {
                        e.next = 38;
                        break
                      }
                      return this.ruleForm.yuangongxingming = o[u], this.ro.yuangongxingming = !0, e.abrupt("continue", 28);
                    case 38:
                      if ("bumen" != u) {
                        e.next = 42;
                        break
                      }
                      return this.ruleForm.bumen = o[u], this.ro.bumen = !0, e.abrupt("continue", 28);
                    case 42:
                      if ("gangwei" != u) {
                        e.next = 46;
                        break
                      }
                      return this.ruleForm.gangwei = o[u], this.ro.gangwei = !0, e.abrupt("continue", 28);
                    case 46:
                      if ("qiandaoleixing" != u) {
                        e.next = 50;
                        break
                      }
                      return this.ruleForm.qiandaoleixing = o[u], this.ro.qiandaoleixing = !0, e.abrupt("continue", 28);
                    case 50:
                      if ("qiandaoshijian" != u) {
                        e.next = 54;
                        break
                      }
                      return this.ruleForm.qiandaoshijian = o[u], this.ro.qiandaoshijian = !0, e.abrupt("continue", 28);
                    case 54:
                      if ("tupian" != u) {
                        e.next = 58;
                        break
                      }
                      return this.ruleForm.tupian = o[u].split(",")[0], this.ro.tupian = !0, e.abrupt("continue", 28);
                    case 58:
                      e.next = 28;
                      break;
                    case 60:
                      this.styleChange();
                    case 61:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));

              function t(n) {
                return e.apply(this, arguments)
              }
              return t
            }(),
            methods: {
              styleChange: function () {
                this.$nextTick((function () {}))
              },
              qiandaoshijianConfirm: function (n) {
                console.log(n), this.ruleForm.qiandaoshijian = n.result, this.$forceUpdate()
              },
              qiandaoleixingChange: function (n) {
                this.qiandaoleixingIndex = n.target.value, this.ruleForm.qiandaoleixing = this.qiandaoleixingOptions[this.qiandaoleixingIndex]
              },
             
              tupianTap: function () {
                var n = this;
                this.$api.upload((function (e) {
                  n.ruleForm.tupian = "upload/" + e.file, n.$forceUpdate(), n.$nextTick((function () {
                    n.styleChange()
                  }))
                }))
              },
            
              getUUID: function () {
                return (new Date).getTime()
              },
              onSubmitTap: function () {
                var e = o(a.default.mark((function e() {
                  var t, i, r, o, u, s, c, g, l, d, h, f;
                  return a.default.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                      
                    
                    
                   /*
                      case 0:
                        if (this.faceMatchFlag) {
                          e.next = 13;
                          break
                        }
                        return t = {
                          face1: this.userface.replace("upload/", ""),
                          face2: this.ruleForm.tupian.replace("upload/", "")
                        }, e.next = 4, this.$api.faceMatch(t);
                      case 4:
                        if (i = e.sent, !(i && i.score >= 60)) {
                          e.next = 11;
                          break
                        }
                        return this.faceMatchFlag = !0, this.$utils.msg("匹配成功"), e.abrupt("return");
                      case 11:
                        return this.$utils.msg("匹配失败"), e.abrupt("return");
                      */



    /*case 13: */
                      case 0:
                        if (!this.cross) {
                          e.next = 29;
                          break
                        }
                        if (c = n.getStorageSync("statusColumnName"), g = n.getStorageSync("statusColumnValue"), "" == c) {
                          e.next = 29;
                          break
                        }
                        if (r || (r = n.getStorageSync("crossObj")), c.startsWith("[")) {
                          e.next = 25;
                          break
                        }
                        for (l in r) l == c && (r[l] = g);
                        return d = n.getStorageSync("crossTable"), e.next = 23, this.$api.update("".concat(d), r);
                      case 23:
                        e.next = 29;
                        break;
                      case 25:
                        o = Number(n.getStorageSync("userid")), u = r["id"], s = n.getStorageSync("statusColumnName"), s = s.replace(/\[/, "").replace(/\]/, "");
                      case 29:
                        if (!u || !o) {
                          e.next = 51;
                          break
                        }
                        return this.ruleForm.crossuserid = o, this.ruleForm.crossrefid = u, h = {
                          page: 1,
                          limit: 10,
                          crossuserid: o,
                          crossrefid: u
                        }, e.next = 35, this.$api.list("yuangongqiandao", h);
                      case 35:
                        if (f = e.sent, !(f.data.total >= s)) {
                          e.next = 41;
                          break
                        }
                        return this.$utils.msg(n.getStorageSync("tips")), e.abrupt("return", !1);
                      case 41:
                        if (!this.ruleForm.id) {
                          e.next = 46;
                          break
                        }
                        return e.next = 44, this.$api.update("yuangongqiandao", this.ruleForm);
                      case 44:
                        e.next = 48;
                        break;
                      case 46:
                        return e.next = 48, this.$api.add("yuangongqiandao", this.ruleForm);
                      case 48:
                        this.$utils.msgBack("提交成功");
                      case 49:
                        e.next = 59;
                        break;
                      case 51:
                        if (!this.ruleForm.id) {
                          e.next = 56;
                          break
                        }
                        return e.next = 54, this.$api.update("yuangongqiandao", this.ruleForm);
                      case 54:
                        e.next = 58;
                        break;
                      case 56:
                        return e.next = 58, this.$api.add("yuangongqiandao", this.ruleForm);
                      case 58:
                        this.$utils.msgBack("提交成功");
                      case 59:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));

                function t() {
                  return e.apply(this, arguments)
                }
                return t
              }(),
              optionsChange: function (n) {
                this.index = n.target.value
              },
              bindDateChange: function (n) {
                this.date = n.target.value
              },
              getDate: function (n) {
                var e = new Date,
                  t = e.getFullYear(),
                  a = e.getMonth() + 1,
                  i = e.getDate();
                return "start" === n ? t -= 60 : "end" === n && (t += 2), a = a > 9 ? a : "0" + a, i = i > 9 ? i : "0" + i, "".concat(t, "-").concat(a, "-").concat(i)
              },
              toggleTab: function (n) {
                this.$refs[n].show()
              }
            }
          };
        e.default = c
      }).call(this, t("543d")["default"])
    },
    ba48: function (n, e, t) {
      "use strict";
      t.r(e);
      var a = t("e3dd"),
        i = t("d651");
      for (var r in i) "default" !== r && function (n) {
        t.d(e, n, (function () {
          return i[n]
        }))
      }(r);
      t("867f");
      var o, u = t("f0c5"),
        s = Object(u["a"])(i["default"], a["b"], a["c"], !1, null, "52aada98", null, !1, a["a"], o);
      e["default"] = s.exports
    },
    d651: function (n, e, t) {
      "use strict";
      t.r(e);
      var a = t("9474"),
        i = t.n(a);
      for (var r in a) "default" !== r && function (n) {
        t.d(e, n, (function () {
          return a[n]
        }))
      }(r);
      e["default"] = i.a
    },
    e3dd: function (n, e, t) {
      "use strict";
      var a = {
          "w-picker": () => Promise.all([t.e("common/vendor"), t.e("components/w-picker/w-picker")]).then(t.bind(null, "e2b1"))
        },
        
        
        
        
        
        
        i = function () {
          var n = this,
            e = n.$createElement,
            t = (n._self._c, n.ruleForm.tupian.split(","));
          n.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        r = [];
      t.d(e, "b", (function () {
        return i
      })), t.d(e, "c", (function () {
        return r
      })), t.d(e, "a", (function () {
        return a
      }))
    }
  },
  [
    ["3b93", "common/runtime", "common/vendor"]
  ]
]);

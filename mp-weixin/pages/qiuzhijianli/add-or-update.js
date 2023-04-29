(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/qiuzhijianli/add-or-update"], {
    "1da8": function (i, e, n) {
      "use strict";
      n.r(e);
      var t = n("2af3"),
        r = n("6bb1");
      for (var a in r) "default" !== a && function (i) {
        n.d(e, i, (function () {
          return r[i]
        }))
      }(a);
      n("c32e");
      var u, s = n("f0c5"),
        o = Object(s["a"])(r["default"], t["b"], t["c"], !1, null, "1c92c440", null, !1, t["a"], u);
      e["default"] = o.exports
    },
    "2af3": function (i, e, n) {
      "use strict";
      var t = {
          "xia-editor": () => n.e("components/xia-editor/xia-editor").then(n.bind(null, "064f"))
        },
        r = function () {
          var i = this,
            e = i.$createElement,
            n = (i._self._c, i.ruleForm.touxiang.split(","));
          i.$mp.data = Object.assign({}, {
            $root: {
              g0: n
            }
          })
        },
        a = [];
      n.d(e, "b", (function () {
        return r
      })), n.d(e, "c", (function () {
        return a
      })), n.d(e, "a", (function () {
        return t
      }))
    },
    "6bb1": function (i, e, n) {
      "use strict";
      n.r(e);
      var t = n("eb74"),
        r = n.n(t);
      for (var a in t) "default" !== a && function (i) {
        n.d(e, i, (function () {
          return t[i]
        }))
      }(a);
      e["default"] = r.a
    },
    "6caba": function (i, e, n) {
      "use strict";
      (function (i) {
        n("6cdc"), n("921b");
        t(n("66fd"));
        var e = t(n("1da8"));

        function t(i) {
          return i && i.__esModule ? i : {
            default: i
          }
        }
        i(e.default)
      }).call(this, n("543d")["createPage"])
    },
    c32e: function (i, e, n) {
      "use strict";
      var t = n("e3a7"),
        r = n.n(t);
      r.a
    },
    e3a7: function (i, e, n) {},
    eb74: function (i, e, n) {
      "use strict";
      (function (i) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = r(n("a34a"));

        function r(i) {
          return i && i.__esModule ? i : {
            default: i
          }
        }

        function a(i, e, n, t, r, a, u) {
          try {
            var s = i[a](u),
              o = s.value
          } catch (h) {
            return void n(h)
          }
          s.done ? e(o) : Promise.resolve(o).then(t, r)
        }

        function u(i) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise((function (t, r) {
              var u = i.apply(e, n);

              function s(i) {
                a(u, t, r, s, o, "next", i)
              }

              function o(i) {
                a(u, t, r, s, o, "throw", i)
              }
              s(void 0)
            }))
          }
        }
        var s = function () {
            return Promise.all([n.e("common/vendor"), n.e("components/w-picker/w-picker")]).then(n.bind(null, "e2b1"))
          },
          o = function () {
            return n.e("components/xia-editor/xia-editor").then(n.bind(null, "064f"))
          },
          h = {
            data: function () {
              return {
                cross: "",
                ruleForm: {
                  qiuzhizhezhanghao: "",
                  qiuzhizhexingming: "",
                  xingbie: "",
                  nianling: "",
                  zhuanye: "",
                  xueli: "",
                  lianxidianhua: "",
                  touxiang: "",
                  qiuzhiriqi: "",
                  qiuzhigangwei: "",
                  qiwangxinzi: "",
                  huojiangzhengshu: "",
                  jiaoyubeijing: "",
                  shhf: ""
                },
                user: {},
                ro: {
                  qiuzhizhezhanghao: !1,
                  qiuzhizhexingming: !1,
                  xingbie: !1,
                  nianling: !1,
                  zhuanye: !1,
                  xueli: !1,
                  lianxidianhua: !1,
                  touxiang: !1,
                  qiuzhiriqi: !1,
                  qiuzhigangwei: !1,
                  qiwangxinzi: !1,
                  huojiangzhengshu: !1,
                  jiaoyubeijing: !1,
                  sfsh: !1,
                  shhf: !1
                }
              }
            },
            components: {
              wPicker: s,
              xiaEditor: o
            },
            computed: {
              baseUrl: function () {
                return this.$base.url
              }
            },
            onLoad: function () {
              var e = u(t.default.mark((function e(n) {
                var r, a, u, s;
                return t.default.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return this.ruleForm.qiuzhiriqi = this.$utils.getCurDate(), r = i.getStorageSync("nowTable"), e.next = 4, this.$api.session(r);
                    case 4:
                      if (a = e.sent, this.user = a.data, this.ruleForm.qiuzhizhezhanghao = this.user.qiuzhizhezhanghao, this.ro.qiuzhizhezhanghao = !0, this.ruleForm.qiuzhizhexingming = this.user.qiuzhizhexingming, this.ro.qiuzhizhexingming = !0, this.ruleForm.xingbie = this.user.xingbie, this.ro.xingbie = !0, this.ruleForm.nianling = this.user.nianling, this.ro.nianling = !0, this.ruleForm.zhuanye = this.user.zhuanye, this.ro.zhuanye = !0, this.ruleForm.xueli = this.user.xueli, this.ro.xueli = !0, this.ruleForm.lianxidianhua = this.user.lianxidianhua, this.ro.lianxidianhua = !0, this.ruleForm.touxiang = this.user.touxiang, this.ro.touxiang = !0, this.ruleForm.userid = i.getStorageSync("userid"), n.refid && (this.ruleForm.refid = n.refid, this.ruleForm.nickname = i.getStorageSync("nickname")), !n.id) {
                        e.next = 30;
                        break
                      }
                      return this.ruleForm.id = n.id, e.next = 28, this.$api.info("qiuzhijianli", this.ruleForm.id);
                    case 28:
                      a = e.sent, this.ruleForm = a.data;
                    case 30:
                      if (this.cross = n.cross, !n.cross) {
                        e.next = 90;
                        break
                      }
                      u = i.getStorageSync("crossObj"), e.t0 = t.default.keys(u);
                    case 34:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 90;
                        break
                      }
                      if (s = e.t1.value, "qiuzhizhezhanghao" != s) {
                        e.next = 40;
                        break
                      }
                      return this.ruleForm.qiuzhizhezhanghao = u[s], this.ro.qiuzhizhezhanghao = !0, e.abrupt("continue", 34);
                    case 40:
                      if ("qiuzhizhexingming" != s) {
                        e.next = 44;
                        break
                      }
                      return this.ruleForm.qiuzhizhexingming = u[s], this.ro.qiuzhizhexingming = !0, e.abrupt("continue", 34);
                    case 44:
                      if ("xingbie" != s) {
                        e.next = 48;
                        break
                      }
                      return this.ruleForm.xingbie = u[s], this.ro.xingbie = !0, e.abrupt("continue", 34);
                    case 48:
                      if ("nianling" != s) {
                        e.next = 52;
                        break
                      }
                      return this.ruleForm.nianling = u[s], this.ro.nianling = !0, e.abrupt("continue", 34);
                    case 52:
                      if ("zhuanye" != s) {
                        e.next = 56;
                        break
                      }
                      return this.ruleForm.zhuanye = u[s], this.ro.zhuanye = !0, e.abrupt("continue", 34);
                    case 56:
                      if ("xueli" != s) {
                        e.next = 60;
                        break
                      }
                      return this.ruleForm.xueli = u[s], this.ro.xueli = !0, e.abrupt("continue", 34);
                    case 60:
                      if ("lianxidianhua" != s) {
                        e.next = 64;
                        break
                      }
                      return this.ruleForm.lianxidianhua = u[s], this.ro.lianxidianhua = !0, e.abrupt("continue", 34);
                    case 64:
                      if ("touxiang" != s) {
                        e.next = 68;
                        break
                      }
                      return this.ruleForm.touxiang = u[s].split(",")[0], this.ro.touxiang = !0, e.abrupt("continue", 34);
                    case 68:
                      if ("qiuzhiriqi" != s) {
                        e.next = 72;
                        break
                      }
                      return this.ruleForm.qiuzhiriqi = u[s], this.ro.qiuzhiriqi = !0, e.abrupt("continue", 34);
                    case 72:
                      if ("qiuzhigangwei" != s) {
                        e.next = 76;
                        break
                      }
                      return this.ruleForm.qiuzhigangwei = u[s], this.ro.qiuzhigangwei = !0, e.abrupt("continue", 34);
                    case 76:
                      if ("qiwangxinzi" != s) {
                        e.next = 80;
                        break
                      }
                      return this.ruleForm.qiwangxinzi = u[s], this.ro.qiwangxinzi = !0, e.abrupt("continue", 34);
                    case 80:
                      if ("huojiangzhengshu" != s) {
                        e.next = 84;
                        break
                      }
                      return this.ruleForm.huojiangzhengshu = u[s], this.ro.huojiangzhengshu = !0, e.abrupt("continue", 34);
                    case 84:
                      if ("jiaoyubeijing" != s) {
                        e.next = 88;
                        break
                      }
                      return this.ruleForm.jiaoyubeijing = u[s], this.ro.jiaoyubeijing = !0, e.abrupt("continue", 34);
                    case 88:
                      e.next = 34;
                      break;
                    case 90:
                      this.styleChange();
                    case 91:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));

              function n(i) {
                return e.apply(this, arguments)
              }
              return n
            }(),
            methods: {
              huojiangzhengshuChange: function (i) {
                this.ruleForm.huojiangzhengshu = i
              },
              jiaoyubeijingChange: function (i) {
                this.ruleForm.jiaoyubeijing = i
              },
              styleChange: function () {
                this.$nextTick((function () {}))
              },
              qiuzhiriqiChange: function (i) {
                this.ruleForm.qiuzhiriqi = i.target.value, this.$forceUpdate()
              },
              touxiangTap: function () {
                var i = this;
                this.$api.upload((function (e) {
                  i.ruleForm.touxiang = "upload/" + e.file, i.$forceUpdate(), i.$nextTick((function () {
                    i.styleChange()
                  }))
                }))
              },
              getUUID: function () {
                return (new Date).getTime()
              },
              onSubmitTap: function () {
                var e = u(t.default.mark((function e() {
                  var n, r, a, u, s, o, h, c, l, g;
                  return t.default.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (!this.cross) {
                          e.next = 16;
                          break
                        }
                        if (s = i.getStorageSync("statusColumnName"), o = i.getStorageSync("statusColumnValue"), "" == s) {
                          e.next = 16;
                          break
                        }
                        if (n || (n = i.getStorageSync("crossObj")), s.startsWith("[")) {
                          e.next = 12;
                          break
                        }
                        for (h in n) h == s && (n[h] = o);
                        return c = i.getStorageSync("crossTable"), e.next = 10, this.$api.update("".concat(c), n);
                      case 10:
                        e.next = 16;
                        break;
                      case 12:
                        r = Number(i.getStorageSync("userid")), a = n["id"], u = i.getStorageSync("statusColumnName"), u = u.replace(/\[/, "").replace(/\]/, "");
                      case 16:
                        if (!a || !r) {
                          e.next = 38;
                          break
                        }
                        return this.ruleForm.crossuserid = r, this.ruleForm.crossrefid = a, l = {
                          page: 1,
                          limit: 10,
                          crossuserid: r,
                          crossrefid: a
                        }, e.next = 22, this.$api.list("qiuzhijianli", l);
                      case 22:
                        if (g = e.sent, !(g.data.total >= u)) {
                          e.next = 28;
                          break
                        }
                        return this.$utils.msg(i.getStorageSync("tips")), e.abrupt("return", !1);
                      case 28:
                        if (!this.ruleForm.id) {
                          e.next = 33;
                          break
                        }
                        return e.next = 31, this.$api.update("qiuzhijianli", this.ruleForm);
                      case 31:
                        e.next = 35;
                        break;
                      case 33:
                        return e.next = 35, this.$api.add("qiuzhijianli", this.ruleForm);
                      case 35:
                        this.$utils.msgBack("提交成功");
                      case 36:
                        e.next = 46;
                        break;
                      case 38:
                        if (!this.ruleForm.id) {
                          e.next = 43;
                          break
                        }
                        return e.next = 41, this.$api.update("qiuzhijianli", this.ruleForm);
                      case 41:
                        e.next = 45;
                        break;
                      case 43:
                        return e.next = 45, this.$api.add("qiuzhijianli", this.ruleForm);
                      case 45:
                        this.$utils.msgBack("提交成功");
                      case 46:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));

                function n() {
                  return e.apply(this, arguments)
                }
                return n
              }(),
              optionsChange: function (i) {
                this.index = i.target.value
              },
              bindDateChange: function (i) {
                this.date = i.target.value
              },
              getDate: function (i) {
                var e = new Date,
                  n = e.getFullYear(),
                  t = e.getMonth() + 1,
                  r = e.getDate();
                return "start" === i ? n -= 60 : "end" === i && (n += 2), t = t > 9 ? t : "0" + t, r = r > 9 ? r : "0" + r, "".concat(n, "-").concat(t, "-").concat(r)
              },
              toggleTab: function (i) {
                this.$refs[i].show()
              }
            }
          };
        e.default = h
      }).call(this, n("543d")["default"])
    }
  },
  [
    ["6caba", "common/runtime", "common/vendor"]
  ]
]);
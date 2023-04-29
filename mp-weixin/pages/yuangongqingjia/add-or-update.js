(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/yuangongqingjia/add-or-update"], {
    "4abf": function (n, e, i) {},
    "53e5": function (n, e, i) {
      "use strict";
      (function (n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = a(i("a34a"));

        function a(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }

        function r(n, e, i, t, a, r, u) {
          try {
            var s = n[r](u),
              o = s.value
          } catch (c) {
            return void i(c)
          }
          s.done ? e(o) : Promise.resolve(o).then(t, a)
        }

        function u(n) {
          return function () {
            var e = this,
              i = arguments;
            return new Promise((function (t, a) {
              var u = n.apply(e, i);

              function s(n) {
                r(u, t, a, s, o, "next", n)
              }

              function o(n) {
                r(u, t, a, s, o, "throw", n)
              }
              s(void 0)
            }))
          }
        }
        var s = function () {
            return Promise.all([i.e("common/vendor"), i.e("components/w-picker/w-picker")]).then(i.bind(null, "e2b1"))
          },
          o = function () {
            return i.e("components/xia-editor/xia-editor").then(i.bind(null, "064f"))
          },
          c = {
            data: function () {
              return {
                cross: "",
                ruleForm: {
                  yuangonggonghao: "",
                  yuangongxingming: "",
                  bumen: "",
                  gangwei: "",
                  qingjialeixing: "",
                  tupian: "",
                  qishishijian: "",
                  jiezhishijian: "",
                  qingjiatianshu: "",
                  qingjiayuanyin: "",
                  shhf: ""
                },
                user: {},
                ro: {
                  yuangonggonghao: !1,
                  yuangongxingming: !1,
                  bumen: !1,
                  gangwei: !1,
                  qingjialeixing: !1,
                  tupian: !1,
                  qishishijian: !1,
                  jiezhishijian: !1,
                  qingjiatianshu: !1,
                  qingjiayuanyin: !1,
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
              var e = u(t.default.mark((function e(i) {
                var a, r, u, s;
                return t.default.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return a = n.getStorageSync("nowTable"), e.next = 3, this.$api.session(a);
                    case 3:
                      if (r = e.sent, this.user = r.data, this.ruleForm.yuangonggonghao = this.user.yuangonggonghao, this.ro.yuangonggonghao = !0, this.ruleForm.yuangongxingming = this.user.yuangongxingming, this.ro.yuangongxingming = !0, this.ruleForm.bumen = this.user.bumen, this.ro.bumen = !0, this.ruleForm.gangwei = this.user.gangwei, this.ro.gangwei = !0, this.ruleForm.userid = n.getStorageSync("userid"), i.refid && (this.ruleForm.refid = i.refid, this.ruleForm.nickname = n.getStorageSync("nickname")), !i.id) {
                        e.next = 21;
                        break
                      }
                      return this.ruleForm.id = i.id, e.next = 19, this.$api.info("yuangongqingjia", this.ruleForm.id);
                    case 19:
                      r = e.sent, this.ruleForm = r.data;
                    case 21:
                      if (this.cross = i.cross, !i.cross) {
                        e.next = 69;
                        break
                      }
                      u = n.getStorageSync("crossObj"), e.t0 = t.default.keys(u);
                    case 25:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 69;
                        break
                      }
                      if (s = e.t1.value, "yuangonggonghao" != s) {
                        e.next = 31;
                        break
                      }
                      return this.ruleForm.yuangonggonghao = u[s], this.ro.yuangonggonghao = !0, e.abrupt("continue", 25);
                    case 31:
                      if ("yuangongxingming" != s) {
                        e.next = 35;
                        break
                      }
                      return this.ruleForm.yuangongxingming = u[s], this.ro.yuangongxingming = !0, e.abrupt("continue", 25);
                    case 35:
                      if ("bumen" != s) {
                        e.next = 39;
                        break
                      }
                      return this.ruleForm.bumen = u[s], this.ro.bumen = !0, e.abrupt("continue", 25);
                    case 39:
                      if ("gangwei" != s) {
                        e.next = 43;
                        break
                      }
                      return this.ruleForm.gangwei = u[s], this.ro.gangwei = !0, e.abrupt("continue", 25);
                    case 43:
                      if ("qingjialeixing" != s) {
                        e.next = 47;
                        break
                      }
                      return this.ruleForm.qingjialeixing = u[s], this.ro.qingjialeixing = !0, e.abrupt("continue", 25);
                    case 47:
                      if ("tupian" != s) {
                        e.next = 51;
                        break
                      }
                      return this.ruleForm.tupian = u[s].split(",")[0], this.ro.tupian = !0, e.abrupt("continue", 25);
                    case 51:
                      if ("qishishijian" != s) {
                        e.next = 55;
                        break
                      }
                      return this.ruleForm.qishishijian = u[s], this.ro.qishishijian = !0, e.abrupt("continue", 25);
                    case 55:
                      if ("jiezhishijian" != s) {
                        e.next = 59;
                        break
                      }
                      return this.ruleForm.jiezhishijian = u[s], this.ro.jiezhishijian = !0, e.abrupt("continue", 25);
                    case 59:
                      if ("qingjiatianshu" != s) {
                        e.next = 63;
                        break
                      }
                      return this.ruleForm.qingjiatianshu = u[s], this.ro.qingjiatianshu = !0, e.abrupt("continue", 25);
                    case 63:
                      if ("qingjiayuanyin" != s) {
                        e.next = 67;
                        break
                      }
                      return this.ruleForm.qingjiayuanyin = u[s], this.ro.qingjiayuanyin = !0, e.abrupt("continue", 25);
                    case 67:
                      e.next = 25;
                      break;
                    case 69:
                      this.styleChange();
                    case 70:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));

              function i(n) {
                return e.apply(this, arguments)
              }
              return i
            }(),
            methods: {
              styleChange: function () {
                this.$nextTick((function () {}))
              },
              qishishijianConfirm: function (n) {
                console.log(n), this.ruleForm.qishishijian = n.result, this.$forceUpdate()
              },
              jiezhishijianConfirm: function (n) {
                console.log(n), this.ruleForm.jiezhishijian = n.result, this.$forceUpdate()
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
                var e = u(t.default.mark((function e() {
                  var i, a, r, u, s, o, c, g, h, l;
                  return t.default.wrap((function (e) {
                    while (1) switch (e.prev = e.next) {
                      case 0:
                        if (!this.cross) {
                          e.next = 16;
                          break
                        }
                        if (s = n.getStorageSync("statusColumnName"), o = n.getStorageSync("statusColumnValue"), "" == s) {
                          e.next = 16;
                          break
                        }
                        if (i || (i = n.getStorageSync("crossObj")), s.startsWith("[")) {
                          e.next = 12;
                          break
                        }
                        for (c in i) c == s && (i[c] = o);
                        return g = n.getStorageSync("crossTable"), e.next = 10, this.$api.update("".concat(g), i);
                      case 10:
                        e.next = 16;
                        break;
                      case 12:
                        a = Number(n.getStorageSync("userid")), r = i["id"], u = n.getStorageSync("statusColumnName"), u = u.replace(/\[/, "").replace(/\]/, "");
                      case 16:
                        if (!r || !a) {
                          e.next = 38;
                          break
                        }
                        return this.ruleForm.crossuserid = a, this.ruleForm.crossrefid = r, h = {
                          page: 1,
                          limit: 10,
                          crossuserid: a,
                          crossrefid: r
                        }, e.next = 22, this.$api.list("yuangongqingjia", h);
                      case 22:
                        if (l = e.sent, !(l.data.total >= u)) {
                          e.next = 28;
                          break
                        }
                        return this.$utils.msg(n.getStorageSync("tips")), e.abrupt("return", !1);
                      case 28:
                        if (!this.ruleForm.id) {
                          e.next = 33;
                          break
                        }
                        return e.next = 31, this.$api.update("yuangongqingjia", this.ruleForm);
                      case 31:
                        e.next = 35;
                        break;
                      case 33:
                        return e.next = 35, this.$api.add("yuangongqingjia", this.ruleForm);
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
                        return e.next = 41, this.$api.update("yuangongqingjia", this.ruleForm);
                      case 41:
                        e.next = 45;
                        break;
                      case 43:
                        return e.next = 45, this.$api.add("yuangongqingjia", this.ruleForm);
                      case 45:
                        this.$utils.msgBack("提交成功");
                      case 46:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                })));

                function i() {
                  return e.apply(this, arguments)
                }
                return i
              }(),
              optionsChange: function (n) {
                this.index = n.target.value
              },
              bindDateChange: function (n) {
                this.date = n.target.value
              },
              getDate: function (n) {
                var e = new Date,
                  i = e.getFullYear(),
                  t = e.getMonth() + 1,
                  a = e.getDate();
                return "start" === n ? i -= 60 : "end" === n && (i += 2), t = t > 9 ? t : "0" + t, a = a > 9 ? a : "0" + a, "".concat(i, "-").concat(t, "-").concat(a)
              },
              toggleTab: function (n) {
                this.$refs[n].show()
              }
            }
          };
        e.default = c
      }).call(this, i("543d")["default"])
    },
    "85a9": function (n, e, i) {
      "use strict";
      i.r(e);
      var t = i("53e5"),
        a = i.n(t);
      for (var r in t) "default" !== r && function (n) {
        i.d(e, n, (function () {
          return t[n]
        }))
      }(r);
      e["default"] = a.a
    },
    ab52: function (n, e, i) {
      "use strict";
      var t = i("4abf"),
        a = i.n(t);
      a.a
    },
    d687: function (n, e, i) {
      "use strict";
      (function (n) {
        i("6cdc"), i("921b");
        t(i("66fd"));
        var e = t(i("f74a"));

        function t(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(e.default)
      }).call(this, i("543d")["createPage"])
    },
    e85d: function (n, e, i) {
      "use strict";
      var t = {
          "w-picker": () => Promise.all([i.e("common/vendor"), i.e("components/w-picker/w-picker")]).then(i.bind(null, "e2b1"))
        },
        a = function () {
          var n = this,
            e = n.$createElement,
            i = (n._self._c, n.ruleForm.tupian.split(","));
          n.$mp.data = Object.assign({}, {
            $root: {
              g0: i
            }
          })
        },
        r = [];
      i.d(e, "b", (function () {
        return a
      })), i.d(e, "c", (function () {
        return r
      })), i.d(e, "a", (function () {
        return t
      }))
    },
    f74a: function (n, e, i) {
      "use strict";
      i.r(e);
      var t = i("e85d"),
        a = i("85a9");
      for (var r in a) "default" !== r && function (n) {
        i.d(e, n, (function () {
          return a[n]
        }))
      }(r);
      i("ab52");
      var u, s = i("f0c5"),
        o = Object(s["a"])(a["default"], t["b"], t["c"], !1, null, "7f309af0", null, !1, t["a"], u);
      e["default"] = o.exports
    }
  },
  [
    ["d687", "common/runtime", "common/vendor"]
  ]
]);
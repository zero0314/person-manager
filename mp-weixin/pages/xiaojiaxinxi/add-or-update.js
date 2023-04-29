(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/xiaojiaxinxi/add-or-update"], {
    "1c80": function (e, t, n) {
      "use strict";
      (function (e) {
        n("6cdc"), n("921b");
        i(n("66fd"));
        var t = i(n("47618"));

        function i(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, n("543d")["createPage"])
    },
    "22e9": function (e, t, n) {
      "use strict";
      var i, a = function () {
          var e = this,
            t = e.$createElement,
            n = (e._self._c, e.ruleForm.tupian.split(","));
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: n
            }
          })
        },
        r = [];
      n.d(t, "b", (function () {
        return a
      })), n.d(t, "c", (function () {
        return r
      })), n.d(t, "a", (function () {
        return i
      }))
    },
    47618: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("22e9"),
        a = n("55f7");
      for (var r in a) "default" !== r && function (e) {
        n.d(t, e, (function () {
          return a[e]
        }))
      }(r);
      n("d11a");
      var o, u = n("f0c5"),
        s = Object(u["a"])(a["default"], i["b"], i["c"], !1, null, "e7bb9c36", null, !1, i["a"], o);
      t["default"] = s.exports
    },
    5296: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = a(n("a34a"));

        function a(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }

        function r(e, t, n, i, a, r, o) {
          try {
            var u = e[r](o),
              s = u.value
          } catch (c) {
            return void n(c)
          }
          u.done ? t(s) : Promise.resolve(s).then(i, a)
        }

        function o(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise((function (i, a) {
              var o = e.apply(t, n);

              function u(e) {
                r(o, i, a, u, s, "next", e)
              }

              function s(e) {
                r(o, i, a, u, s, "throw", e)
              }
              u(void 0)
            }))
          }
        }
        var u = function () {
            return Promise.all([n.e("common/vendor"), n.e("components/w-picker/w-picker")]).then(n.bind(null, "e2b1"))
          },
          s = function () {
            return n.e("components/xia-editor/xia-editor").then(n.bind(null, "064f"))
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
                  xiaojiabianhao: this.getUUID(),
                  tupian: "",
                  xiaojiashijian: "",
                  xiaojiabeizhu: "",
                  shhf: ""
                },
                user: {},
                ro: {
                  yuangonggonghao: !1,
                  yuangongxingming: !1,
                  bumen: !1,
                  gangwei: !1,
                  xiaojiabianhao: !1,
                  tupian: !1,
                  xiaojiashijian: !1,
                  xiaojiabeizhu: !1,
                  sfsh: !1,
                  shhf: !1
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
              var t = o(i.default.mark((function t(n) {
                var a, r, o, u;
                return i.default.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return this.ruleForm.xiaojiashijian = this.$utils.getCurDate(), a = e.getStorageSync("nowTable"), t.next = 4, this.$api.session(a);
                    case 4:
                      if (r = t.sent, this.user = r.data, this.ruleForm.yuangonggonghao = this.user.yuangonggonghao, this.ro.yuangonggonghao = !0, this.ruleForm.yuangongxingming = this.user.yuangongxingming, this.ro.yuangongxingming = !0, this.ruleForm.bumen = this.user.bumen, this.ro.bumen = !0, this.ruleForm.userid = e.getStorageSync("userid"), n.refid && (this.ruleForm.refid = n.refid, this.ruleForm.nickname = e.getStorageSync("nickname")), !n.id) {
                        t.next = 20;
                        break
                      }
                      return this.ruleForm.id = n.id, t.next = 18, this.$api.info("xiaojiaxinxi", this.ruleForm.id);
                    case 18:
                      r = t.sent, this.ruleForm = r.data;
                    case 20:
                      if (this.cross = n.cross, !n.cross) {
                        t.next = 60;
                        break
                      }
                      o = e.getStorageSync("crossObj"), t.t0 = i.default.keys(o);
                    case 24:
                      if ((t.t1 = t.t0()).done) {
                        t.next = 60;
                        break
                      }
                      if (u = t.t1.value, "yuangonggonghao" != u) {
                        t.next = 30;
                        break
                      }
                      return this.ruleForm.yuangonggonghao = o[u], this.ro.yuangonggonghao = !0, t.abrupt("continue", 24);
                    case 30:
                      if ("yuangongxingming" != u) {
                        t.next = 34;
                        break
                      }
                      return this.ruleForm.yuangongxingming = o[u], this.ro.yuangongxingming = !0, t.abrupt("continue", 24);
                    case 34:
                      if ("bumen" != u) {
                        t.next = 38;
                        break
                      }
                      return this.ruleForm.bumen = o[u], this.ro.bumen = !0, t.abrupt("continue", 24);
                    case 38:
                      if ("gangwei" != u) {
                        t.next = 42;
                        break
                      }
                      return this.ruleForm.gangwei = o[u], this.ro.gangwei = !0, t.abrupt("continue", 24);
                    case 42:
                      if ("xiaojiabianhao" != u) {
                        t.next = 46;
                        break
                      }
                      return this.ruleForm.xiaojiabianhao = o[u], this.ro.xiaojiabianhao = !0, t.abrupt("continue", 24);
                    case 46:
                      if ("tupian" != u) {
                        t.next = 50;
                        break
                      }
                      return this.ruleForm.tupian = o[u].split(",")[0], this.ro.tupian = !0, t.abrupt("continue", 24);
                    case 50:
                      if ("xiaojiashijian" != u) {
                        t.next = 54;
                        break
                      }
                      return this.ruleForm.xiaojiashijian = o[u], this.ro.xiaojiashijian = !0, t.abrupt("continue", 24);
                    case 54:
                      if ("xiaojiabeizhu" != u) {
                        t.next = 58;
                        break
                      }
                      return this.ruleForm.xiaojiabeizhu = o[u], this.ro.xiaojiabeizhu = !0, t.abrupt("continue", 24);
                    case 58:
                      t.next = 24;
                      break;
                    case 60:
                      this.styleChange();
                    case 61:
                    case "end":
                      return t.stop()
                  }
                }), t, this)
              })));

              function n(e) {
                return t.apply(this, arguments)
              }
              return n
            }(),
            methods: {
              styleChange: function () {
                this.$nextTick((function () {}))
              },
              xiaojiashijianChange: function (e) {
                this.ruleForm.xiaojiashijian = e.target.value, this.$forceUpdate()
              },
              tupianTap: function () {
                var e = this;
                this.$api.upload((function (t) {
                  e.ruleForm.tupian = "upload/" + t.file, e.$forceUpdate(), e.$nextTick((function () {
                    e.styleChange()
                  }))
                }))
              },
              getUUID: function () {
                return (new Date).getTime()
              },
              onSubmitTap: function () {
                var t = o(i.default.mark((function t() {
                  var n, a, r, o, u, s, c, g, h, l;
                  return i.default.wrap((function (t) {
                    while (1) switch (t.prev = t.next) {
                      case 0:
                        if (!this.cross) {
                          t.next = 16;
                          break
                        }
                        if (u = e.getStorageSync("statusColumnName"), s = e.getStorageSync("statusColumnValue"), "" == u) {
                          t.next = 16;
                          break
                        }
                        /*获取传过来的参数，crossTable就是销假信息*/
                        if (n || (n = e.getStorageSync("crossObj")), u.startsWith("[")) {
                          t.next = 12;
                          break
                        }
                        for (c in n) c == u && (n[c] = s);
                        return g = e.getStorageSync("crossTable"), t.next = 10, this.$api.update("".concat(g), n);
                      case 10:
                        t.next = 16;
                        break;
                      case 12:
                        a = Number(e.getStorageSync("userid")), r = n["id"], o = e.getStorageSync("statusColumnName"), o = o.replace(/\[/, "").replace(/\]/, "");
                      case 16:
                        if (!r || !a) {
                          t.next = 38;
                          break
                        }
                        return this.ruleForm.crossuserid = a, this.ruleForm.crossrefid = r, h = {
                          page: 1,
                          limit: 10,
                          crossuserid: a,
                          crossrefid: r
                        }, t.next = 22, this.$api.list("xiaojiaxinxi", h);
                        /*提交之后会回退到list页面（上面代码）*/
                      case 22:
                        if (l = t.sent, !(l.data.total >= o)) {
                          t.next = 28;
                          break
                        }
                        return this.$utils.msg(e.getStorageSync("tips")), t.abrupt("return", !1);
                      case 28:
                        if (!this.ruleForm.id) {
                          t.next = 33;
                          break
                        }
                        return t.next = 31, this.$api.update("xiaojiaxinxi", this.ruleForm);
                      case 31:
                        t.next = 35;
                        break;
                      case 33:
                        return t.next = 35, this.$api.add("xiaojiaxinxi", this.ruleForm);
                      case 35:
                        this.$utils.msgBack("提交成功");
                      case 36:
                        t.next = 46;
                        break;
                      case 38:
                        if (!this.ruleForm.id) {
                          t.next = 43;
                          break
                        }
                        return t.next = 41, this.$api.update("xiaojiaxinxi", this.ruleForm);
                      case 41:
                        t.next = 45;
                        break;
                      case 43:
                        return t.next = 45, this.$api.add("xiaojiaxinxi", this.ruleForm);
                      case 45:
                        this.$utils.msgBack("提交成功");
                      case 46:
                      case "end":
                        return t.stop()
                    }
                  }), t, this)
                })));

                function n() {
                  return t.apply(this, arguments)
                }
                return n
              }(),
              optionsChange: function (e) {
                this.index = e.target.value
              },
              bindDateChange: function (e) {
                this.date = e.target.value
              },
              getDate: function (e) {
                var t = new Date,
                  n = t.getFullYear(),
                  i = t.getMonth() + 1,
                  a = t.getDate();
                return "start" === e ? n -= 60 : "end" === e && (n += 2), i = i > 9 ? i : "0" + i, a = a > 9 ? a : "0" + a, "".concat(n, "-").concat(i, "-").concat(a)
              },
              toggleTab: function (e) {
                this.$refs[e].show()
              }
            }
          };
        t.default = c
      }).call(this, n("543d")["default"])
    },
    "55f7": function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("5296"),
        a = n.n(i);
      for (var r in i) "default" !== r && function (e) {
        n.d(t, e, (function () {
          return i[e]
        }))
      }(r);
      t["default"] = a.a
    },
    "7d1d": function (e, t, n) {},
    d11a: function (e, t, n) {
      "use strict";
      var i = n("7d1d"),
        a = n.n(i);
      a.a
    }
  },
  [
    ["1c80", "common/runtime", "common/vendor"]
  ]
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/login/login"], {
    "0036": function (t, e, n) {
      "use strict";
      (function (t) {
        n("6cdc"), n("921b");
        i(n("66fd"));
        var e = i(n("a86a"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, n("543d")["createPage"])
    },
    3285: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("8edd"),
        a = n.n(i);
      for (var r in i) "default" !== r && function (t) {
        n.d(e, t, (function () {
          return i[t]
        }))
      }(r);
      e["default"] = a.a
    },
    "7fbb": function (t, e, n) {
      "use strict";
      var i = n("c278"),
        a = n.n(i);
      a.a
    },
    "8edd": function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = r(n("a34a")),
          a = r(n("2971"));

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function s(t, e, n, i, a, r, s) {
          try {
            var o = t[r](s),
              u = o.value
          } catch (c) {
            return void n(c)
          }
          o.done ? e(u) : Promise.resolve(u).then(i, a)
        }

        function o(t) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise((function (i, a) {
              var r = t.apply(e, n);

              function o(t) {
                s(r, i, a, o, u, "next", t)
              }

              function u(t) {
                s(r, i, a, o, u, "throw", t)
              }
              o(void 0)
            }))
          }
        }
        var u = {
          data: function () {
            return {
              username: "",
              password: "",
              loginType: 1,
              codes: [{
                num: 1,
                color: "#000",
                rotate: "10deg",
                size: "16px"
              }, {
                num: 2,
                color: "#000",
                rotate: "10deg",
                size: "16px"
              }, {
                num: 3,
                color: "#000",
                rotate: "10deg",
                size: "16px"
              }, {
                num: 4,
                color: "#000",
                rotate: "10deg",
                size: "16px"
              }],
              options: ["请选择登录用户类型"],
              optionsValues: ["", "yuangong", "qiuzhizhe"],
              index: 0,
              roleNum: 0
            }
          },
          onLoad: function () {
            var t = ["请选择登录用户类型"],
              e = a.default.list();
            this.menuList = e;
            /*从菜单list遍历，获取roleName，即角色名称，和角色标识*/
            for (var n = 0; n < this.menuList.length; n++) "是" == this.menuList[n].hasFrontLogin && (t.push(this.menuList[n].roleName), this.roleNum++);
            1 == this.roleNum && (this.index = 1), this.options = t, this.styleChange()
          },
          methods: {
            styleChange: function () {
              this.$nextTick((function () {}))
            },
            onRegisterTap: function (e) {
              t.setStorageSync("loginTable", e), this.$utils.jump("../register/register")
            },
            onLoginTap: function () {
              var e = o(i.default.mark((function e() {
                var n;
                return i.default.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      /*获取用户名和密码，用户类型进行校验*/
                      if (this.username) {
                        e.next = 3;
                        break
                      }
                      return this.$utils.msg("请输入用户名"), e.abrupt("return");
                    case 3:
                      if (this.password) {
                        e.next = 6;
                        break
                      }
                      return this.$utils.msg("请输入用户密码"), e.abrupt("return");
                    case 6:
                      if (this.optionsValues[this.index]) {
                        e.next = 9;
                        break
                      }
                      return this.$utils.msg("请选择登录用户类型"), e.abrupt("return");
                    case 9:

                      return e.next = 11, this.$api.login("".concat(this.optionsValues[this.index]), {
                        username: this.username,
                        password: this.password
                      });
                      /*登录成功后跳转到index页面*/
                    case 11:
                      return n = e.sent, t.removeStorageSync("useridTag"), t.setStorageSync("token", n.token), t.setStorageSync("nickname", this.username), t.setStorageSync("nowTable", "".concat(this.optionsValues[this.index])), e.next = 18, this.$api.session("".concat(this.optionsValues[this.index]));
                    case 18:
                      n = e.sent, n.data.touxiang ? t.setStorageSync("headportrait", n.data.touxiang) : n.data.headportrait && t.setStorageSync("headportrait", n.data.headportrait), t.setStorageSync("userid", n.data.id), n.data.vip && t.setStorageSync("vip", n.data.vip), t.setStorageSync("role", "".concat(this.options[this.index])), this.$utils.tab("../index/index");
                    case 24:
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
            optionsChange: function (t) {
              this.index = t.target.value
            }
          }
        };
        e.default = u
      }).call(this, n("543d")["default"])
    },
    a86a: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("e805"),
        a = n("3285");
      for (var r in a) "default" !== r && function (t) {
        n.d(e, t, (function () {
          return a[t]
        }))
      }(r);
      n("7fbb");
      var s, o = n("f0c5"),
        u = Object(o["a"])(a["default"], i["b"], i["c"], !1, null, "a252bc72", null, !1, i["a"], s);
      e["default"] = u.exports
    },
    c278: function (t, e, n) {},
    e805: function (t, e, n) {
      "use strict";
      var i, a = function () {
          var t = this,
            e = t.$createElement;
          t._self._c
        },
        r = [];
      n.d(e, "b", (function () {
        return a
      })), n.d(e, "c", (function () {
        return r
      })), n.d(e, "a", (function () {
        return i
      }))
    }
  },
  [
    ["0036", "common/runtime", "common/vendor"]
  ]
]);
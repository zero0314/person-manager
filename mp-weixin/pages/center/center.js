(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/center/center"], {
    "27ae": function (n, e, t) {
      "use strict";
      t.r(e);
      var c = t("664d"),
        u = t.n(c);
      for (var o in c) "default" !== o && function (n) {
        t.d(e, n, (function () {
          return c[n]
        }))
      }(o);
      e["default"] = u.a
    },
    "369e": function (n, e, t) {
      "use strict";
      var c, u = function () {
          var n = this,
            e = n.$createElement;
          n._self._c
        },
        o = [];
      t.d(e, "b", (function () {
        return u
      })), t.d(e, "c", (function () {
        return o
      })), t.d(e, "a", (function () {
        return c
      }))
    },
    "664d": function (n, e, t) {
      "use strict";
      (function (n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var c = o(t("a34a")),
          u = o(t("2971"));

        function o(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }

        function r(n, e, t, c, u, o, r) {
          try {
            var a = n[o](r),
              i = a.value
          } catch (s) {
            return void t(s)
          }
          a.done ? e(i) : Promise.resolve(i).then(c, u)
        }

        function a(n) {
          return function () {
            var e = this,
              t = arguments;
            return new Promise((function (c, u) {
              var o = n.apply(e, t);

              function a(n) {
                r(o, c, u, a, i, "next", n)
              }

              function i(n) {
                r(o, c, u, a, i, "throw", n)
              }
              a(void 0)
            }))
          }
        }
        var i = {
          data: function () {
            return {
              isH5Plus: !0,
              user: {},
              tableName: "",
              role: "",
              menuList: [],
              iconArr: ["cuIcon-same", "cuIcon-deliver", "cuIcon-evaluate", "cuIcon-shop", "cuIcon-ticket", "cuIcon-cascades", "cuIcon-discover", "cuIcon-question", "cuIcon-pic", "cuIcon-filter", "cuIcon-footprint", "cuIcon-pulldown", "cuIcon-pullup", "cuIcon-moreandroid", "cuIcon-refund", "cuIcon-qrcode", "cuIcon-remind", "cuIcon-profile", "cuIcon-home", "cuIcon-message", "cuIcon-link", "cuIcon-lock", "cuIcon-unlock", "cuIcon-vip", "cuIcon-weibo", "cuIcon-activity", "cuIcon-friendadd", "cuIcon-friendfamous", "cuIcon-friend", "cuIcon-goods", "cuIcon-selection"]
            }
          },
          computed: {
            baseUrl: function () {
              return this.$base.url
            }
          },
          onLoad: function () {
            var e = a(c.default.mark((function e() {
              var t, o, r;
              return c.default.wrap((function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return this.role = n.getStorageSync("role"), t = n.getStorageSync("nowTable"), e.next = 4, this.$api.session(t);
                  case 4:
                    o = e.sent, this.user = o.data, this.tableName = t, r = u.default.list(), this.menuList = r;
                  case 9:
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
          onShow: function () {
            var e = a(c.default.mark((function e() {
              var t, o, r;
              return c.default.wrap((function (e) {
                while (1) switch (e.prev = e.next) {
                  case 0:
                    return n.removeStorageSync("useridTag"), this.role = n.getStorageSync("role"), t = n.getStorageSync("nowTable"), e.next = 5, this.$api.session(t);
                  case 5:
                    o = e.sent, this.user = o.data, this.tableName = t, r = u.default.list(), this.menuList = r;
                  case 10:
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
          methods: {
            onPageTap: function (e) {
              n.setStorageSync("useridTag", 1), n.navigateTo({
                url: e,
                fail: function () {
                  n.switchTab({
                    url: e
                  })
                }
              })
            }
          }
        };
        e.default = i
      }).call(this, t("543d")["default"])
    },
    7755: function (n, e, t) {
      "use strict";
      var c = t("d439"),
        u = t.n(c);
      u.a
    },
    a92f: function (n, e, t) {
      "use strict";
      (function (n) {
        t("6cdc"), t("921b");
        c(t("66fd"));
        var e = c(t("d2c0"));

        function c(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(e.default)
      }).call(this, t("543d")["createPage"])
    },
    d2c0: function (n, e, t) {
      "use strict";
      t.r(e);
      var c = t("369e"),
        u = t("27ae");
      for (var o in u) "default" !== o && function (n) {
        t.d(e, n, (function () {
          return u[n]
        }))
      }(o);
      t("7755");
      var r, a = t("f0c5"),
        i = Object(a["a"])(u["default"], c["b"], c["c"], !1, null, "56ab11a2", null, !1, c["a"], r);
      e["default"] = i.exports
    },
    d439: function (n, e, t) {}
  },
  [
    ["a92f", "common/runtime", "common/vendor"]
  ]
]);
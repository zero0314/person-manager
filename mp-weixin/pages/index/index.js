(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/index"], {
    "057d": function (n, t, e) {
      "use strict";
      var i = e("b048"),
        o = e.n(i);
      o.a
    },
    8069: function (n, t, e) {
      "use strict";
      e.r(t);
      var i = e("da67"),
        o = e.n(i);
      for (var c in i) "default" !== c && function (n) {
        e.d(t, n, (function () {
          return i[n]
        }))
      }(c);
      t["default"] = o.a
    },
    b048: function (n, t, e) {},
    c068: function (n, t, e) {
      "use strict";
      var i, o = function () {
          var n = this,
            t = n.$createElement,
            e = (n._self._c, n.__map(n.menuList, (function (t, e) {
              var i = n.__map(t.frontMenu, (function (t, e) {
                var i = n.__map(t.child, (function (t, e) {
                  var i = t.menu.split("列表");
                  return {
                    $orig: n.__get_orig(t),
                    g0: i
                  }
                }));
                return {
                  $orig: n.__get_orig(t),
                  l0: i
                }
              }));
              return {
                $orig: n.__get_orig(t),
                l1: i
              }
            }))),
            i = n.__map(n.homezhaopinxinxilist, (function (t, e) {
              var i = t.zhaopinfengmian.substring(0, 4),
                o = t.zhaopinfengmian.split(",");
              return {
                $orig: n.__get_orig(t),
                g1: i,
                g2: o
              }
            }));
          n.$mp.data = Object.assign({}, {
            $root: {
              l2: e,
              l3: i
            }
          })
        },
        c = [];
      e.d(t, "b", (function () {
        return o
      })), e.d(t, "c", (function () {
        return c
      })), e.d(t, "a", (function () {
        return i
      }))
    },
    d537: function (n, t, e) {
      "use strict";
      (function (n) {
        e("6cdc"), e("921b");
        i(e("66fd"));
        var t = i(e("f75a"));

        function i(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(t.default)
      }).call(this, e("543d")["createPage"])
    },
    da67: function (n, t, e) {
      "use strict";
      (function (n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = c(e("a34a")),
          o = c(e("2971"));

        function c(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }

        function u(n, t, e, i, o, c, u) {
          try {
            var a = n[c](u),
              r = a.value
          } catch (s) {
            return void e(s)
          }
          a.done ? t(r) : Promise.resolve(r).then(i, o)
        }

        function a(n) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise((function (i, o) {
              var c = n.apply(t, e);

              function a(n) {
                u(c, i, o, a, r, "next", n)
              }

              function r(n) {
                u(c, i, o, a, r, "throw", n)
              }
              a(void 0)
            }))
          }
        }
        e("651d");
        var r = function () {
            return Promise.all([e.e("common/vendor"), e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(e.bind(null, "b704"))
          },
          s = {
            components: {
              uniIcons: r
            },
            data: function () {
              return {
                options2: {
                  effect: "flip",
                  loop: !0
                },
                options3: {
                  effect: "cube",
                  loop: !0,
                  cubeEffect: {
                    shadow: !0,
                    slideShadows: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                  }
                },
                rows: 2,
                column: 4,
                iconArr: ["cuIcon-same", "cuIcon-deliver", "cuIcon-evaluate", "cuIcon-shop", "cuIcon-ticket", "cuIcon-cascades", "cuIcon-discover", "cuIcon-question", "cuIcon-pic", "cuIcon-filter", "cuIcon-footprint", "cuIcon-pulldown", "cuIcon-pullup", "cuIcon-moreandroid", "cuIcon-refund", "cuIcon-qrcode", "cuIcon-remind", "cuIcon-profile", "cuIcon-home", "cuIcon-message", "cuIcon-link", "cuIcon-lock", "cuIcon-unlock", "cuIcon-vip", "cuIcon-weibo", "cuIcon-activity", "cuIcon-friendadd", "cuIcon-friendfamous", "cuIcon-friend", "cuIcon-goods", "cuIcon-selection"],
                role: "",
                menuList: [],
                swiperMenuList: [],
                user: {},
                tableName: "",
                swiperList: [],/*初始化，为空数组 */
                homezhaopinxinxilist: [],
                news: []
              }
            },
            computed: {
              baseUrl: function () {
                return this.$base.url
              }
            },
            onLoad: function () {
              var t = a(i.default.mark((function t() {
                var e, c, u, a = this;
                return i.default.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return this.role = n.getStorageSync("role"), e = n.getStorageSync("nowTable"), t.next = 4, this.$api.session(e);
                    case 4:
                      c = t.sent, this.user = c.data, this.tableName = e, u = o.default.list(), this.menuList = u, this.menuList.forEach((function (n, t) {
                        a.role == n.roleName && n.frontMenu.forEach((function (n, t) {
                          n.child[0].buttons.indexOf("查看") > -1 && a.swiperMenuList.push(n)
                        }))
                      }));
                    case 10:
                    case "end":
                      return t.stop()
                  }
                }), t, this)
              })));

              function e() {
                return t.apply(this, arguments)
              }
              return e
            }(),
            onShow: function () {
              var n = a(i.default.mark((function n() {
                var t, e, o, c, u, a, r, s;
                return i.default.wrap((function (n) {
                  while (1) switch (n.prev = n.next) {
                    case 0:
                      /*下面数组=e，在这调用config中page接口，查到结果放e里面
                      传的分页，当前为第一页，查询5条 */
                      return e = [], n.next = 3, this.$api.page("config", {
                        page: 1,
                        limit: 5
                      });
                    case 3:
                      for (t = n.sent, o = !0, c = !1, u = void 0, n.prev = 7, a = t.data.list[Symbol.iterator](); !(o = (r = a.next()).done); o = !0) s = r.value, s.name.indexOf("picture") >= 0 && s.value && "" != s.value && null != s.value && e.push({
                        img: s.value,
                        title: s.name
                      });
                      n.next = 15;
                      break;
                    case 11:
                      n.prev = 11, n.t0 = n["catch"](7), c = !0, u = n.t0;
                    case 15:
                      n.prev = 15, n.prev = 16, o || null == a.return || a.return();
                    case 18:
                      if (n.prev = 18, !c) {
                        n.next = 21;
                        break
                      }
                      throw u;
                    case 21:
                      return n.finish(18);
                    case 22:
                      return n.finish(15);
                    case 23:
                      /*this.swiperList = e;拿到了轮播图查询结果*/
                      return e && (this.swiperList = e), n.next = 26, 
                      /*公告信息，调用news中list接口*/
                      this.$api.list("news", {
                        /*传的分页，当前为第一页，查询6条 */
                        page: 1,
                        limit: 6
                      });
                    case 26:
                      return t = n.sent, this.news = t.data.list, n.next = 30, this.$api.list("zhaopinxinxi", {
                        page: 1,
                        limit: 6
                      });
                    case 30:
                      t = n.sent, this.homezhaopinxinxilist = t.data.list;
                    case 32:
                    case "end":
                      return n.stop()
                  }
                }), n, this, [
                  [7, 11, 15, 23],
                  [16, , 18, 22]
                ])
              })));

              function t() {
                return n.apply(this, arguments)
              }
              return t
            }(),
            methods: {
              onSwiperTap: function (n) {},
              /*公告点击查看详情，跳转到news-detail.wxml*/
              onNewsDetailTap: function (n) {
                this.$utils.jump("../news-detail/news-detail?id=".concat(n))
              },
              onDetailTap: function (n, t) {
                this.$utils.jump("../".concat(n, "/detail?id=").concat(t))
              },
              /*查看更多，跳转到对应list页面，t对应xml中的news或招聘信息*/
              onPageTap: function (t) {
                n.navigateTo({
                  url: "../".concat(t, "/list"),
                  fail: function () {
                    n.switchTab({
                      url: "../".concat(t, "/list")
                    })
                  }
                })
              },
              onPageTap2: function (t) {
                n.setStorageSync("useridTag", 0), n.navigateTo({
                  url: t,
                  fail: function () {
                    n.switchTab({
                      url: t
                    })
                  }
                })
              }
            }
          };
        t.default = s
      }).call(this, e("543d")["default"])
    },
    f75a: function (n, t, e) {
      "use strict";
      e.r(t);
      var i = e("c068"),
        o = e("8069");
      for (var c in o) "default" !== c && function (n) {
        e.d(t, n, (function () {
          return o[n]
        }))
      }(c);
      e("057d");
      var u, a = e("f0c5"),
        r = Object(a["a"])(o["default"], i["b"], i["c"], !1, null, "83ae91d0", null, !1, i["a"], u);
      t["default"] = r.exports
    }
  },
  [
    ["d537", "common/runtime", "common/vendor"]
  ]
]);
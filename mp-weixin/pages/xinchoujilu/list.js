(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/xinchoujilu/list"], {
    "05ae": function (t, e, n) {},
    "2c55": function (t, e, n) {
      "use strict";
      (function (t) {
        n("6cdc"), n("921b");
        i(n("66fd"));
        var e = i(n("3c05"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, n("543d")["createPage"])
    },
    "3c05": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("80e4"),
        s = n("db9e");
      for (var r in s) "default" !== r && function (t) {
        n.d(e, t, (function () {
          return s[t]
        }))
      }(r);
      n("cd06");
      var u, a = n("f0c5"),
        c = Object(a["a"])(s["default"], i["b"], i["c"], !1, null, "73a10813", null, !1, i["a"], u);
      e["default"] = c.exports
    },
    "77a9": function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = s(n("a34a"));

        function s(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function r(t, e, n, i, s, r, u) {
          try {
            var a = t[r](u),
              c = a.value
          } catch (o) {
            return void n(o)
          }
          a.done ? e(c) : Promise.resolve(c).then(i, s)
        }

        function u(t) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise((function (i, s) {
              var u = t.apply(e, n);

              function a(t) {
                r(u, i, s, a, c, "next", t)
              }

              function c(t) {
                r(u, i, s, a, c, "throw", t)
              }
              a(void 0)
            }))
          }
        }
        var a = {
          data: function () {
            return {
              btnColor: ["#409eff", "#67c23a", "#909399", "#e6a23c", "#f56c6c", "#356c6c", "#351c6c", "#f093a9", "#a7c23a", "#104eff", "#10441f", "#a21233", "#503319"],
              queryList: [{
                queryName: "月份"
              }, {
                queryName: "员工姓名"
              }, {
                queryName: "部门"
              }],
              queryIndex: 0,
              list: [],
              lists: [],
              userid: "",
              mescroll: null,
              downOption: {
                auto: !1
              },
              upOption: {
                noMoreSize: 5,
                textNoMore: "~ 没有更多了 ~"
              },
              hasNext: !0,
              searchForm: {},
              CustomBar: "0"
            }
          },
          computed: {
            baseUrl: function () {
              return this.$base.url
            }
          },
          onShow: function () {
            var t = u(i.default.mark((function t() {
              return i.default.wrap((function (t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    this.btnColor = this.btnColor.sort((function () {
                      return .5 - Math.random()
                    })), this.hasNext = !0, this.mescroll && this.mescroll.resetUpScroll();
                  case 3:
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
          onLoad: function (t) {
            t.userid ? this.userid = t.userid : this.userid = "", this.hasNext = !0, this.mescroll && this.mescroll.resetUpScroll()
          },
          methods: {
            priceChange: function (t) {
              return Number(t).toFixed(2)
            },
            preHttp: function (t) {
              return t && "http" == t.substr(0, 4)
            },
            queryChange: function (t) {
              this.queryIndex = t.detail.value, this.searchForm.yuefen = "", this.searchForm.yuangongxingming = "", this.searchForm.bumen = ""
            },
            mescrollInit: function (t) {
              this.mescroll = t
            },
            downCallback: function (t) {
              this.hasNext = !0, t.resetUpScroll()
            },
            upCallback: function () {
              var t = u(i.default.mark((function t(e) {
                var n, s, r, u, a;
                return i.default.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      if (n = {
                          page: e.num,
                          limit: e.size
                        }, this.searchForm.yuefen && (n["yuefen"] = "%" + this.searchForm.yuefen + "%"), 
                       /* this.searchForm.yuangongxingming && (n["yuangongxingming"] = "%" + this.searchForm.yuangongxingming + "%"), this.searchForm.bumen && (n["bumen"] = "%" + this.searchForm.bumen + "%"),*/
                        s = {}, !this.userid) {
                        t.next = 11;
                        break
                      }
                      return t.next = 8, this.$api.page("xinchoujilu", n);
                    case 8:
                      s = t.sent, t.next = 14;
                      break;
                    case 11:
                      return t.next = 13, this.$api.list("xinchoujilu", n);
                    case 13:
                      s = t.sent;
                    case 14:
                      for (1 == e.num && (this.list = []), this.list = this.list.concat(s.data.list), r = Math.ceil(this.list.length / 6), u = [], a = 0; a < r; a++) u[a] = this.list.slice(6 * a, 6 * (a + 1));
                      this.lists = u, 0 == s.data.list.length && (this.hasNext = !1), e.endSuccess(e.size, this.hasNext);
                    case 22:
                    case "end":
                      return t.stop()
                  }
                }), t, this)
              })));

              function e(e) {
                return t.apply(this, arguments)
              }
              return e
            }(),
            onDetailTap: function (e) {
              t.setStorageSync("useridTag", this.userid), this.$utils.jump("./detail?id=".concat(e.id, "&userid=") + this.userid)
            },
            onUpdateTap: function (e) {
              t.setStorageSync("useridTag", this.userid), this.$utils.jump("./add-or-update?id=".concat(e))
            },
            onAddTap: function () {
              t.setStorageSync("useridTag", this.userid), this.$utils.jump("./add-or-update")
            },
            onDeleteTap: function (e) {
              var n = this;
              t.showModal({
                title: "提示",
                content: "是否确认删除",
                success: function () {
                  var t = u(i.default.mark((function t(s) {
                    return i.default.wrap((function (t) {
                      while (1) switch (t.prev = t.next) {
                        case 0:
                          if (!s.confirm) {
                            t.next = 5;
                            break
                          }
                          return t.next = 3, n.$api.del("xinchoujilu", JSON.stringify([e]));
                        case 3:
                          n.hasNext = !0, n.mescroll.resetUpScroll();
                        case 5:
                        case "end":
                          return t.stop()
                      }
                    }), t)
                  })));

                  function s(e) {
                    return t.apply(this, arguments)
                  }
                  return s
                }()
              })
            },
            search: function () {
              var t = u(i.default.mark((function t() {
                var e, n, s, r, u;
                return i.default.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      /*传参为月份，userid对应登陆用户，即只可查询到自己的*/
                      if (this.mescroll.num = 1, e = {
                          page: this.mescroll.num,
                          limit: this.mescroll.size
                        }, this.searchForm.yuefen && (e["yuefen"] = "%" + this.searchForm.yuefen + "%"),
                         /*this.searchForm.yuangongxingming && (e["yuangongxingming"] = "%" + this.searchForm.yuangongxingming + "%"), 
                        this.searchForm.bumen && (e["bumen"] = "%" + this.searchForm.bumen + "%"),*/ n = {}, !this.userid) {
                        t.next = 12;
                        break
                      }
                      /*调用薪酬page接口*/
                      return t.next = 9, this.$api.page("xinchoujilu", e);
                    case 9:
                      n = t.sent, t.next = 15;
                      break;
                    case 12:
                      return t.next = 14, this.$api.list("xinchoujilu", e);
                    case 14:
                      n = t.sent;
                    case 15:
                      for (1 == this.mescroll.num && (this.list = []), this.list = this.list.concat(n.data.list), s = Math.ceil(this.list.length / 6), r = [], u = 0; u < s; u++) r[u] = this.list.slice(6 * u, 6 * (u + 1));
                      this.lists = r, 0 == n.data.list.length && (this.hasNext = !1), this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
                    case 23:
                    case "end":
                      return t.stop()
                  }
                }), t, this)
              })));

              function e() {
                return t.apply(this, arguments)
              }
              return e
            }()
          }
        };
        e.default = a
      }).call(this, n("543d")["default"])
    },
    "80e4": function (t, e, n) {
      "use strict";
      var i = {
          "mescroll-uni": () => Promise.all([n.e("common/vendor"), n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null, "f05e"))
        },
        s = function () {
          var t = this,
            e = t.$createElement,
            n = (t._self._c, t.isAuth("xinchoujilu", "修改")),
            i = t.isAuthFront("xinchoujilu", "修改"),
            s = t.isAuth("xinchoujilu", "删除"),
            r = t.isAuthFront("xinchoujilu", "删除"),
            u = t.__map(t.list, (function (e, n) {
              var i = t.preHttp(e.tupian),
                s = e.tupian.split(","),
                r = e.tupian.split(",");
              return {
                $orig: t.__get_orig(e),
                m0: i,
                g0: s,
                g1: r
              }
            })),
            a = t.isAuth("xinchoujilu", "新增"),
            c = t.isAuthFront("xinchoujilu", "新增");
          t.$mp.data = Object.assign({}, {
            $root: {
              m1: n,
              m2: i,
              m3: s,
              m4: r,
              l0: u,
              m5: a,
              m6: c
            }
          })
        },
        r = [];
      n.d(e, "b", (function () {
        return s
      })), n.d(e, "c", (function () {
        return r
      })), n.d(e, "a", (function () {
        return i
      }))
    },
    cd06: function (t, e, n) {
      "use strict";
      var i = n("05ae"),
        s = n.n(i);
      s.a
    },
    db9e: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("77a9"),
        s = n.n(i);
      for (var r in i) "default" !== r && function (t) {
        n.d(e, t, (function () {
          return i[t]
        }))
      }(r);
      e["default"] = s.a
    }
  },
  [
    ["2c55", "common/runtime", "common/vendor"]
  ]
]);
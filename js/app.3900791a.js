(function (e) {
  function t(t) {
    for (
      var n, r, o = t[0], j = t[1], b = t[2], u = 0, f = [];
      u < o.length;
      u++
    )
      (r = o[u]),
        Object.prototype.hasOwnProperty.call(c, r) && c[r] && f.push(c[r][0]),
        (c[r] = 0);
    for (n in j) Object.prototype.hasOwnProperty.call(j, n) && (e[n] = j[n]);
    d && d(t);
    while (f.length) f.shift()();
    return a.push.apply(a, b || []), s();
  }
  function s() {
    for (var e, t = 0; t < a.length; t++) {
      for (var s = a[t], n = !0, o = 1; o < s.length; o++) {
        var j = s[o];
        0 !== c[j] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = r((r.s = s[0]))));
    }
    return e;
  }
  var n = {},
    c = { app: 0 },
    a = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var s = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function (e, t, s) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (r.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            s,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return s;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    j = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var b = 0; b < o.length; b++) t(o[b]);
  var d = j;
  a.push([0, "chunk-vendors"]), s();
})({
  0: function (e, t, s) {
    e.exports = s("56d7");
  },
  1225: function (e, t, s) {
    "use strict";
    s("b1ab");
  },
  4678: function (e, t, s) {
    var n = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function c(e) {
      var t = a(e);
      return s(t);
    }
    function a(e) {
      if (!s.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return n[e];
    }
    (c.keys = function () {
      return Object.keys(n);
    }),
      (c.resolve = a),
      (e.exports = c),
      (c.id = "4678");
  },
  "56d7": function (e, t, s) {
    "use strict";
    s.r(t);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var n = s("7a23");
    function c(e, t, s, c, a, r) {
      var o = Object(n["resolveComponent"])("Wall");
      return Object(n["openBlock"])(), Object(n["createBlock"])(o);
    }
    var a = function (e) {
        return (
          Object(n["pushScopeId"])("data-v-361f041c"),
          (e = e()),
          Object(n["popScopeId"])(),
          e
        );
      },
      r = { class: "wall" },
      o = a(function () {
        return Object(n["createElementVNode"])(
          "div",
          { class: "welcome" },
          [
            Object(n["createElementVNode"])("h1", null, "A wall"),
            Object(n["createElementVNode"])(
              "p",
              null,
              "Here you can write anything!"
            ),
          ],
          -1
        );
      }),
      j = { id: "no-posts" },
      b = { key: 0 };
    function d(e, t, s, c, a, d) {
      var u = Object(n["resolveComponent"])("PostForm"),
        f = Object(n["resolveComponent"])("Posts");
      return (
        Object(n["openBlock"])(),
        Object(n["createElementBlock"])("div", r, [
          o,
          Object(n["createVNode"])(u, {
            onCreatePost:
              t[0] ||
              (t[0] = function (e) {
                return d.createPost(e);
              }),
          }),
          Object(n["createVNode"])(f, { posts: a.posts }, null, 8, ["posts"]),
          Object(n["createElementVNode"])("div", j, [
            a.posts.length
              ? Object(n["createCommentVNode"])("", !0)
              : (Object(n["openBlock"])(),
                Object(n["createElementBlock"])(
                  "p",
                  b,
                  "There're no posts yet!"
                )),
          ]),
        ])
      );
    }
    var u = s("1da1"),
      f = (s("96cf"), { class: "posts" });
    function l(e, t, s, c, a, r) {
      var o = Object(n["resolveComponent"])("Post");
      return (
        Object(n["openBlock"])(),
        Object(n["createElementBlock"])("div", f, [
          (Object(n["openBlock"])(!0),
          Object(n["createElementBlock"])(
            n["Fragment"],
            null,
            Object(n["renderList"])(e.posts, function (e, t) {
              return (
                Object(n["openBlock"])(),
                Object(n["createElementBlock"])(
                  "div",
                  { class: "post", key: t },
                  [Object(n["createVNode"])(o, { post: e }, null, 8, ["post"])]
                )
              );
            }),
            128
          )),
        ])
      );
    }
    var i = { class: "post" },
      p = { class: "date" },
      m = { class: "username" },
      v = { class: "text" };
    function h(e, t, s, c, a, r) {
      return (
        Object(n["openBlock"])(),
        Object(n["createElementBlock"])("div", i, [
          Object(n["createElementVNode"])(
            "div",
            p,
            Object(n["toDisplayString"])(
              e.moment(e.post.date, "DD.MM.YYYY hh:mm")
            ),
            1
          ),
          Object(n["createElementVNode"])(
            "div",
            m,
            Object(n["toDisplayString"])(e.post.username),
            1
          ),
          Object(n["createElementVNode"])(
            "div",
            v,
            Object(n["toDisplayString"])(e.post.message),
            1
          ),
        ])
      );
    }
    var O = s("a6f4"),
      k = s("c1df"),
      g = s.n(k),
      y = Object(O["a"])({
        props: { post: Object },
        methods: {
          moment: function (e, t) {
            return g()(e).format(t);
          },
        },
      }),
      w = (s("1225"), s("6b0d")),
      x = s.n(w);
    const z = x()(y, [
      ["render", h],
      ["__scopeId", "data-v-2ebc56be"],
    ]);
    var E = z,
      P = Object(O["a"])({ props: { posts: Array }, components: { Post: E } });
    const N = x()(P, [["render", l]]);
    var V = N,
      B = function (e) {
        return (
          Object(n["pushScopeId"])("data-v-5d28003a"),
          (e = e()),
          Object(n["popScopeId"])(),
          e
        );
      },
      S = { class: "form-wrapper" },
      _ = { class: "nickname" },
      D = { class: "text" },
      M = B(function () {
        return Object(n["createElementVNode"])(
          "input",
          { type: "submit", class: "submit-button", value: "Submit" },
          null,
          -1
        );
      });
    function C(e, t, s, c, a, r) {
      return (
        Object(n["openBlock"])(),
        Object(n["createElementBlock"])("div", S, [
          Object(n["createElementVNode"])(
            "form",
            {
              onSubmit:
                t[2] ||
                (t[2] = Object(n["withModifiers"])(
                  function (t) {
                    return e.createPost();
                  },
                  ["prevent"]
                )),
            },
            [
              Object(n["createElementVNode"])("div", _, [
                Object(n["withDirectives"])(
                  Object(n["createElementVNode"])(
                    "input",
                    {
                      "onUpdate:modelValue":
                        t[0] ||
                        (t[0] = function (t) {
                          return (e.username = t);
                        }),
                      type: "text",
                      required: "",
                      id: "username",
                      placeholder: "Username",
                    },
                    null,
                    512
                  ),
                  [[n["vModelText"], e.username]]
                ),
              ]),
              Object(n["createElementVNode"])("div", D, [
                Object(n["withDirectives"])(
                  Object(n["createElementVNode"])(
                    "textarea",
                    {
                      "onUpdate:modelValue":
                        t[1] ||
                        (t[1] = function (t) {
                          return (e.message = t);
                        }),
                      type: "text",
                      required: "",
                      id: "message",
                      placeholder: "Enter your message here...",
                    },
                    null,
                    512
                  ),
                  [[n["vModelText"], e.message]]
                ),
              ]),
              M,
            ],
            32
          ),
        ])
      );
    }
    var I = Object(O["a"])({
      data: function () {
        return { username: "", message: "" };
      },
      methods: {
        createPost: function () {
          this.$emit("createPost", {
            username: this.username,
            message: this.message,
            date: new Date(),
          });
        },
      },
    });
    s("ccdb");
    const T = x()(I, [
      ["render", C],
      ["__scopeId", "data-v-5d28003a"],
    ]);
    var U = T,
      q = s("bc3a"),
      F = s.n(q),
      R = {
        components: { Posts: V, PostForm: U },
        data: function () {
          return { posts: [] };
        },
        mounted: function () {
          var e = this;
          return Object(u["a"])(
            regeneratorRuntime.mark(function t() {
              var s;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        F.a.get("https://rocky-sands-62747.herokuapp.com/posts")
                      );
                    case 2:
                      (s = t.sent), (e.posts = s.data.results);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        methods: {
          createPost: function (e) {
            var t = this;
            return Object(u["a"])(
              regeneratorRuntime.mark(function s() {
                return regeneratorRuntime.wrap(function (s) {
                  while (1)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (
                          t.posts.unshift(e),
                          (s.next = 3),
                          F.a.post(
                            "https://rocky-sands-62747.herokuapp.com/posts",
                            e
                          )
                        );
                      case 3:
                      case "end":
                        return s.stop();
                    }
                }, s);
              })
            )();
          },
        },
      };
    s("82c5");
    const Y = x()(R, [
      ["render", d],
      ["__scopeId", "data-v-361f041c"],
    ]);
    var A = Y,
      J = { components: { Wall: A } };
    s("fc11");
    const L = x()(J, [["render", c]]);
    var W = L,
      H = s("a18c"),
      $ = s.n(H),
      G = s("130e"),
      K = Object(n["createApp"])(W).use($.a);
    K.use(G["a"], F.a),
      K.provide("axios", K.config.globalProperties.axios),
      K.mount("#app");
  },
  "62c8": function (e, t, s) {},
  "82c5": function (e, t, s) {
    "use strict";
    s("aa18");
  },
  "9bf4": function (e, t, s) {},
  a18c: function (e, t) {},
  aa18: function (e, t, s) {},
  b1ab: function (e, t, s) {},
  ccdb: function (e, t, s) {
    "use strict";
    s("62c8");
  },
  fc11: function (e, t, s) {
    "use strict";
    s("9bf4");
  },
});
//# sourceMappingURL=app.3900791a.js.map

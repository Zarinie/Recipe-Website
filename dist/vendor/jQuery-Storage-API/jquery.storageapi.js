"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
}(function (e) {
  function t() {
    var t,
        r,
        i,
        o = this._type,
        n = arguments.length,
        s = window[o],
        a = arguments,
        l = a[0];if (n < 1) throw new Error("Minimum 1 argument must be given");if (e.isArray(l)) {
      r = {};for (var f in l) {
        t = l[f];try {
          r[t] = JSON.parse(s.getItem(t));
        } catch (e) {
          r[t] = s.getItem(t);
        }
      }return r;
    }if (1 != n) {
      try {
        r = JSON.parse(s.getItem(l));
      } catch (e) {
        throw new ReferenceError(l + " is not defined in this storage");
      }for (var f = 1; f < n - 1; f++) {
        if (r = r[a[f]], void 0 === r) throw new ReferenceError([].slice.call(a, 1, f + 1).join(".") + " is not defined in this storage");
      }if (e.isArray(a[f])) {
        i = r, r = {};for (var c in a[f]) {
          r[a[f][c]] = i[a[f][c]];
        }return r;
      }return r[a[f]];
    }try {
      return JSON.parse(s.getItem(l));
    } catch (e) {
      return s.getItem(l);
    }
  }function r() {
    var t,
        r,
        i,
        o = this._type,
        n = arguments.length,
        s = window[o],
        a = arguments,
        l = a[0],
        f = a[1],
        c = isNaN(f) ? {} : [];if (n < 1 || !e.isPlainObject(l) && n < 2) throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if (e.isPlainObject(l)) {
      for (var h in l) {
        t = l[h], e.isPlainObject(t) || this.alwaysUseJson ? s.setItem(h, JSON.stringify(t)) : s.setItem(h, t);
      }return l;
    }if (2 == n) return "object" == (typeof f === "undefined" ? "undefined" : _typeof(f)) || this.alwaysUseJson ? s.setItem(l, JSON.stringify(f)) : s.setItem(l, f), f;try {
      i = s.getItem(l), null != i && (c = JSON.parse(i));
    } catch (e) {}i = c;for (var h = 1; h < n - 2; h++) {
      t = a[h], r = isNaN(a[h + 1]) ? "object" : "array", (!i[t] || "object" == r && !e.isPlainObject(i[t]) || "array" == r && !e.isArray(i[t])) && ("array" == r ? i[t] = [] : i[t] = {}), i = i[t];
    }return i[a[h]] = a[h + 1], s.setItem(l, JSON.stringify(c)), c;
  }function i() {
    var t,
        r,
        i = this._type,
        o = arguments.length,
        n = window[i],
        s = arguments,
        a = s[0];if (o < 1) throw new Error("Minimum 1 argument must be given");if (e.isArray(a)) {
      for (var l in a) {
        n.removeItem(a[l]);
      }return !0;
    }if (1 == o) return n.removeItem(a), !0;try {
      t = r = JSON.parse(n.getItem(a));
    } catch (e) {
      throw new ReferenceError(a + " is not defined in this storage");
    }for (var l = 1; l < o - 1; l++) {
      if (r = r[s[l]], void 0 === r) throw new ReferenceError([].slice.call(s, 1, l).join(".") + " is not defined in this storage");
    }if (e.isArray(s[l])) for (var f in s[l]) {
      delete r[s[l][f]];
    } else delete r[s[l]];return n.setItem(a, JSON.stringify(t)), !0;
  }function o(t) {
    var r = a.call(this);for (var o in r) {
      i.call(this, r[o]);
    }if (t) for (var o in e.namespaceStorages) {
      l(o);
    }
  }function n() {
    var r = arguments.length,
        i = arguments,
        o = i[0];if (0 == r) return 0 == a.call(this).length;if (e.isArray(o)) {
      for (var s = 0; s < o.length; s++) {
        if (!n.call(this, o[s])) return !1;
      }return !0;
    }try {
      var l = t.apply(this, arguments);e.isArray(i[r - 1]) || (l = { totest: l });for (var s in l) {
        if (!(e.isPlainObject(l[s]) && e.isEmptyObject(l[s]) || e.isArray(l[s]) && !l[s].length) && l[s]) return !1;
      }return !0;
    } catch (e) {
      return !0;
    }
  }function s() {
    var r = arguments.length,
        i = arguments,
        o = i[0];if (r < 1) throw new Error("Minimum 1 argument must be given");if (e.isArray(o)) {
      for (var n = 0; n < o.length; n++) {
        if (!s.call(this, o[n])) return !1;
      }return !0;
    }try {
      var a = t.apply(this, arguments);e.isArray(i[r - 1]) || (a = { totest: a });for (var n in a) {
        if (void 0 === a[n] || null === a[n]) return !1;
      }return !0;
    } catch (e) {
      return !1;
    }
  }function a() {
    var e = this._type,
        r = arguments.length,
        i = window[e],
        o = arguments,
        n = [],
        s = {};if (s = r > 0 ? t.apply(this, o) : i, s && s._cookie) for (var a in Cookies.get()) {
      "" != a && n.push(a.replace(s._prefix, ""));
    } else for (var l in s) {
      s.hasOwnProperty(l) && n.push(l);
    }return n;
  }function l(t) {
    if (!t || "string" != typeof t) throw new Error("First parameter must be a string");u ? (window.localStorage.getItem(t) || window.localStorage.setItem(t, "{}"), window.sessionStorage.getItem(t) || window.sessionStorage.setItem(t, "{}")) : (window.localCookieStorage.getItem(t) || window.localCookieStorage.setItem(t, "{}"), window.sessionCookieStorage.getItem(t) || window.sessionCookieStorage.setItem(t, "{}"));var r = { localStorage: e.extend({}, e.localStorage, { _ns: t }), sessionStorage: e.extend({}, e.sessionStorage, { _ns: t }) };return "object" == (typeof Cookies === "undefined" ? "undefined" : _typeof(Cookies)) && (window.cookieStorage.getItem(t) || window.cookieStorage.setItem(t, "{}"), r.cookieStorage = e.extend({}, e.cookieStorage, { _ns: t })), e.namespaceStorages[t] = r, r;
  }function f(e) {
    var t = "jsapi";try {
      return !!window[e] && (window[e].setItem(t, t), window[e].removeItem(t), !0);
    } catch (e) {
      return !1;
    }
  }var c = "ls_",
      h = "ss_",
      u = f("localStorage"),
      g = { _type: "", _ns: "", _callMethod: function _callMethod(e, t) {
      var r = [],
          t = Array.prototype.slice.call(t),
          i = t[0];return this._ns && r.push(this._ns), "string" == typeof i && i.indexOf(".") !== -1 && (t.shift(), [].unshift.apply(t, i.split("."))), [].push.apply(r, t), e.apply(this, r);
    }, alwaysUseJson: !1, get: function get() {
      return this._callMethod(t, arguments);
    }, set: function set() {
      var t = arguments.length,
          i = arguments,
          o = i[0];if (t < 1 || !e.isPlainObject(o) && t < 2) throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if (e.isPlainObject(o) && this._ns) {
        for (var n in o) {
          this._callMethod(r, [n, o[n]]);
        }return o;
      }var s = this._callMethod(r, i);return this._ns ? s[o.split(".")[0]] : s;
    }, remove: function remove() {
      if (arguments.length < 1) throw new Error("Minimum 1 argument must be given");return this._callMethod(i, arguments);
    }, removeAll: function removeAll(e) {
      return this._ns ? (this._callMethod(r, [{}]), !0) : this._callMethod(o, [e]);
    }, isEmpty: function isEmpty() {
      return this._callMethod(n, arguments);
    }, isSet: function isSet() {
      if (arguments.length < 1) throw new Error("Minimum 1 argument must be given");return this._callMethod(s, arguments);
    }, keys: function keys() {
      return this._callMethod(a, arguments);
    } };if ("object" == (typeof Cookies === "undefined" ? "undefined" : _typeof(Cookies))) {
    window.name || (window.name = Math.floor(1e8 * Math.random()));var m = { _cookie: !0, _prefix: "", _expires: null, _path: null, _domain: null, setItem: function setItem(e, t) {
        Cookies.set(this._prefix + e, t, { expires: this._expires, path: this._path, domain: this._domain });
      }, getItem: function getItem(e) {
        return Cookies.get(this._prefix + e);
      }, removeItem: function removeItem(e) {
        return Cookies.remove(this._prefix + e, { path: this._path });
      }, clear: function clear() {
        for (var t in Cookies.get()) {
          "" != t && (!this._prefix && t.indexOf(c) === -1 && t.indexOf(h) === -1 || this._prefix && 0 === t.indexOf(this._prefix)) && e.removeCookie(t);
        }
      }, setExpires: function setExpires(e) {
        return this._expires = e, this;
      }, setPath: function setPath(e) {
        return this._path = e, this;
      }, setDomain: function setDomain(e) {
        return this._domain = e, this;
      }, setConf: function setConf(e) {
        return e.path && (this._path = e.path), e.domain && (this._domain = e.domain), e.expires && (this._expires = e.expires), this;
      }, setDefaultConf: function setDefaultConf() {
        this._path = this._domain = this._expires = null;
      } };u || (window.localCookieStorage = e.extend({}, m, { _prefix: c, _expires: 3650 }), window.sessionCookieStorage = e.extend({}, m, { _prefix: h + window.name + "_" })), window.cookieStorage = e.extend({}, m), e.cookieStorage = e.extend({}, g, { _type: "cookieStorage", setExpires: function setExpires(e) {
        return window.cookieStorage.setExpires(e), this;
      }, setPath: function setPath(e) {
        return window.cookieStorage.setPath(e), this;
      }, setDomain: function setDomain(e) {
        return window.cookieStorage.setDomain(e), this;
      }, setConf: function setConf(e) {
        return window.cookieStorage.setConf(e), this;
      }, setDefaultConf: function setDefaultConf() {
        return window.cookieStorage.setDefaultConf(), this;
      } });
  }e.initNamespaceStorage = function (e) {
    return l(e);
  }, u ? (e.localStorage = e.extend({}, g, { _type: "localStorage" }), e.sessionStorage = e.extend({}, g, { _type: "sessionStorage" })) : (e.localStorage = e.extend({}, g, { _type: "localCookieStorage" }), e.sessionStorage = e.extend({}, g, { _type: "sessionCookieStorage" })), e.namespaceStorages = {}, e.removeAllStorages = function (t) {
    e.localStorage.removeAll(t), e.sessionStorage.removeAll(t), e.cookieStorage && e.cookieStorage.removeAll(t), t || (e.namespaceStorages = {});
  }, e.alwaysUseJsonInStorage = function (t) {
    g.alwaysUseJson = t, e.localStorage.alwaysUseJson = t, e.sessionStorage.alwaysUseJson = t, e.cookieStorage && (e.cookieStorage.alwaysUseJson = t);
  };
});
//# sourceMappingURL=jquery.storageapi.js.map
(() => {
  var o = {
      919: (o) => {
        o.exports = () => (console.log("Shivam"), console.log("Singh"), 8853);
      },
    },
    r = {};
  function e(n) {
    var s = r[n];
    if (void 0 !== s) return s.exports;
    var t = (r[n] = { exports: {} });
    return o[n](t, t.exports, e), t.exports;
  }
  (() => {
    const o = e(919)();
    console.log(o);
  })();
})();

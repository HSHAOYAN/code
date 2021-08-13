<template>
  <div id="app">
    <meta name="referrer" content="no-referrer">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<script>
let htmlwidth =
  document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName("html")[0];
htmlDom.style.fontSize = htmlwidth / 20 + "px";
</script>
<script>
(function (doc, win) {
  var docEl = win.document.documentElement;
  var resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  var refreshRem = function () {
    var clientWidth =
      win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
    if (!clientWidth) return;
    var fz;
    var width = clientWidth;
    fz = (16 * width) / 375;
    docEl.style.fontSize = fz + "px";
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener("DOMContentLoaded", refreshRem, false);
  refreshRem();
})(document, window);
</script>


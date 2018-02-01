// ==UserScript==
// @name         Questionor Hotfix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Some temporary hotfix for Questionor
// @author       yspjack
// @match        https://questionor.cn/problemsets/*/practice
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';
    // Fix bug: failed to render Mathjax
    MathJax.Hub.setRenderer("SVG", MathJax.Hub)
    function renderMath() {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub])();
        setTimeout(renderMath, 1000);
    }
    renderMath();
    MathJax.Hub.Rerender();
})();

function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("8zd4h");const l=document.querySelector(".feedback-form"),[i,d]=l;function f(){return{email:i.value,message:d.value}}l.addEventListener("input",e(a)((function(){const e=f();localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),l.addEventListener("submit",(function(e){e.preventDefault();const t=f();console.log(t),localStorage.removeItem("feedback-form-state"),l.reset()})),window.addEventListener("load",(function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(i.value=e.email,d.value=e.message)}));
//# sourceMappingURL=03-feedback.ac796230.js.map

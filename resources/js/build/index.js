(()=>{function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,o){if(t){if("string"==typeof t)return e(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,o):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function o(t,e){localStorage.setItem(t,e)}document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("nav-mobile__menu-icon"),e=document.getElementById("nav-mobile__theme-icon"),o=document.querySelector(".nav-mobile__menu");e.addEventListener("click",(function(){document.getElementById("nav-mobile__theme-list").classList.toggle("show")})),t.addEventListener("click",(function(e){t.classList.toggle("open"),o.classList.toggle("open_modal")})),new Swiper(".swiper-container",{spaceBetween:30,centeredSlides:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),document.querySelectorAll(".nav-desktop .btn, .nav-mobile__menu .btn").forEach((function(e,n,a){e.addEventListener("click",(function(){document.querySelectorAll("section[data-type]").forEach((function(t){t.classList.toggle("show",!1)})),a.forEach((function(t){if(t.dataset.type===e.dataset.type){var o=document.querySelector('section[data-type="'.concat(e.dataset.type,'"]'));o.classList.toggle("show",!0),o.scrollTo({top:0,behavior:"smooth"}),t.classList.toggle("active",!0)}else t.classList.toggle("active",!1)})),window.innerWidth<1025&&(o.classList.toggle("open_modal"),t.classList.toggle("open"))}))}))})),t(document.querySelectorAll(".btn-wrapper .btn")).forEach((function(t){t.addEventListener("click",(function(){var e=document.querySelectorAll(".tips-item");Array.from(e).forEach((function(e){"all"!==t.id&&t.id!==e.dataset.type?e.classList.toggle("hide",!0):e.classList.toggle("hide",!1)}))}))}));var n,a,c,i=document.querySelectorAll(".theme-toggle__item");n=localStorage.getItem("theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",c=n||a,document.body.className="",document.body.classList.add(c),document.querySelectorAll('button[data-type="'.concat(c,'"]')).forEach((function(t){t.classList.add("active")})),t(i).forEach((function(e){e.addEventListener("click",(function(){var n=e.dataset.type;return"dark"===n?(t(i).forEach((function(t){"dark"===t.dataset.type?t.classList.toggle("active",!0):t.classList.toggle("active",!1)})),document.body.className="",document.body.classList.add(n),void o("theme",n)):"light"===n?(t(i).forEach((function(t){"light"===t.dataset.type?t.classList.toggle("active",!0):t.classList.toggle("active",!1)})),document.body.className="",document.body.classList.add(n),void o("theme",n)):"custom"===n?(t(i).forEach((function(t){"custom"===t.dataset.type?t.classList.toggle("active",!0):t.classList.toggle("active",!1)})),document.body.className="",document.body.classList.add(n),void o("theme",n)):void 0}))}))})();
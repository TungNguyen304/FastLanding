function reuseActive(e,n){document.querySelectorAll(e).forEach(e=>{const o=e.querySelectorAll("ul li a");o.forEach(t=>{t.onclick=e=>{e.preventDefault(),o.forEach(e=>{e.classList.remove(n)}),t.classList.add(n)}})})}function handleActiveNavItem(){reuseActive(".header__nav","active"),reuseActive(".nav .nav__list","active2"),reuseActive(".wrap_menu__mobi .nav__list","nav__active")}function handleShowMenuMobi(){var e=document.querySelector(".header__menu");const t=document.querySelector(".menu__mobi"),o=document.querySelector(".wrap_menu__mobi");var n=document.querySelectorAll(".wrap_menu__mobi .nav__list ul div img")[1];e&&(e.onclick=()=>{t.style.display="block",t.style.animation="showUp 1s",o.style.animation="growthUp 1s",o.style.top="0px"}),n&&(n.onclick=()=>{t.style.animation="showDown 1s",o.style.top="100%",o.style.animation="growthDown 1s",setTimeout(()=>{t.style.display="none"},600)}),o.onclick=e=>{e.stopPropagation()},t.onclick=()=>{t.style.animation="showDown 1s",o.style.top="100%",o.style.animation="growthDown 1s",setTimeout(()=>{t.style.display="none"},600)}}function slideUp(){document.querySelector(".surf").onclick=()=>{$("html, body").animate({scrollTop:0},"100")}}$(".header__news-list").slick(),handleActiveNavItem(),handleShowMenuMobi(),slideUp();
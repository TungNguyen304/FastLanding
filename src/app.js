$(".header__news-list").slick();

function reuseActive(el, cl) {
  const nav__list = document.querySelectorAll(el);
  nav__list.forEach((item) => {
    const list = item.querySelectorAll("ul li a");
    list.forEach((nav) => {
      nav.onclick = (e) => {
        e.preventDefault();
        list.forEach((nav2) => {
          nav2.classList.remove(cl);
        });
        nav.classList.add(cl);
      };
    });
  });
}

function handleActiveNavItem() {
  reuseActive(".header__nav", "active");
  reuseActive(".nav .nav__list", "active2");
  reuseActive(".wrap_menu__mobi .nav__list", "nav__active");
}

function handleShowMenuMobi() {
  const menuIcon = document.querySelector(".header__menu");
  const menu__mobi = document.querySelector(".menu__mobi");
  const wrap_menu__mobi = document.querySelector(".wrap_menu__mobi");
  const close = document.querySelectorAll(
    ".wrap_menu__mobi .mobi_top div img"
  )[1];
  if (menuIcon) {
    menuIcon.onclick = () => {
      menu__mobi.style.display = "block";
      menu__mobi.style.animation = "showUp 1s";
      wrap_menu__mobi.style.animation = "growthUp 1s";
      wrap_menu__mobi.style.top = "0px";
    };
  }
  if (close)
    close.onclick = () => {
      menu__mobi.style.animation = "showDown 1s";
      wrap_menu__mobi.style.top = "100%";
      wrap_menu__mobi.style.animation = "growthDown 1s";
      setTimeout(() => {
        menu__mobi.style.display = "none";
      }, 600);
    };

  wrap_menu__mobi.onclick = (e) => {
    e.stopPropagation();
  };

  menu__mobi.onclick = () => {
    menu__mobi.style.animation = "showDown 1s";
    wrap_menu__mobi.style.top = "100%";
    wrap_menu__mobi.style.animation = "growthDown 1s";
    setTimeout(() => {
      menu__mobi.style.display = "none";
    }, 600);
  };
}

function slideUp() {
  const surf = document.querySelector(".surf");
  surf.onclick = () => {
    $("html, body").animate({ scrollTop: 0 }, "100");
  };
}

handleActiveNavItem();
handleShowMenuMobi();
slideUp();

document.addEventListener("DOMContentLoaded", () => {
    const mobileNavToggleBtn = document.getElementById("nav-mobile__menu-icon");
    const mobileThemeToggleBtn = document.getElementById(
        "nav-mobile__theme-icon"
    );
    const mobileMenu = document.querySelector(".nav-mobile__menu");
    
    // add the current year
    // const currentYearHolder = document.getElementById('year')

    // // current year at the bootom of the page
    // const currentYear = new Date().getFullYear()
    // currentYearHolder.innerText = `${currentYear}`;

    // toggle theme in mobile view
    mobileThemeToggleBtn.addEventListener("click", () => {
        document
            .getElementById("nav-mobile__theme-list")
            .classList.toggle("show");
    });

    // toggle mobile menu view
    mobileNavToggleBtn.addEventListener("click", (e) => {
        mobileNavToggleBtn.classList.toggle("open");
        mobileMenu.classList.toggle("open_modal");
    });

    // initialize swiper helper modul
    const swiper = new Swiper(".swiper-container", {
        // Optional parameters
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        // LAZY LOADING
        // Disable preloading of all images
        //preloadImages: false,
        // Enable lazy loading
        //lazy: true,

        // effect: 'fade',
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //CLICK EVENTS FOR SECTION NAVIGATION
    const allMenuBtns = document.querySelectorAll(
        ".nav-desktop .btn, .nav-mobile__menu .btn"
    );

    allMenuBtns.forEach((btn, i, btnList) => {
        btn.addEventListener("click", () => {
            document
                .querySelectorAll("section[data-type]")
                .forEach((section) => {
                    section.classList.toggle("show", false);
                });

            // handle all btns mobile & desktop
            btnList.forEach((btnItem) => {
                if (btnItem.dataset.type === btn.dataset.type) {
                    const neededSection = document.querySelector(
                        `section[data-type="${btn.dataset.type}"]`
                    );
                    // show selected section
                    neededSection.classList.toggle("show", true);
                    // scroll to top if needed
                    neededSection.scrollTo({ top: 0, behavior: "smooth" });
                    // add active class to clicked btn
                    btnItem.classList.toggle("active", true);
                } else {
                    btnItem.classList.toggle("active", false);
                }
            });

            // hide mobile menu on click
            if (window.innerWidth < 1025) {
                mobileMenu.classList.toggle("open_modal");
                mobileNavToggleBtn.classList.toggle("open");
            }
        });
    });
});

// Tips article filtering

const tipsBtnList = document.querySelectorAll(".btn-wrapper .btn");

[...tipsBtnList].forEach((btn) => {
    btn.addEventListener("click", () => {
        const allArticles = document.querySelectorAll(".tips-item");

        Array.from(allArticles).forEach((article) => {
            if (btn.id === "all") {
                article.classList.toggle("hide", false);
                return;
            }

            if (btn.id !== article.dataset.type) {
                article.classList.toggle("hide", true);
            } else {
                article.classList.toggle("hide", false);
            }
        });
    });
});

// theme toggle

function getFromLocalStorage(item) {
    return localStorage.getItem(item);
}

function setToLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

const themeBtnList = document.querySelectorAll(".theme-toggle__item");

function initializeTheme() {
    // check for localy saved theme
    const localTheme = getFromLocalStorage("theme");
    // check for system theme
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

    // localy saved has precedence over system theme
    const theme = localTheme ? localTheme : systemTheme;

    document.body.className = "";
    document.body.classList.add(theme);
    // add class to both mobile and desktop menu
    const btnList = document.querySelectorAll(`button[data-type="${theme}"]`);
    btnList.forEach((btn) => {
        btn.classList.add("active");
    });
}

initializeTheme();

[...themeBtnList].forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnType = btn.dataset.type;

        // ukoliko je
        if (btnType === "dark") {
            // postavi active klasu na btns
            [...themeBtnList].forEach((btn) => {
                if (btn.dataset.type === "dark") {
                    btn.classList.toggle("active", true);
                } else {
                    btn.classList.toggle("active", false);
                }
            });

            // postavi klasu na body tag
            document.body.className = "";
            document.body.classList.add(btnType);

            // zapamti u local storage
            setToLocalStorage("theme", btnType);

            return;
        }

        if (btnType === "light") {
            [...themeBtnList].forEach((btn) => {
                if (btn.dataset.type === "light") {
                    btn.classList.toggle("active", true);
                } else {
                    btn.classList.toggle("active", false);
                }
            });

            // postavi klasu na body tag
            document.body.className = "";
            document.body.classList.add(btnType);

            // zapamti u local storage
            setToLocalStorage("theme", btnType);

            return;
        }

        if (btnType === "custom") {
            [...themeBtnList].forEach((btn) => {
                if (btn.dataset.type === "custom") {
                    btn.classList.toggle("active", true);
                } else {
                    btn.classList.toggle("active", false);
                }
            });

            // postavi klasu na body tag
            document.body.className = "";
            document.body.classList.add(btnType);

            // zapamti u local storage
            setToLocalStorage("theme", btnType);

            return;
        }
    });
});

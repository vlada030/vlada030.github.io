document.addEventListener("DOMContentLoaded", () => {
    const mobileNavToggleBtn = document.getElementById("nav-icon3");
    const mobileMenu = document.querySelector(".nav-mobile");
    
    const landingPageSection = document.getElementById("section_landing_page");
    const aboutSection = document.getElementById("section_about");
    const projectsSection = document.getElementById("section_projects");
    const tipsSection = document.getElementById("section_tips");
    const contactSection = document.getElementById("section_contact");

    const aboutSectionBtnList = document.querySelectorAll(
        "[data-aboutSectionBtn]"
    ); 
    const projectsSectionBtnList = document.querySelectorAll(
        "[data-projectsSectionBtn]"
    ); 
    const tipsSectionBtnList = document.querySelectorAll(
        "[data-tipsSectionBtn]"
    ); 
    const contactSectionBtnList = document.querySelectorAll(
        "[data-contactSectionBtn]"
    ); 

    const tipsBtnAll = document.getElementById('all')
    const tipsBtnHTML = document.getElementById('html')
    const tipsBtnCSS = document.getElementById('css')
    const tipsBtnJS = document.getElementById('js')
    const tipsBtnReact = document.getElementById('react')
    const tipsBtnNode = document.getElementById('node')
    const tipsBtnUtilities = document.getElementById('utilities')

    // const currentYearHolder = document.getElementById('year')

    // // current year at the bootom of the page
    // const currentYear = new Date().getFullYear()
    // currentYearHolder.innerText = `${currentYear}`;

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
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        loadPrevNext: true,
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
    const allMenuBtns = [...aboutSectionBtnList, ...projectsSectionBtnList, ...tipsSectionBtnList, ...contactSectionBtnList]
    
    const initializeView = () => {
        const allSections = [
            landingPageSection,
            aboutSection,
            projectsSection,
            tipsSection,
            contactSection,
        ];

        // remove 'show' class from sections
        allSections.forEach((section) => {
            section.classList.toggle("show", false);
        });
        // hide mobile menu on click
        if (window.innerWidth < 1025) {
            mobileMenu.classList.toggle("open_modal");
            mobileNavToggleBtn.classList.toggle("open");
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    Array.from(aboutSectionBtnList).forEach(btn => {
        btn.addEventListener("click", () => {
            initializeView()

            // show relevant section
            aboutSection.classList.add("show");

            // handle active element
            allMenuBtns.forEach(btn => {
                if (btn.dataset.aboutsectionbtn) {
                    btn.classList.toggle("active", true);
                } else {
                    btn.classList.toggle("active", false);
                }
            });
        });
    });

    Array.from(projectsSectionBtnList).forEach(btn => {
        btn.addEventListener("click", () => {
            initializeView();

            // show relevant section
            projectsSection.classList.add("show");

            // handle active element
            allMenuBtns.forEach((btn) => {
                if (btn.dataset.projectssectionbtn) {
                    btn.classList.toggle("active", true);
                } else {
                    btn.classList.toggle("active", false);
                }
            });
        });
    });

    Array.from(tipsSectionBtnList).forEach(btn => {
        btn.addEventListener("click", () => {
            initializeView();

            // show relevant section
            tipsSection.classList.add("show");

            // handle active element
            allMenuBtns.forEach((btn) => {
                if (btn.dataset.tipssectionbtn) {
                    btn.classList.toggle("active", true);
                } else {
                    btn.classList.toggle("active", false);
                }
            });
        });
    });

    Array.from(contactSectionBtnList).forEach(btn => {
        btn.addEventListener("click", () => {
            initializeView();

            // show relevant section
            contactSection.classList.add("show");

            // handle active element
            allMenuBtns.forEach((btn) => {
                if (btn.dataset.contactsectionbtn) {
                    btn.classList.toggle("active", true);
                } else {
                    btn.classList.toggle("active", false);
                }
            });
        })
    })

})

// Tips article filtering

const tipsBtnList = document.querySelectorAll('.btn-wrapper .btn');

[...tipsBtnList].forEach( btn => {
    btn.addEventListener('click', () => {

        const allArticles = document.querySelectorAll('.tips-item')

        Array.from(allArticles).forEach( article => {

            if (btn.id === 'all') {
                article.classList.toggle('hide', false)
                return
            }

            if (btn.id !== article.dataset.type) {
                article.classList.toggle('hide', true)
            } else {
                article.classList.toggle('hide', false)
            }

        })
    })
})
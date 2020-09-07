// contact button na kraju strane za prikaz dodatnih informacija

const contactExtra = document.querySelector(".contact__extra");
const contactButton = document.querySelector(".contact__btn");
contactButton.addEventListener("click", () => {
    contactButton.classList.add("js__contact__btn__fade__out");
    contactExtra.classList.add("js__contact__extra__visible");
});

// za prikazivanje modal slike

const modalImage = document.querySelector(".modal__img");
const modalTitle = document.querySelector(".modal__caption");
const modalFrame = document.querySelector(".modal");
const navBar = document.querySelector(".navigation");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const imagesObj = [
    {
        srcset: "resources/img/2.jpg 300w, resources/img/2-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/2.jpg"
    },

    {
        srcset: "resources/img/35.jpg 300w, resources/img/35-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/35.jpg"
    },

    {
        srcset: "resources/img/4.jpg 300w, resources/img/4-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/4.jpg"
    },

    {
        srcset: "resources/img/5.jpg 300w, resources/img/5-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/5.jpg"
    },

    {
        srcset: "resources/img/32.jpg 300w, resources/img/32-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/32.jpg"
    },

    {
        srcset: "resources/img/7.jpg 300w, resources/img/7-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/7.jpg"
    },

    {
        srcset: "resources/img/26.jpg 300w, resources/img/26-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/26.jpg"
    },

    {
        srcset: "resources/img/33.jpg 300w, resources/img/33-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/33.jpg"
    },

    {
        srcset: "resources/img/10.jpg 300w, resources/img/10-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/10.jpg"
    },

    {
        srcset: "resources/img/3.jpg 300w, resources/img/3-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/3.jpg"
    },

    {
        srcset: "resources/img/31.jpg 300w, resources/img/31-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/31.jpg"
    },

    {
        srcset: "resources/img/12.jpg 300w, resources/img/12-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/12.jpg"
    },

    {
        srcset: "resources/img/6.jpg 300w, resources/img/6-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/6.jpg"
    },

    {
        srcset: "resources/img/15.jpg 300w, resources/img/15-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/15.jpg"
    },

    {
        srcset: "resources/img/16.jpg 300w, resources/img/16-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/16.jpg"
    },

    {
        srcset: "resources/img/24.jpg 300w, resources/img/24-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/24.jpg"
    },

    {
        srcset: "resources/img/30.jpg 300w, resources/img/30-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/30.jpg"
    },

    {
        srcset: "resources/img/27.jpg 300w, resources/img/27-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/27.jpg"
    },

    {
        srcset: "resources/img/34.jpg 300w, resources/img/34-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/34.jpg"
    },

    {
        srcset: "resources/img/11.jpg 300w, resources/img/11-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/11.jpg"
    },

    {
        srcset: "resources/img/36.jpg 300w, resources/img/36-small.jpg 1000w",
        sizes:
            "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
        src: "resources/img/36.jpg"
    },

    {
      srcset: "resources/img/40.jpg 300w, resources/img/40-small.jpg 1000w",
      sizes:
          "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
      src: "resources/img/40.jpg"
    },

    {
      srcset: "resources/img/41.jpg 300w, resources/img/41-small.jpg 1000w",
      sizes:
          "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
      src: "resources/img/41.jpg"
    },

    {
      srcset: "resources/img/42.jpg 300w, resources/img/42-small.jpg 1000w",
      sizes:
          "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
      src: "resources/img/42.jpg"
    },

    {
      srcset: "resources/img/43.jpg 300w, resources/img/43-small.jpg 1000w",
      sizes:
          "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
      src: "resources/img/43.jpg"
    },

    {
      srcset: "resources/img/44.jpg 300w, resources/img/44-small.jpg 1000w",
      sizes:
          "(max-width: 1200px) 60vw, (max-width: 900px) 65vw, (max-width: 600px) 70vw, 300px",
      src: "resources/img/44.jpg"
    },
];

let n;

const setState = (x) => {
    if (x == 0) {
        prev.style.display = "none";
        next.style.display = "inline-block";
    } else if (x == imagesObj.length - 1) {
        prev.style.display = "inline-block";
        next.style.display = "none";
    } else {
        prev.style.display = "inline-block";
        next.style.display = "inline-block";
    }
}

const setSlideImage = (x) => {

    modalImage.srcset = imagesObj[x].srcset;
    console.log(x);
    console.log(modalImage.srcset);
    modalImage.sizes = imagesObj[x].sizes;
    modalImage.src = imagesObj[x].src;
}

window.addEventListener("click", (event) => {
    if (event.target.src !== undefined && event.target.alt !== "direktor") {
        modalImage.srcset = event.target.srcset;
        modalTitle.innerText = event.target.alt;
        modalFrame.style.display = "block";
        navBar.style.display = "none";
        n = imagesObj.findIndex(el => el.srcset === modalImage.srcset);

        console.log(n);
        setState(n);

        return n;
    }
});

document.querySelector("#next").addEventListener("click", () => {
    n += 1;
    setState(n);
    setSlideImage(n);
    
});

document.querySelector("#prev").addEventListener("click", () => {

    n -= 1;
    setState(n);
    setSlideImage(n);

});

// back buton na modalu
const backButton = document.getElementById("modal__back");

backButton.addEventListener("click", () => {
    modalFrame.style.display = "none";
    navBar.style.display = "block";
});

// JQuery kod za smooth scroll

$(document).ready(function() {
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $("html, body").animate(
                        {
                            scrollTop: target.offset().top
                        },
                        1000,
                        function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        }
                    );
                }
            }
        });

    // ucitavanje gotove animacije animate.css preko waypoint plugina
    $("#iServices").waypoint(
        function(direction) {
            $(".js__wpanimation__1").addClass("animated fadeInRight");
        },
        {
            offset: "65%"
        }
    );

    $("#iGallery").waypoint(
        function(direction) {
            $(".js__wpanimation__2").addClass("animated fadeInRight");
        },
        {
            offset: "65%"
        }
    );
});

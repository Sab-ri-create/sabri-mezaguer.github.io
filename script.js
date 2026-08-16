/* =========================================================
   SABRI MEZAGUER — PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   BRAND DATA
========================================================= */

const brands = [

    {
        name: "SIGNAL",
        year: "2026 · Present",
        project: "signal",
        logo: "assets/images/brands/logo-signal.png",
        color: "signal",
        kpis: [
            "13.4K Followers",
            "Authentic Community",
            "Engaging Content",
            "Positive Impact"
        ]
    },

    {
        name: "BIONNEX",
        year: "2026 · Present",
        project: "bionnex",
        logo: "assets/images/brands/logo-bionnex.png",
        color: "bionnex",
        kpis: [
            "60+ Content Managed",
            "Coherent Feed",
            "Engaged Community",
            "Strong Brand Image"
        ]
    },

    {
        name: "CLEAR MEN",
        year: "2026 · Present",
        project: "clear",
        logo: "assets/images/brands/logo-clear.png",
        color: "clear",
        kpis: [
            "100K+ Followers",
            "#1 Worldwide Ranking",
            "Millions of Impressions"
        ]
    },

    {
        name: "FESTIVAL DES SPORTS D'ALGER",
        year: "2026",
        project: "festival",
        logo: "assets/images/brands/logo-festival.png",
        color: "festival",
        kpis: [
            "150 Content Pieces",
            "3 Days",
            "High Content Volume"
        ]
    },

    {
        name: "CHEEZY",
        year: "2025 · 3 months",
        project: "cheezy",
        logo: "assets/images/brands/logo-cheezy.png",
        color: "cheezy",
        kpis: [
            "+120 Content Pieces",
            "High Community Engagement",
            "Strong Brand Loyalty"
        ]
    },

    {
        name: "LG",
        year: "2025 · 3 months",
        project: "lg",
        logo: "assets/images/brands/logo-lg.png",
        color: "lg",
        kpis: [
            "100+ Content Managed",
            "High Engagement",
            "15+ UGC Profiles Managed"
        ]
    },

    {
        name: "IFRI",
        year: "2024 · 3 months",
        project: "ifri",
        logo: "assets/images/brands/logo-ifri.png",
        color: "ifri",
        kpis: [
            "20+ Influencers",
            "60+ Content Managed",
            "Millions of Views"
        ]
    },

    {
        name: "FACTEUR X",
        year: "Present",
        project: "facteur-x",
        logo: "assets/images/brands/logo-facteur-x.png",
        color: "facteur-x",
        kpis: [
            "Brand Strategy",
            "Digital Communication",
            "Content Direction"
        ]
    }

];


/* =========================================================
   DOM
========================================================= */

const track =
    document.querySelector(".brands-track");

const previousButton =
    document.querySelector(".carousel-prev");

const nextButton =
    document.querySelector(".carousel-next");

const progressLines =
    document.querySelectorAll(".progress-line");

const header =
    document.querySelector(".site-header");

const menuButton =
    document.querySelector(".menu-toggle");


/* =========================================================
   CAROUSEL STATE
========================================================= */

let currentIndex = 0;


/* =========================================================
   RESPONSIVE CARD COUNT
========================================================= */

function getVisibleCards() {

    if (window.innerWidth <= 650) {
        return 1;
    }

    if (window.innerWidth <= 1000) {
        return 2;
    }

    return 3;
}


/* =========================================================
   RENDER BRAND CARDS
========================================================= */

function renderBrands() {

    if (!track) {
        return;
    }

    track.innerHTML = brands.map((brand) => {

        return `
            <article
                class="brand-card brand-${brand.color}"
                data-project="${brand.project}"
                tabindex="0"
                role="button"
                aria-label="${brand.name}"
            >

                <div class="brand-logo-wrapper">

                    <img
                        class="brand-logo"
                        src="${brand.logo}"
                        alt="${brand.name}"
                        loading="lazy"
                    >

                </div>


                <div class="brand-info">

                    <h3 class="brand-name">
                        ${brand.name}
                    </h3>

                    <p class="brand-date">
                        ${brand.year}
                    </p>

                </div>


                <div class="brand-hover">

                    <div class="brand-kpis">

                        ${brand.kpis.map((kpi) => {

                            return `
                                <span class="brand-kpi">
                                    ${kpi}
                                </span>
                            `;

                        }).join("")}

                    </div>

                </div>

            </article>
        `;

    }).join("");

}


/* =========================================================
   CAROUSEL UPDATE
========================================================= */

function updateCarousel() {

    if (!track) {
        return;
    }

    const cards =
        Array.from(
            track.querySelectorAll(".brand-card")
        );

    if (!cards.length) {
        return;
    }

    const visibleCards =
        getVisibleCards();

    const maxIndex =
        Math.max(
            0,
            brands.length - visibleCards
        );

    currentIndex =
        Math.max(
            0,
            Math.min(
                currentIndex,
                maxIndex
            )
        );


    const firstCard =
        cards[0];

    const cardWidth =
        firstCard.getBoundingClientRect().width;


    const styles =
        window.getComputedStyle(track);

    const gap =
        parseFloat(styles.gap) || 0;


    const movement =
        currentIndex *
        (cardWidth + gap);


    track.style.transform =
        `translate3d(-${movement}px, 0, 0)`;


    /* Buttons */

    previousButton.disabled =
        currentIndex === 0;

    nextButton.disabled =
        currentIndex === maxIndex;


    /* Progress */

    updateProgress(
        currentIndex,
        visibleCards,
        maxIndex
    );

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress(
    index,
    visibleCards,
    maxIndex
) {

    if (!progressLines.length) {
        return;
    }


    progressLines.forEach(
        line => line.classList.remove("active")
    );


    let progressIndex = 0;


    if (index === 0) {

        progressIndex = 0;

    } else if (index >= maxIndex) {

        progressIndex =
            progressLines.length - 1;

    } else {

        progressIndex = 1;

    }


    if (progressLines[progressIndex]) {

        progressLines[progressIndex]
            .classList.add("active");

    }

}


/* =========================================================
   NEXT
========================================================= */

function goNext() {

    const visibleCards =
        getVisibleCards();

    const maxIndex =
        Math.max(
            0,
            brands.length - visibleCards
        );


    if (currentIndex < maxIndex) {

        currentIndex++;

        updateCarousel();

    }

}


/* =========================================================
   PREVIOUS
========================================================= */

function goPrevious() {

    if (currentIndex > 0) {

        currentIndex--;

        updateCarousel();

    }

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        goNext
    );

}

if (previousButton) {

    previousButton.addEventListener(
        "click",
        goPrevious
    );

}


/* =========================================================
   KEYBOARD CAROUSEL
========================================================= */

if (track) {

    track.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {
                return;
            }


            const card =
                event.target.closest(".brand-card");


            if (!card) {
                return;
            }


            event.preventDefault();

            card.classList.toggle(
                "is-focused"
            );

        }
    );

}


/* =========================================================
   TOUCH SWIPE
========================================================= */

let touchStartX = 0;
let touchEndX = 0;


if (track) {

    track.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    track.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].screenX;


            const difference =
                touchStartX - touchEndX;


            if (Math.abs(difference) < 50) {
                return;
            }


            if (difference > 0) {

                goNext();

            } else {

                goPrevious();

            }

        },
        { passive: true }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuButton && header) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                header.classList.toggle(
                    "menu-open"
                );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

document
    .querySelectorAll(".main-nav a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (!header || !menuButton) {
                    return;
                }


                header.classList.remove(
                    "menu-open"
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* =========================================================
   RESIZE
========================================================= */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(resizeTimer);


        resizeTimer =
            setTimeout(
                () => {

                    updateCarousel();

                },
                100
            );

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderBrands();

updateCarousel();

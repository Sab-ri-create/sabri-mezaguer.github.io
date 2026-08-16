/* =========================================================
   SABRI MEZAGUER — PORTFOLIO
   SELECTED WORK CAROUSEL
========================================================= */

const projects = [
    {
        name: "SIGNAL",
        logo: "assets/images/brands/logo-signal.png",
        year: "2026 · Present",
        className: "brand-signal",
        kpis: [
            "13.4K Followers",
            "Community Management",
            "Content Strategy"
        ]
    },

    {
        name: "BIONNEX",
        logo: "assets/images/brands/logo-bionnex.png",
        year: "2026 · Present",
        className: "brand-bionnex",
        kpis: [
            "60+ Content Managed",
            "Brand Management",
            "Social Media Strategy"
        ]
    },

    {
        name: "CLEAR MEN",
        logo: "assets/images/brands/logo-clear.png",
        year: "2026",
        className: "brand-clear",
        kpis: [
            "100K+ Followers",
            "#1 Worldwide Ranking",
            "Millions of Impressions"
        ]
    },

    {
        name: "FESTIVAL DES SPORTS D'ALGER",
        logo: "assets/images/brands/logo-festival.png",
        year: "2026",
        className: "brand-festival",
        kpis: [
            "150 Content Pieces",
            "3 Days",
            "Event Activation"
        ]
    },

    {
        name: "CHEEZY",
        logo: "assets/images/brands/logo-cheezy.png",
        year: "2025",
        className: "brand-cheezy",
        kpis: [
            "120+ Content Pieces",
            "Social Media Management",
            "Campaign Activation"
        ]
    },

    {
        name: "LG",
        logo: "assets/images/brands/logo-lg.png",
        year: "2025",
        className: "brand-lg",
        kpis: [
            "100+ Content Managed",
            "High Engagement",
            "15+ UGC Profiles"
        ]
    },

    {
        name: "IFRI",
        logo: "assets/images/brands/logo-ifri.png",
        year: "2026",
        className: "brand-ifri",
        kpis: [
            "20+ Influencers",
            "60+ Content Managed",
            "Millions of Views"
        ]
    },

    {
        name: "FACTEUR X",
        logo: "assets/images/brands/logo-facteur-x.png",
        year: "2025",
        className: "brand-facteur-x",
        kpis: [
            "Brand Strategy",
            "Digital Communication",
            "Content Direction"
        ]
    }
];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const track = document.querySelector(".brands-track");
const carouselWindow = document.querySelector(".carousel-window");

const previousButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

const progressLines = [
    ...document.querySelectorAll(
        ".carousel-progress .progress-line"
    )
];

let currentIndex = 0;


/* =========================================================
   RESPONSIVE SETTINGS
========================================================= */

function getVisibleCards() {

    if (window.innerWidth <= 700) {
        return 1;
    }

    if (window.innerWidth <= 1000) {
        return 2;
    }

    return 3;
}


/* =========================================================
   GAP
========================================================= */

function getCarouselGap() {

    if (window.innerWidth <= 700) {
        return 14;
    }

    return 26;
}


/* =========================================================
   CARD WIDTH
========================================================= */

function getCardWidth() {

    if (!carouselWindow) {
        return 300;
    }

    const visibleCards = getVisibleCards();
    const gap = getCarouselGap();

    const containerWidth =
        carouselWindow.getBoundingClientRect().width;

    const totalGap =
        gap * (visibleCards - 1);

    return (
        (containerWidth - totalGap) /
        visibleCards
    );
}


/* =========================================================
   CREATE CARDS
========================================================= */

function renderBrands() {

    if (!track) {
        return;
    }

    track.innerHTML = projects.map(
        (brand, index) => {

            return `
                <article
                    class="brand-card ${brand.className}"
                    data-index="${index}"
                    tabindex="0"
                    role="button"
                    aria-label="View ${brand.name}"
                >

                    <!-- LOGO -->
                    <div class="brand-logo-wrapper">

                        <img
                            class="brand-logo"
                            src="${brand.logo}"
                            alt="${brand.name} logo"
                        >

                    </div>


                    <!-- NAME + YEAR -->
                    <div class="brand-info">

                        <span class="brand-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 class="brand-name">
                            ${brand.name}
                        </h3>

                        <span class="brand-date">
                            ${brand.year}
                        </span>

                    </div>


                    <!-- KPI -->
                    <div class="brand-hover">

                        <div class="brand-kpis">

                            ${brand.kpis.map(
                                kpi => `
                                    <span class="brand-kpi">
                                        ${kpi}
                                    </span>
                                `
                            ).join("")}

                        </div>

                    </div>

                </article>
            `;
        }
    ).join("");
}


/* =========================================================
   UPDATE CARD SIZE
========================================================= */

function updateCardSize() {

    if (!track) {
        return;
    }

    const cardWidth = getCardWidth();

    track.style.setProperty(
        "--card-width",
        `${cardWidth}px`
    );
}


/* =========================================================
   UPDATE CAROUSEL POSITION
========================================================= */

function updateCarousel() {

    if (!track) {
        return;
    }

    const visibleCards = getVisibleCards();
    const gap = getCarouselGap();
    const cardWidth = getCardWidth();

    const maxIndex = Math.max(
        0,
        projects.length - visibleCards
    );


    /* Keep index valid */

    currentIndex = Math.max(
        0,
        Math.min(
            currentIndex,
            maxIndex
        )
    );


    /* Calculate movement */

    const movement =
        currentIndex *
        (cardWidth + gap);


    track.style.transform =
        `translate3d(-${movement}px, 0, 0)`;


    /* Update buttons */

    if (previousButton) {

        previousButton.disabled =
            currentIndex === 0;
    }


    if (nextButton) {

        nextButton.disabled =
            currentIndex >= maxIndex;
    }


    updateProgress();
}


/* =========================================================
   PROGRESS INDICATORS
========================================================= */

function updateProgress() {

    if (!progressLines.length) {
        return;
    }

    const visibleCards =
        getVisibleCards();


    /*
       Example desktop:

       8 brands
       3 visible

       Group 1 → 1 / 2 / 3
       Group 2 → 4 / 5 / 6
       Group 3 → 7 / 8
    */

    const totalGroups =
        Math.ceil(
            projects.length /
            visibleCards
        );


    const currentGroup =
        Math.floor(
            currentIndex /
            visibleCards
        );


    progressLines.forEach(
        (line, index) => {

            if (index >= totalGroups) {

                line.style.display =
                    "none";

                return;
            }


            line.style.display =
                "block";


            line.classList.toggle(
                "active",
                index === currentGroup
            );
        }
    );
}


/* =========================================================
   NEXT GROUP
========================================================= */

function goNext() {

    const visibleCards =
        getVisibleCards();


    const maxIndex =
        Math.max(
            0,
            projects.length -
            visibleCards
        );


    if (
        currentIndex >=
        maxIndex
    ) {
        return;
    }


    /*
       Move exactly one group.

       Desktop:
       3 → 3 → remaining

       Tablet:
       2 → 2 → remaining

       Mobile:
       1 → 1 → 1...
    */

    currentIndex =
        Math.min(
            currentIndex +
            visibleCards,
            maxIndex
        );


    updateCarousel();
}


/* =========================================================
   PREVIOUS GROUP
========================================================= */

function goPrevious() {

    const visibleCards =
        getVisibleCards();


    if (
        currentIndex <= 0
    ) {
        return;
    }


    currentIndex =
        Math.max(
            currentIndex -
            visibleCards,
            0
        );


    updateCarousel();
}


/* =========================================================
   BUTTON EVENTS
========================================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        goPrevious
    );
}


if (nextButton) {

    nextButton.addEventListener(
        "click",
        goNext
    );
}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
           Do not interfere with typing
           in inputs or textareas.
        */

        const activeElement =
            document.activeElement;

        if (
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA"
            )
        ) {
            return;
        }


        if (
            event.key === "ArrowRight"
        ) {

            goNext();
        }


        if (
            event.key === "ArrowLeft"
        ) {

            goPrevious();
        }
    }
);


/* =========================================================
   CARD KEYBOARD ACCESSIBILITY
========================================================= */

if (track) {

    track.addEventListener(
        "keydown",
        event => {

            const card =
                event.target.closest(
                    ".brand-card"
                );


            if (!card) {
                return;
            }


            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.classList.toggle(
                    "is-focused"
                );
            }
        }
    );
}


/* =========================================================
   RESIZE
========================================================= */

let resizeTimer = null;

window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                () => {

                    /*
                       Recalculate the carousel
                       after the viewport changes.
                    */

                    updateCardSize();


                    const visibleCards =
                        getVisibleCards();


                    const maxIndex =
                        Math.max(
                            0,
                            projects.length -
                            visibleCards
                        );


                    currentIndex =
                        Math.min(
                            currentIndex,
                            maxIndex
                        );


                    updateCarousel();

                },
                100
            );
    }
);


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

if (track) {

    track.addEventListener(
        "error",
        event => {

            if (
                event.target.tagName !== "IMG"
            ) {
                return;
            }


            console.warn(
                "Portfolio image not found:",
                event.target.src
            );
        },
        true
    );
}


/* =========================================================
   INITIALIZATION
========================================================= */

function initCarousel() {

    renderBrands();

    updateCardSize();

    updateCarousel();
}


/* =========================================================
   START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initCarousel
    );

} else {

    initCarousel();
}

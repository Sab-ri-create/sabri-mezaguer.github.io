```javascript
/* =========================================================
   SABRI MEZAGUER — PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01 — BRAND DATA
       ORDER: MOST RECENT → OLDEST
    ====================================================== */

    const brands = [

        {
            name: "FACTEUR X",
            year: "2026",
            logo: "images/facteur-x.png",
            className: "brand-facteur-x",
            kpis: [
                "Creative direction",
                "Content production",
                "Social media",
                "Digital communication"
            ]
        },

        {
            name: "BIONNEX",
            year: "2026",
            logo: "images/bionnex.png",
            className: "brand-bionnex",
            kpis: [
                "60+ content managed",
                "Dermo-cosmetics",
                "Content strategy",
                "Digital activation"
            ]
        },

        {
            name: "SIGNAL",
            year: "2026",
            logo: "images/signal.png",
            className: "brand-signal",
            kpis: [
                "13.4K followers",
                "Brand management",
                "Social media",
                "Content direction"
            ]
        },

        {
            name: "CLEAR MEN",
            year: "2026",
            logo: "images/clear-men.png",
            className: "brand-clear",
            kpis: [
                "100K+ followers",
                "#1 worldwide ranking",
                "Millions of impressions",
                "Global campaign"
            ]
        },

        {
            name: "FESTIVAL DES SPORTS D'ALGER",
            year: "2026",
            logo: "images/festival-des-sports.png",
            className: "brand-festival",
            kpis: [
                "150 content pieces",
                "3 days",
                "Live coverage",
                "Digital activation"
            ]
        },

        {
            name: "IFRI",
            year: "2026",
            logo: "images/ifri.png",
            className: "brand-ifri",
            kpis: [
                "20+ influencers",
                "60+ content managed",
                "Millions of views",
                "Influencer marketing"
            ]
        },

        {
            name: "CHEEZY",
            year: "2025",
            logo: "images/cheezy.png",
            className: "brand-cheezy",
            kpis: [
                "120+ content pieces",
                "Social media",
                "UGC management",
                "Community management"
            ]
        },

        {
            name: "LG",
            year: "2025",
            logo: "images/lg.png",
            className: "brand-lg",
            kpis: [
                "100+ content managed",
                "High engagement",
                "15+ UGC profiles",
                "Digital communication"
            ]
        }

    ];


    /* =====================================================
       02 — CAROUSEL ELEMENTS
    ====================================================== */

    const track =
        document.querySelector(".brands-track");

    const carouselWindow =
        document.querySelector(".carousel-window");

    const previousButton =
        document.querySelector(".carousel-prev");

    const nextButton =
        document.querySelector(".carousel-next");

    const progressLines =
        document.querySelectorAll(".progress-line");


    /* =====================================================
       03 — SAFETY CHECK
    ====================================================== */

    if (
        !track ||
        !carouselWindow ||
        !previousButton ||
        !nextButton
    ) {
        console.warn(
            "Carousel elements could not be found."
        );

        return;
    }


    /* =====================================================
       04 — CAROUSEL STATE
    ====================================================== */

    let currentIndex = 0;

    let cardsPerView = 3;

    let totalPages = 0;


    /* =====================================================
       05 — RESPONSIVE CARDS PER VIEW
    ====================================================== */

    function getCardsPerView() {

        const width =
            window.innerWidth;

        if (width <= 600) {
            return 1;
        }

        if (width <= 850) {
            return 2;
        }

        return 3;
    }


    /* =====================================================
       06 — TOTAL PAGES
    ====================================================== */

    function calculatePages() {

        cardsPerView =
            getCardsPerView();

        totalPages =
            Math.ceil(
                brands.length /
                cardsPerView
            );

        if (
            currentIndex >= totalPages
        ) {

            currentIndex =
                totalPages - 1;

        }

        if (currentIndex < 0) {
            currentIndex = 0;
        }
    }


    /* =====================================================
       07 — CREATE BRAND CARD
    ====================================================== */

    function createBrandCard(
        brand
    ) {

        const card =
            document.createElement("article");

        card.className =
            `brand-card ${brand.className}`;


        /*
         * Brand background colors
         */

        switch (brand.name) {

            case "FESTIVAL DES SPORTS D'ALGER":
                card.style.background = "#ffffff";
                card.style.color = "#111111";
                break;

            case "BIONNEX":
                card.style.background = "#b7cf9c";
                card.style.color = "#111111";
                break;

            case "SIGNAL":
                card.style.background = "#ffffff";
                card.style.color = "#111111";
                break;

            case "CLEAR MEN":
                card.style.background = "#1557c0";
                card.style.color = "#ffffff";
                break;

            case "CHEEZY":
                card.style.background = "#6f9b62";
                card.style.color = "#111111";
                break;

            case "LG":
                card.style.background = "#ffffff";
                card.style.color = "#111111";
                break;

            case "IFRI":
                card.style.background = "#1557c0";
                card.style.color = "#ffffff";
                break;

            case "FACTEUR X":
                card.style.background = "#111111";
                card.style.color = "#ffffff";
                break;

            default:
                card.style.background = "#ffffff";
                card.style.color = "#111111";
        }


        /* =================================================
           LOGO
        ================================================== */

        const logoWrap =
            document.createElement("div");

        logoWrap.className =
            "brand-logo-wrap";


        const logo =
            document.createElement("img");

        logo.className =
            "brand-logo";

        logo.src =
            brand.logo;

        logo.alt =
            `${brand.name} logo`;

        logo.loading =
            "lazy";


        /*
         * If the logo doesn't exist,
         * don't break the card.
         */

        logo.addEventListener(
            "error",
            () => {

                logo.style.display =
                    "none";

                logoWrap.innerHTML =
                    `<span style="
                        font-family: var(--display);
                        font-size: clamp(28px, 4vw, 52px);
                        font-weight: 800;
                        letter-spacing: -0.06em;
                        text-align: center;
                    ">
                        ${brand.name}
                    </span>`;

            }
        );


        logoWrap.appendChild(logo);


        /* =================================================
           HOVER INFORMATION
        ================================================== */

        const hoverInfo =
            document.createElement("div");

        hoverInfo.className =
            "brand-hover-info";


        /* Title */

        const title =
            document.createElement("div");

        title.className =
            "brand-title";


        const titleName =
            document.createElement("h3");

        titleName.textContent =
            brand.name;


        const titleYear =
            document.createElement("span");

        titleYear.textContent =
            brand.year;


        title.appendChild(titleName);

        title.appendChild(titleYear);


        /* KPIs */

        const kpis =
            document.createElement("div");

        kpis.className =
            "brand-kpis";


        brand.kpis.forEach(
            kpi => {

                const item =
                    document.createElement("span");

                item.textContent =
                    kpi;

                kpis.appendChild(item);

            }
        );


        hoverInfo.appendChild(title);

        hoverInfo.appendChild(kpis);


        /* =================================================
           APPEND CARD
        ================================================== */

        card.appendChild(logoWrap);

        card.appendChild(hoverInfo);


        return card;
    }


    /* =====================================================
       08 — RENDER ALL BRANDS
    ====================================================== */

    function renderBrands() {

        track.innerHTML = "";


        brands.forEach(
            brand => {

                const card =
                    createBrandCard(
                        brand
                    );

                track.appendChild(card);

            }
        );

    }


    /* =====================================================
       09 — UPDATE CARD WIDTH
    ====================================================== */

    function updateCardWidths() {

        const cards =
            track.querySelectorAll(
                ".brand-card"
            );


        if (!cards.length) {
            return;
        }


        const gap = 24;


        let width;


        if (cardsPerView === 1) {

            width =
                carouselWindow.clientWidth;

        }

        else {

            width =
                (
                    carouselWindow.clientWidth
                    -
                    gap *
                    (cardsPerView - 1)
                )
                /
                cardsPerView;

        }


        cards.forEach(
            card => {

                card.style.flexBasis =
                    `${width}px`;

            }
        );

    }


    /* =====================================================
       10 — MOVE CAROUSEL
    ====================================================== */

    function updateCarousel(
        direction = null
    ) {

        const cards =
            track.querySelectorAll(
                ".brand-card"
            );


        if (!cards.length) {
            return;
        }


        calculatePages();


        /*
         * Each page moves by exactly
         * the number of visible cards.
         */

        const firstCard =
            cards[0];


        const computedStyle =
            window.getComputedStyle(track);


        const gap =
            parseFloat(
                computedStyle.columnGap ||
                computedStyle.gap ||
                "24"
            );


        const cardWidth =
            firstCard.getBoundingClientRect().width;


        const moveAmount =
            (
                cardWidth + gap
            )
            *
            cardsPerView
            *
            currentIndex;


        /*
         * On the final page we calculate
         * the exact available movement
         * so we don't create empty space.
         */

        const maxTranslate =
            track.scrollWidth -
            carouselWindow.clientWidth;


        let translate =
            Math.min(
                moveAmount,
                maxTranslate
            );


        if (translate < 0) {
            translate = 0;
        }


        /*
         * Animation direction classes
         */

        if (direction) {

            track.classList.remove(
                "carousel-enter-next",
                "carousel-enter-prev"
            );


            /*
             * Force reflow so animation
             * can restart correctly.
             */

            void track.offsetWidth;


            track.classList.add(
                direction === "next"
                    ? "carousel-enter-next"
                    : "carousel-enter-prev"
            );

        }


        track.style.transform =
            `translate3d(
                -${translate}px,
                0,
                0
            )`;


        updateProgress();


        updateButtons();

    }


    /* =====================================================
       11 — PROGRESS INDICATOR
    ====================================================== */

    function updateProgress() {

        if (!progressLines.length) {
            return;
        }


        progressLines.forEach(
            (line, index) => {

                line.classList.toggle(
                    "active",
                    index === currentIndex
                );

            }
        );

    }


    /* =====================================================
       12 — BUTTON STATES
    ====================================================== */

    function updateButtons() {

        previousButton.disabled =
            currentIndex <= 0;


        nextButton.disabled =
            currentIndex >=
            totalPages - 1;


        previousButton.style.opacity =
            previousButton.disabled
                ? "0.35"
                : "1";


        nextButton.style.opacity =
            nextButton.disabled
                ? "0.35"
                : "1";


        previousButton.style.pointerEvents =
            previousButton.disabled
                ? "none"
                : "auto";


        nextButton.style.pointerEvents =
            nextButton.disabled
                ? "none"
                : "auto";

    }


    /* =====================================================
       13 — NEXT
    ====================================================== */

    function goNext() {

        calculatePages();


        if (
            currentIndex <
            totalPages - 1
        ) {

            currentIndex++;

            updateCarousel("next");

        }

    }


    /* =====================================================
       14 — PREVIOUS
    ====================================================== */

    function goPrevious() {

        calculatePages();


        if (
            currentIndex >
            0
        ) {

            currentIndex--;

            updateCarousel("prev");

        }

    }


    /* =====================================================
       15 — BUTTON EVENTS
    ====================================================== */

    nextButton.addEventListener(
        "click",
        goNext
    );


    previousButton.addEventListener(
        "click",
        goPrevious
    );


    /* =====================================================
       16 — KEYBOARD NAVIGATION
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            /*
             * Don't hijack keyboard navigation
             * while typing in inputs.
             */

            const tag =
                event.target.tagName;

            if (
                tag === "INPUT" ||
                tag === "TEXTAREA" ||
                tag === "SELECT"
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


    /* =====================================================
       17 — TOUCH / SWIPE
    ====================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    carouselWindow.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    carouselWindow.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const difference =
            touchStartX -
            touchEndX;


        const threshold = 50;


        if (
            Math.abs(difference) <
            threshold
        ) {
            return;
        }


        if (difference > 0) {

            goNext();

        }

        else {

            goPrevious();

        }

    }


    /* =====================================================
       18 — RESIZE
    ====================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        calculatePages();

                        updateCardWidths();

                        updateCarousel();

                    },
                    150
                );

        }
    );


    /* =====================================================
       19 — SMOOTH SCROLL
    ====================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        const targetId =
                            link
                                .getAttribute("href");


                        if (
                            !targetId ||
                            targetId === "#"
                        ) {
                            return;
                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (!target) {
                            return;
                        }


                        event.preventDefault();


                        target.scrollIntoView(
                            {
                                behavior: "smooth",
                                block: "start"
                            }
                        );

                    }
                );

            }
        );


    /* =====================================================
       20 — INITIALIZE
    ====================================================== */

    renderBrands();

    calculatePages();

    updateCardWidths();

    updateCarousel();


    /* =====================================================
       21 — LOAD SAFETY
    ====================================================== */

    window.addEventListener(
        "load",
        () => {

            calculatePages();

            updateCardWidths();

            updateCarousel();

        }
    );


    /* =====================================================
       22 — DEBUG
       Useful during GitHub Pages development.
    ====================================================== */

    console.log(
        "Sabri Mezaguer portfolio loaded successfully."
    );

    console.log(
        `${brands.length} brands loaded.`
    );

});
```

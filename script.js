/* =========================================================
   SABRI MEZAGUER — PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       BRAND DATA
    ====================================================== */

    const brands = [

        {
            name: "CLEAR MEN",
            year: "2026 · Present",
            logo: "assets/images/brands/logo-clear.png",

            background: "#1557FF",
            text: "#FFFFFF",

            kpis: [
                "100K+ Followers",
                "#1 Worldwide Ranking",
                "Millions of Impressions"
            ]
        },

        {
            name: "SIGNAL",
            year: "2026 · Present",
            logo: "assets/images/brands/logo-signal.png",

            background: "#FFFFFF",
            text: "#111111",

            kpis: [
                "13.4K Followers",
                "ENGAGING Content",
                "AUTHENTIC Community"
            ]
        },

        {
            name: "BIONNEX",
            year: "2026 · Present",
            logo: "assets/images/brands/logo-bionnex.png",

            background: "#CFE8D5",
            text: "#145C35",

            kpis: [
                "60+ Content Managed",
                "COHERENT Feed",
                "STRONG Brand Image"
            ]
        },

        {
            name: "FESTIVAL DES SPORTS D'ALGER",
            year: "2026",
            logo: "assets/images/brands/logo-festival.png",

            background: "#FFFFFF",
            text: "#111111",

            kpis: [
                "150 Content Pieces",
                "3 Days",
                "High Content Volume"
            ]
        },

        {
            name: "CHEEZY",
            year: "2025 · 3 months",
            logo: "assets/images/brands/logo-cheezy.png",

            background: "#DDEEDB",
            text: "#174C2C",

            kpis: [
                "+120 Content Pieces",
                "HIGH Community Engagement",
                "STRONG Brand Loyalty"
            ]
        },

        {
            name: "LG",
            year: "2025 · 3 months",
            logo: "assets/images/brands/logo-lg.png",

            background: "#FFFFFF",
            text: "#111111",

            kpis: [
                "100+ Content Managed",
                "15+ UGC Profiles",
                "HIGH Engagement"
            ]
        },

        {
            name: "IFRI",
            year: "2024 · 3 months",
            logo: "assets/images/brands/logo-ifri.png",

            background: "#DCE8FF",
            text: "#123B87",

            kpis: [
                "20+ Influencers",
                "60+ Content Managed",
                "Millions of Views"
            ]
        },

        {
            name: "FACTEUR X",
            year: "2024",
            logo: "assets/images/brands/logo-facteur-x.png",

            background: "#000000",
            text: "#FFFFFF",

            kpis: [
                "Digital Communication",
                "Content Management",
                "Brand Activation"
            ]
        }

    ];


    /* =====================================================
       CAROUSEL
    ====================================================== */

    const track = document.querySelector(".brands-track");

    const previousButton =
        document.querySelector(".carousel-prev");

    const nextButton =
        document.querySelector(".carousel-next");

    const progressLines =
        document.querySelectorAll(".progress-line");


    if (!track) {
        console.warn("Brands carousel not found.");
        return;
    }


    /* =====================================================
       CREATE BRAND CARDS
    ====================================================== */

    brands.forEach((brand, index) => {

        const card = document.createElement("article");

        card.className = "brand-card";

        card.style.backgroundColor =
            brand.background;

        card.style.color =
            brand.text;


        /* -----------------------------------------------
           LOGO
        ------------------------------------------------ */

        const logoWrapper =
            document.createElement("div");

        logoWrapper.className =
            "brand-logo-wrapper";


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


        logoWrapper.appendChild(logo);


        /* -----------------------------------------------
           KPI HOVER
        ------------------------------------------------ */

        const hover =
            document.createElement("div");

        hover.className =
            "brand-hover";


        const kpiContainer =
            document.createElement("div");

        kpiContainer.className =
            "brand-kpis";


        brand.kpis.forEach(kpi => {

            const item =
                document.createElement("span");

            item.className =
                "brand-kpi";

            item.textContent =
                kpi;

            kpiContainer.appendChild(item);

        });


        hover.appendChild(kpiContainer);


        /* -----------------------------------------------
           CARD INFORMATION
        ------------------------------------------------ */

        const info =
            document.createElement("div");

        info.className =
            "brand-info";


        const number =
            document.createElement("span");

        number.className =
            "brand-number";

        number.textContent =
            String(index + 1).padStart(2, "0");


        const name =
            document.createElement("h3");

        name.className =
            "brand-name";

        name.textContent =
            brand.name;


        const date =
            document.createElement("span");

        date.className =
            "brand-date";

        date.textContent =
            brand.year;


        info.appendChild(number);
        info.appendChild(name);
        info.appendChild(date);


        /* -----------------------------------------------
           FINAL CARD
        ------------------------------------------------ */

        card.appendChild(logoWrapper);
        card.appendChild(hover);
        card.appendChild(info);

        track.appendChild(card);

    });


    /* =====================================================
       CAROUSEL STATE
    ====================================================== */

    let currentPage = 0;


    function getCardsPerPage() {

        if (window.innerWidth <= 700) {
            return 1;
        }

        if (window.innerWidth <= 1000) {
            return 2;
        }

        return 3;
    }


    function getTotalPages() {

        const cardsPerPage =
            getCardsPerPage();

        return Math.ceil(
            brands.length / cardsPerPage
        );
    }


    /* =====================================================
       MOVE CAROUSEL
    ====================================================== */

    function updateCarousel() {

        const cards =
            Array.from(
                track.querySelectorAll(".brand-card")
            );


        if (!cards.length) {
            return;
        }


        const cardsPerPage =
            getCardsPerPage();


        const firstCard =
            cards[0];


        const cardWidth =
            firstCard.getBoundingClientRect().width;


        const styles =
            window.getComputedStyle(track);


        const gap =
            parseFloat(styles.gap) || 0;


        const distance =
            (cardWidth + gap) *
            cardsPerPage;


        track.style.transform =
            `translateX(-${currentPage * distance}px)`;


        updateControls();

    }


    /* =====================================================
       CONTROLS
    ====================================================== */

    function updateControls() {

        const totalPages =
            getTotalPages();


        if (previousButton) {

            previousButton.disabled =
                currentPage === 0;

        }


        if (nextButton) {

            nextButton.disabled =
                currentPage >= totalPages - 1;

        }


        progressLines.forEach(
            (line, index) => {

                line.classList.toggle(
                    "active",
                    index === currentPage
                );

            }
        );

    }


    /* =====================================================
       NEXT
    ====================================================== */

    nextButton?.addEventListener(
        "click",
        () => {

            const totalPages =
                getTotalPages();


            if (
                currentPage <
                totalPages - 1
            ) {

                currentPage++;

                updateCarousel();

            }

        }
    );


    /* =====================================================
       PREVIOUS
    ====================================================== */

    previousButton?.addEventListener(
        "click",
        () => {

            if (currentPage > 0) {

                currentPage--;

                updateCarousel();

            }

        }
    );


    /* =====================================================
       KEYBOARD
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "ArrowRight" &&
                document.activeElement.tagName !== "INPUT"
            ) {

                const totalPages =
                    getTotalPages();


                if (
                    currentPage <
                    totalPages - 1
                ) {

                    currentPage++;

                    updateCarousel();

                }

            }


            if (
                event.key === "ArrowLeft" &&
                document.activeElement.tagName !== "INPUT"
            ) {

                if (currentPage > 0) {

                    currentPage--;

                    updateCarousel();

                }

            }

        }
    );


    /* =====================================================
       RESIZE
    ====================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(resizeTimer);


            resizeTimer =
                setTimeout(
                    () => {

                        const totalPages =
                            getTotalPages();


                        if (
                            currentPage >=
                            totalPages
                        ) {

                            currentPage =
                                totalPages - 1;

                        }


                        updateCarousel();

                    },
                    150
                );

        }
    );


    /* =====================================================
       IMAGE FALLBACK
    ====================================================== */

    document
        .querySelectorAll(".brand-logo")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    console.error(
                        `Logo not found: ${image.src}`
                    );

                    image.style.display =
                        "none";

                }
            );

        });


    /* =====================================================
       INITIALIZE
    ====================================================== */

    requestAnimationFrame(
        () => {

            updateCarousel();

        }
    );

});

/* =========================================================
   SELECTED WORK — BRAND CAROUSEL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const brands = [
        {
            name: "CLEAR MEN",
            year: "01 2026 · Present",
            logo: "assets/images/brands/logo-clear.png",
            color: "#1557FF",
            textColor: "#FFFFFF",
            kpis: [
                "100K+ Followers",
                "#1 Worldwide Ranking",
                "Millions of Impressions"
            ]
        },

        {
            name: "SIGNAL",
            year: "02 2026 · Present",
            logo: "assets/images/brands/logo-signal.png",
            color: "#FFFFFF",
            textColor: "#111111",
            kpis: [
                "13.4K Followers",
                "ENGAGING Content",
                "AUTHENTIC Community"
            ]
        },

        {
            name: "BIONNEX",
            year: "03 2026 · Present",
            logo: "assets/images/brands/logo-bionnex.png",
            color: "#CFE8D5",
            textColor: "#145C35",
            kpis: [
                "60+ Content Managed",
                "COHERENT Feed",
                "STRONG Brand Image"
            ]
        },

        {
            name: "FESTIVAL DES SPORTS D'ALGER",
            year: "04 2026",
            logo: "assets/images/brands/logo-festival.png",
            color: "#FFFFFF",
            textColor: "#111111",
            kpis: [
                "150 Content Pieces",
                "3 Days",
                "High Content Volume"
            ]
        },

        {
            name: "CHEEZY",
            year: "05 2025 · 3 months",
            logo: "assets/images/brands/logo-cheezy.png",
            color: "#DDEEDB",
            textColor: "#174C2C",
            kpis: [
                "+120 Content Pieces",
                "HIGH Community Engagement",
                "STRONG Brand Loyalty"
            ]
        },

        {
            name: "LG",
            year: "06 2025 · 3 months",
            logo: "assets/images/brands/logo-lg.png",
            color: "#FFFFFF",
            textColor: "#111111",
            kpis: [
                "100+ Content Managed",
                "15+ UGC Profiles",
                "HIGH Engagement"
            ]
        },

        {
            name: "IFRI",
            year: "07 2024 · 3 months",
            logo: "assets/images/brands/logo-ifri.png",
            color: "#DCE8FF",
            textColor: "#123B87",
            kpis: [
                "20+ Influencers",
                "60+ Content Managed",
                "Millions of Views"
            ]
        },

        {
            name: "FACTEUR X",
            year: "08 2024",
            logo: "assets/images/brands/logo-facteur-x.png",
            color: "#000000",
            textColor: "#FFFFFF",
            kpis: [
                "Digital Communication",
                "Content Management",
                "Brand Activation"
            ]
        }
    ];


    /* =====================================================
       FIND CAROUSEL ELEMENTS
       ===================================================== */

    const track =
        document.querySelector(".brands-track") ||
        document.querySelector(".carousel-track") ||
        document.querySelector(".selected-work-track");

    const prevButton =
        document.querySelector(".brands-prev") ||
        document.querySelector(".carousel-prev") ||
        document.querySelector(".prev");

    const nextButton =
        document.querySelector(".brands-next") ||
        document.querySelector(".carousel-next") ||
        document.querySelector(".next");

    if (!track) {
        console.warn("Carousel track not found.");
        return;
    }


    /* =====================================================
       CREATE CARDS
       ===================================================== */

    track.innerHTML = "";

    brands.forEach((brand, index) => {

        const card = document.createElement("article");

        card.className = "brand-card";

        card.dataset.index = index;
        card.dataset.brand = brand.name;

        card.style.backgroundColor = brand.color;
        card.style.color = brand.textColor;


        /* ---------- LOGO ---------- */

        const logoWrapper = document.createElement("div");

        logoWrapper.className = "brand-logo-wrapper";

        const logo = document.createElement("img");

        logo.className = "brand-logo";

        logo.src = brand.logo;
        logo.alt = `${brand.name} logo`;
        logo.loading = "lazy";
        logo.decoding = "async";

        logoWrapper.appendChild(logo);


        /* ---------- HOVER OVERLAY ---------- */

        const overlay = document.createElement("div");

        overlay.className = "brand-hover";

        const kpiContainer = document.createElement("div");

        kpiContainer.className = "brand-kpis";

        brand.kpis.forEach(kpi => {

            const kpiElement = document.createElement("span");

            kpiElement.className = "brand-kpi";
            kpiElement.textContent = kpi;

            kpiContainer.appendChild(kpiElement);

        });

        overlay.appendChild(kpiContainer);


        /* ---------- CARD INFO ---------- */

        const info = document.createElement("div");

        info.className = "brand-info";

        const number = document.createElement("span");

        number.className = "brand-number";

        number.textContent =
            String(index + 1).padStart(2, "0");


        const name = document.createElement("h3");

        name.className = "brand-name";

        name.textContent = brand.name;


        const date = document.createElement("span");

        date.className = "brand-date";

        date.textContent = brand.year;


        info.appendChild(number);
        info.appendChild(name);
        info.appendChild(date);


        /* ---------- CARD ---------- */

        card.appendChild(logoWrapper);
        card.appendChild(info);
        card.appendChild(overlay);

        track.appendChild(card);
    });


    /* =====================================================
       CAROUSEL
       ===================================================== */

    let currentPage = 0;

    const cardsPerPage = 3;

    const totalPages =
        Math.ceil(brands.length / cardsPerPage);


    function updateCarousel() {

        const cards =
            Array.from(track.querySelectorAll(".brand-card"));

        if (!cards.length) return;


        /*
         * The CSS controls the actual card width.
         * We move the track by one group of 3 cards.
         */

        const firstCard = cards[0];

        const cardWidth =
            firstCard.getBoundingClientRect().width;


        const computedStyle =
            window.getComputedStyle(track);

        const gap =
            parseFloat(computedStyle.columnGap) ||
            parseFloat(computedStyle.gap) ||
            0;


        const movement =
            (cardWidth + gap) * cardsPerPage;


        track.style.transform =
            `translateX(-${currentPage * movement}px)`;


        updateButtons();
    }


    /* =====================================================
       BUTTON STATE
       ===================================================== */

    function updateButtons() {

        if (prevButton) {

            prevButton.disabled =
                currentPage === 0;

            prevButton.setAttribute(
                "aria-disabled",
                currentPage === 0 ? "true" : "false"
            );
        }


        if (nextButton) {

            nextButton.disabled =
                currentPage >= totalPages - 1;

            nextButton.setAttribute(
                "aria-disabled",
                currentPage >= totalPages - 1 ? "true" : "false"
            );
        }
    }


    /* =====================================================
       NEXT
       ===================================================== */

    if (nextButton) {

        nextButton.addEventListener("click", () => {

            if (currentPage < totalPages - 1) {

                currentPage++;

                updateCarousel();
            }

        });
    }


    /* =====================================================
       PREVIOUS
       ===================================================== */

    if (prevButton) {

        prevButton.addEventListener("click", () => {

            if (currentPage > 0) {

                currentPage--;

                updateCarousel();
            }

        });
    }


    /* =====================================================
       KEYBOARD NAVIGATION
       ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "ArrowRight") {

            if (
                currentPage <
                totalPages - 1
            ) {

                currentPage++;

                updateCarousel();
            }
        }


        if (event.key === "ArrowLeft") {

            if (currentPage > 0) {

                currentPage--;

                updateCarousel();
            }
        }

    });


    /* =====================================================
       RESPONSIVE
       ===================================================== */

    window.addEventListener(
        "resize",
        () => {
            updateCarousel();
        },
        { passive: true }
    );


    /* =====================================================
       INITIAL STATE
       ===================================================== */

    requestAnimationFrame(() => {
        updateCarousel();
    });

});

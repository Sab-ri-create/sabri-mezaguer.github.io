/* =========================================================
   SABRI MEZAGUER — PORTFOLIO
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");

    if (menuToggle && header) {
        menuToggle.addEventListener("click", () => {
            const isOpen = header.classList.toggle("menu-open");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        document.querySelectorAll(".site-header nav a").forEach(link => {
            link.addEventListener("click", () => {
                header.classList.remove("menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =====================================================
       SELECTED WORK — BRAND CAROUSEL
       
       IMPORTANT:
       - 3 cards visible on desktop
       - arrows move by 3 cards
       - KPI appear on hover
       - logo only visible normally
       - Facteur X stays LAST
       ===================================================== */

    const brands = [

        {
            name: "FESTIVAL DES SPORTS D'ALGER",
            logo: "assets/images/brands/logo-festival.png",
            year: "04 2026",
            kpis: [
                "150 content pieces",
                "3 days",
                "Event activation"
            ]
        },

        {
            name: "BIONNEX",
            logo: "assets/images/brands/logo-bionnex.png",
            year: "03 2026 · Present",
            kpis: [
                "60+ content managed",
                "Coherent feed",
                "Strong brand image"
            ]
        },

        {
            name: "SIGNAL",
            logo: "assets/images/brands/logo-signal.png",
            year: "02 2026 · Present",
            kpis: [
                "13.4K followers",
                "Authentic community",
                "Engaging content"
            ]
        },

        {
            name: "CLEAR MEN",
            logo: "assets/images/brands/logo-clear.png",
            year: "01 2026 · Present",
            kpis: [
                "100K+ followers",
                "#1 worldwide ranking",
                "Millions of impressions"
            ]
        },

        {
            name: "CHEEZY",
            logo: "assets/images/brands/logo-cheezy.png",
            year: "2025 · 3 months",
            kpis: [
                "+120 content pieces",
                "High community engagement",
                "Strong brand loyalty"
            ]
        },

        {
            name: "LG",
            logo: "assets/images/brands/logo-lg.png",
            year: "2025 · 3 months",
            kpis: [
                "100+ content managed",
                "High engagement",
                "15+ UGC profiles"
            ]
        },

        {
            name: "IFRI",
            logo: "assets/images/brands/logo-ifri.png",
            year: "2024 · 3 months",
            kpis: [
                "20+ influencers",
                "60+ content managed",
                "Millions of views"
            ]
        },

        {
            name: "FACTEUR X",
            logo: "assets/images/brands/logo-facteur-x.png",
            year: "Project",
            kpis: [
                "Brand strategy",
                "Digital communication",
                "Content direction"
            ]
        }

    ];


    const brandTrack = document.querySelector(".brand-track");
    const prevButton = document.querySelector(".carousel-arrow.prev");
    const nextButton = document.querySelector(".carousel-arrow.next");
    const progressBar = document.querySelector(".progress-bar");

    let currentPage = 0;


    /* -----------------------------------------------------
       Number of cards displayed
       ----------------------------------------------------- */

    function getCardsPerPage() {

        if (window.innerWidth <= 700) {
            return 1;
        }

        if (window.innerWidth <= 1050) {
            return 2;
        }

        return 3;
    }


    /* -----------------------------------------------------
       Render brand cards
       ----------------------------------------------------- */

    function renderBrands() {

        if (!brandTrack) return;

        brandTrack.innerHTML = "";

        brands.forEach((brand) => {

            const card = document.createElement("article");

            card.className = "brand-card";

            card.innerHTML = `
                <div class="brand-card-inner">

                    <div class="brand-logo-wrapper">
                        <img
                            src="${brand.logo}"
                            alt="${brand.name} logo"
                            class="brand-logo"
                        >
                    </div>

                    <div class="brand-overlay">

                        <div class="brand-overlay-top">
                            <span class="brand-year">
                                ${brand.year}
                            </span>

                            <span class="brand-name">
                                ${brand.name}
                            </span>
                        </div>

                        <div class="brand-kpis">
                            ${brand.kpis.map(kpi => `
                                <span>${kpi}</span>
                            `).join("")}
                        </div>

                        <span class="brand-view">
                            View project ↗
                        </span>

                    </div>

                </div>
            `;

            brandTrack.appendChild(card);
        });
    }


    /* -----------------------------------------------------
       Carousel positioning
       ----------------------------------------------------- */

    function updateCarousel() {

        if (!brandTrack) return;

        const cards = Array.from(
            brandTrack.querySelectorAll(".brand-card")
        );

        if (!cards.length) return;

        const cardsPerPage = getCardsPerPage();

        const totalPages = Math.ceil(
            brands.length / cardsPerPage
        );

        currentPage = Math.max(
            0,
            Math.min(currentPage, totalPages - 1)
        );

        /*
         * Instead of moving by one card,
         * we move by one complete page.
         */

        const viewport = document.querySelector(".brand-viewport");

        if (!viewport) return;

        const viewportWidth = viewport.clientWidth;

        /*
         * Each page contains exactly the number of cards
         * currently visible.
         */

        const offset = currentPage * viewportWidth;

        brandTrack.style.transform =
            `translateX(-${offset}px)`;


        /* Buttons */

        if (prevButton) {
            prevButton.disabled = currentPage === 0;
        }

        if (nextButton) {
            nextButton.disabled =
                currentPage === totalPages - 1;
        }


        /* Progress */

        if (progressBar) {

            const progress =
                ((currentPage + 1) / totalPages) * 100;

            progressBar.style.width =
                `${progress}%`;
        }
    }


    /* -----------------------------------------------------
       Previous / Next
       ----------------------------------------------------- */

    if (prevButton) {

        prevButton.addEventListener("click", () => {

            if (currentPage > 0) {

                currentPage--;

                updateCarousel();
            }

        });
    }


    if (nextButton) {

        nextButton.addEventListener("click", () => {

            const cardsPerPage = getCardsPerPage();

            const totalPages =
                Math.ceil(brands.length / cardsPerPage);

            if (currentPage < totalPages - 1) {

                currentPage++;

                updateCarousel();
            }

        });
    }


    /* -----------------------------------------------------
       Keyboard navigation
       ----------------------------------------------------- */

    document.addEventListener("keydown", (event) => {

        if (event.key === "ArrowLeft") {

            if (currentPage > 0) {

                currentPage--;

                updateCarousel();
            }
        }

        if (event.key === "ArrowRight") {

            const cardsPerPage = getCardsPerPage();

            const totalPages =
                Math.ceil(brands.length / cardsPerPage);

            if (currentPage < totalPages - 1) {

                currentPage++;

                updateCarousel();
            }
        }

    });


    /* =====================================================
       PROJECTS
       ===================================================== */

    const projects = [

        {
            name: "CLEAR MEN",
            date: "01 2026 · Present",
            title: "Turning a global partnership into a digital experience.",
            description:
                "Developed and managed digital communication around the CLEAR MEN brand, connecting campaign objectives, social content, creators and cultural moments.",
            stats: [
                "100K+ Followers",
                "#1 Worldwide ranking",
                "Millions of impressions"
            ]
        },

        {
            name: "SIGNAL",
            date: "02 2026 · Present",
            title: "Building an engaging oral-care brand presence.",
            description:
                "Managed social media communication, content direction and creator-led storytelling to build a more authentic and engaging relationship between SIGNAL and its audience.",
            stats: [
                "13.4K Followers",
                "Authentic Community",
                "Engaging Content"
            ]
        },

        {
            name: "BIONNEX",
            date: "03 2026 · Present",
            title: "Building a coherent dermo-cosmetic brand presence.",
            description:
                "Managed content, social media direction and visual consistency to strengthen the brand image and create a more coherent digital presence.",
            stats: [
                "60+ Content managed",
                "Coherent Feed",
                "Strong Brand image"
            ]
        },

        {
            name: "CHEEZY",
            date: "2025 · 3 months",
            title: "Creating social communication people interact with.",
            description:
                "Managed social media content, community communication and campaign execution for a highly engaging food brand.",
            stats: [
                "+120 Content pieces",
                "High Community engagement",
                "Strong Brand loyalty"
            ]
        },

        {
            name: "FESTIVAL DES SPORTS D'ALGER",
            date: "04 2026",
            title: "Turning a live event into continuous digital content.",
            description:
                "Managed digital content and social communication around the Festival des Sports d'Alger, translating a live event into fast, relevant and engaging content.",
            stats: [
                "150 Content pieces",
                "3 Days",
                "Event Activation"
            ]
        },

        {
            name: "LG",
            date: "2025 · 3 months",
            title: "Managing content across a global technology brand.",
            description:
                "Managed digital content and creator-led communication while maintaining consistency across multiple content formats.",
            stats: [
                "100+ Content managed",
                "High Engagement",
                "15+ UGC profiles"
            ]
        },

        {
            name: "IFRI",
            date: "2024 · 3 months",
            title: "Connecting brand communication with creators.",
            description:
                "Managed influencer collaborations and content production to generate reach, engagement and brand visibility.",
            stats: [
                "20+ Influencers",
                "60+ Content managed",
                "Millions of views"
            ]
        },

        {
            name: "FACTEUR X",
            date: "Project",
            title: "Building communication around a strong brand idea.",
            description:
                "Worked across brand strategy, digital communication and content direction.",
            stats: [
                "Brand Strategy",
                "Digital Communication",
                "Content Direction"
            ]
        }

    ];


    const projectList =
        document.getElementById("project-list");


    if (projectList) {

        projectList.innerHTML = "";

        projects.forEach((project, index) => {

            const article =
                document.createElement("article");

            article.className = "project";

            article.innerHTML = `

                <div class="project-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="project-content">

                    <div class="project-top">

                        <h3 class="project-name">
                            ${project.name}
                        </h3>

                        <span class="project-date">
                            ${project.date}
                        </span>

                    </div>

                    <div class="project-copy">

                        <h4 class="project-title">
                            ${project.title}
                        </h4>

                        <p class="project-description">
                            ${project.description}
                        </p>

                    </div>

                    <div class="project-bottom">

                        ${project.stats.map(stat => `
                            <span>${stat}</span>
                        `).join("")}

                    </div>

                </div>
            `;

            projectList.appendChild(article);
        });
    }


    /* =====================================================
       BACKSTAGE MARQUEE
       
       Images expected:
       assets/images/backstage/
       
       clear-01.jpg
       clear-02.jpg
       clear-03.jpg
       festival-01.jpg
       bionnex-01.jpg
       bionnex-02.jpg
       bionnex-03.jpg
       ===================================================== */

    const backstageImages = [

        {
            file: "clear-01.jpg",
            label: "CLEAR MEN · Behind the scenes"
        },

        {
            file: "bionnex-01.jpg",
            label: "BIONNEX · Production"
        },

        {
            file: "clear-02.jpg",
            label: "CLEAR MEN · Production"
        },

        {
            file: "festival-01.jpg",
            label: "FESTIVAL · Live"
        },

        {
            file: "bionnex-02.jpg",
            label: "BIONNEX · Behind the scenes"
        },

        {
            file: "clear-03.jpg",
            label: "CLEAR MEN · Production"
        },

        {
            file: "bionnex-03.jpg",
            label: "BIONNEX · Production"
        }

    ];


    const marqueeTrack =
        document.getElementById("marqueeTrack");


    if (marqueeTrack) {

        /*
         * Duplicate the images so the animation
         * can loop seamlessly.
         */

        const completeSet = [
            ...backstageImages,
            ...backstageImages
        ];

        marqueeTrack.innerHTML =
            completeSet.map(image => `

                <figure class="backstage-item">

                    <img
                        src="assets/images/backstage/${image.file}"
                        alt="${image.label}"
                        loading="lazy"
                    >

                    <figcaption>
                        ${image.label}
                    </figcaption>

                </figure>

            `).join("");
    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".kpi-card, .project, .approach-row, .about-grid, .backstage-section"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });
    }


    /* =====================================================
       RESIZE
       ===================================================== */

    let resizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            updateCarousel();

        }, 120);

    });


    /* =====================================================
       INITIALIZE
       ===================================================== */

    renderBrands();

    /*
     * Small delay lets the browser calculate
     * the carousel dimensions correctly.
     */

    requestAnimationFrame(() => {
        updateCarousel();
    });


});

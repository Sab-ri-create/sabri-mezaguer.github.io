/* =========================================================
   SABRI MEZAGUER — PORTFOLIO
   Carousel + Navigation + Project interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     1. BRAND DATA
     ======================================================= */

  const brands = [
    {
      id: "clear",
      name: "CLEAR",
      year: "2026 · Present",
      logo: "assets/images/logos/clear.png",
      image: "assets/images/projects/clear.jpg",
      kpis: [
        "100K+ followers",
        "#1 worldwide ranking",
        "Millions of impressions"
      ],
      description:
        "Brand management, social media strategy, digital campaigns and content activation."
    },

    {
      id: "cheezy",
      name: "CHEEZY",
      year: "2025 · 3 months",
      logo: "assets/images/logos/cheezy.png",
      image: "assets/images/projects/cheezy.jpg",
      kpis: [
        "+120 content pieces managed",
        "High community engagement",
        "Strong brand loyalty & interaction"
      ],
      description:
        "Social media management, content planning, community activation and brand communication."
    },

    {
      id: "signal",
      name: "SIGNAL",
      year: "2026 · Present",
      logo: "assets/images/logos/signal.png",
      image: "assets/images/projects/signal.jpg",
      kpis: [
        "13.4K followers",
        "Authentic community",
        "Engaging content",
        "Positive impact"
      ],
      description:
        "Brand and social media management, content strategy and creator-led storytelling."
    },

    {
      id: "bionnex",
      name: "BIONNEX",
      year: "2026 · Present",
      logo: "assets/images/logos/bionnex.png",
      image: "assets/images/projects/bionnex.jpg",
      kpis: [
        "60+ content managed",
        "Coherent feed",
        "Engaged community",
        "Strong brand image"
      ],
      description:
        "Brand management, social media strategy, content planning and digital activation."
    },

    {
      id: "ifri",
      name: "IFRI",
      year: "2024 · 3 months",
      logo: "assets/images/logos/ifri.png",
      image: "assets/images/projects/ifri.jpg",
      kpis: [
        "+20 influencers collaborated",
        "+60 content managed",
        "Millions of views generated"
      ],
      description:
        "Influencer marketing, content production and digital campaign management."
    },

    {
      id: "lg",
      name: "LG",
      year: "2025 · 3 months",
      logo: "assets/images/logos/lg.png",
      image: "assets/images/projects/lg.jpg",
      kpis: [
        "100+ content managed",
        "High engagement",
        "15+ UGC profiles managed"
      ],
      description:
        "Social media management, UGC activation, content strategy and creator coordination."
    },

    {
      id: "facteur-x",
      name: "FACTEUR X",
      year: "Present",
      logo: "assets/images/logos/facteur-x.png",
      image: "assets/images/projects/facteur-x.jpg",
      kpis: [
        "Full brand activation",
        "Content strategy",
        "Digital communication"
      ],
      description:
        "End-to-end communication, content management and digital activation."
    },

    {
      id: "festival",
      name: "FESTIVAL DES SPORTS D'ALGER",
      year: "2026",
      logo: "assets/images/logos/festival.png",
      image: "assets/images/projects/festival.jpg",
      kpis: [
        "150 content posted",
        "3 days of full rush",
        "Strong engagement"
      ],
      description:
        "Real-time social media management, rapid content production and event communication."
    }
  ];


  /* =======================================================
     2. ELEMENTS
     ======================================================= */

  const track = document.getElementById("carTrack");
  const viewport = document.getElementById("carViewport");
  const prevButton = document.getElementById("carPrev");
  const nextButton = document.getElementById("carNext");
  const dotsContainer = document.getElementById("carDots");
  const projectsContainer = document.getElementById("projects");


  if (!track) {
    console.warn("Carousel track #carTrack not found.");
    return;
  }


  /* =======================================================
     3. CREATE CAROUSEL
     ======================================================= */

  brands.forEach((brand, index) => {

    const li = document.createElement("li");

    li.className = "brand-card";

    li.dataset.brand = brand.id;

    li.innerHTML = `
      <button
        class="brand-card-inner"
        type="button"
        aria-label="View ${brand.name} project"
      >

        <div class="brand-card-image">

          ${
            brand.logo
              ? `<img
                  src="${brand.logo}"
                  alt="${brand.name} logo"
                  class="brand-logo"
                  loading="lazy"
                >`
              : `<span class="brand-name-fallback">${brand.name}</span>`
          }

          <div class="brand-hover">

            <span class="brand-hover-label">
              KEY RESULTS
            </span>

            <div class="brand-kpis">

              ${brand.kpis
                .map(
                  (kpi) => `
                    <span class="brand-kpi">
                      ${kpi}
                    </span>
                  `
                )
                .join("")}

            </div>

            <span class="brand-view">
              View project ↗
            </span>

          </div>

        </div>

        <div class="brand-card-info">

          <div>
            <h3>${brand.name}</h3>
            <span>${brand.year}</span>
          </div>

          <span class="brand-arrow">↗</span>

        </div>

      </button>
    `;

    track.appendChild(li);
  });


  /* =======================================================
     4. CREATE PROJECT SECTIONS
     ======================================================= */

  if (projectsContainer) {

    projectsContainer.innerHTML = "";

    brands.forEach((brand, index) => {

      const project = document.createElement("section");

      project.className = "project-block";

      project.id = `project-${brand.id}`;

      project.innerHTML = `

        <div class="wrap">

          <div class="project-number">
            ${String(index + 1).padStart(2, "0")}
          </div>

          <div class="project-grid">

            <div class="project-media">

              ${
                brand.image
                  ? `
                    <img
                      src="${brand.image}"
                      alt="${brand.name} project"
                      loading="lazy"
                    >
                  `
                  : `
                    <div class="project-placeholder">
                      ${brand.name}
                    </div>
                  `
              }

            </div>

            <div class="project-content">

              <span class="project-label">
                ${brand.year}
              </span>

              <h2 class="display">
                ${brand.name}
              </h2>

              <p>
                ${brand.description}
              </p>

              <div class="project-results">

                ${brand.kpis
                  .map(
                    (kpi) => `
                      <div class="result">
                        <span>—</span>
                        <strong>${kpi}</strong>
                      </div>
                    `
                  )
                  .join("")}

              </div>

              <button
                class="back-to-work"
                type="button"
              >
                ↑ Back to selected work
              </button>

            </div>

          </div>

        </div>
      `;

      projectsContainer.appendChild(project);
    });
  }


  /* =======================================================
     5. CARD CLICK → PROJECT
     ======================================================= */

  const brandCards = document.querySelectorAll(".brand-card");

  brandCards.forEach((card) => {

    const button = card.querySelector(".brand-card-inner");

    button.addEventListener("click", () => {

      const brandId = card.dataset.brand;

      const project = document.getElementById(
        `project-${brandId}`
      );

      if (!project) return;

      project.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.replaceState(
        null,
        "",
        `#project-${brandId}`
      );

    });

  });


  /* =======================================================
     6. BACK TO WORK BUTTON
     ======================================================= */

  document.querySelectorAll(".back-to-work").forEach((button) => {

    button.addEventListener("click", () => {

      const workSection = document.getElementById("work");

      if (!workSection) return;

      workSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.replaceState(
        null,
        "",
        "#work"
      );

    });

  });


  /* =======================================================
     7. CAROUSEL
     ======================================================= */

  let currentIndex = 0;

  const getCardsPerView = () => {

    const width = window.innerWidth;

    if (width < 600) return 1;

    if (width < 900) return 2;

    if (width < 1200) return 3;

    return 4;

  };


  const getMaxIndex = () => {

    const visible = getCardsPerView();

    return Math.max(
      0,
      brands.length - visible
    );

  };


  const updateCarousel = (animate = true) => {

    const visible = getCardsPerView();

    const maxIndex = getMaxIndex();

    currentIndex = Math.min(
      Math.max(currentIndex, 0),
      maxIndex
    );

    const cardWidth =
      100 / visible;

    track.style.transition =
      animate
        ? "transform 0.55s cubic-bezier(.22,.61,.36,1)"
        : "none";

    track.style.transform =
      `translateX(-${currentIndex * cardWidth}%)`;

    updateButtons();

    updateDots();

  };


  /* =======================================================
     8. NEXT / PREVIOUS
     ======================================================= */

  const next = () => {

    const maxIndex = getMaxIndex();

    if (currentIndex < maxIndex) {

      currentIndex++;

    } else {

      currentIndex = 0;

    }

    updateCarousel();

  };


  const previous = () => {

    const maxIndex = getMaxIndex();

    if (currentIndex > 0) {

      currentIndex--;

    } else {

      currentIndex = maxIndex;

    }

    updateCarousel();

  };


  if (nextButton) {

    nextButton.addEventListener(
      "click",
      next
    );

  }


  if (prevButton) {

    prevButton.addEventListener(
      "click",
      previous
    );

  }


  /* =======================================================
     9. BUTTON STATE
     ======================================================= */

  const updateButtons = () => {

    if (!prevButton || !nextButton) return;

    const maxIndex = getMaxIndex();

    if (brands.length <= getCardsPerView()) {

      prevButton.disabled = true;
      nextButton.disabled = true;

      return;
    }

    prevButton.disabled = false;
    nextButton.disabled = false;

  };


  /* =======================================================
     10. DOTS
     ======================================================= */

  const updateDots = () => {

    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";

    const maxIndex = getMaxIndex();

    if (maxIndex <= 0) return;

    for (let i = 0; i <= maxIndex; i++) {

      const dot = document.createElement("button");

      dot.type = "button";

      dot.className =
        i === currentIndex
          ? "car-dot active"
          : "car-dot";

      dot.setAttribute(
        "aria-label",
        `Go to carousel position ${i + 1}`
      );

      dot.addEventListener("click", () => {

        currentIndex = i;

        updateCarousel();

      });

      dotsContainer.appendChild(dot);

    }

  };


  /* =======================================================
     11. KEYBOARD CONTROL
     ======================================================= */

  if (viewport) {

    viewport.addEventListener(
      "keydown",
      (event) => {

        if (event.key === "ArrowRight") {

          event.preventDefault();

          next();

        }

        if (event.key === "ArrowLeft") {

          event.preventDefault();

          previous();

        }

      }
    );

  }


  /* =======================================================
     12. TOUCH / SWIPE
     ======================================================= */

  let touchStartX = 0;
  let touchEndX = 0;

  if (viewport) {

    viewport.addEventListener(
      "touchstart",
      (event) => {

        touchStartX =
          event.changedTouches[0].screenX;

      },
      { passive: true }
    );


    viewport.addEventListener(
      "touchend",
      (event) => {

        touchEndX =
          event.changedTouches[0].screenX;

        const distance =
          touchStartX - touchEndX;

        if (Math.abs(distance) < 50) return;

        if (distance > 0) {

          next();

        } else {

          previous();

        }

      },
      { passive: true }
    );

  }


  /* =======================================================
     13. RESPONSIVE RESIZE
     ======================================================= */

  let resizeTimer;

  window.addEventListener(
    "resize",
    () => {

      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {

        currentIndex = Math.min(
          currentIndex,
          getMaxIndex()
        );

        updateCarousel(false);

      }, 150);

    }
  );


  /* =======================================================
     14. MOBILE MENU
     ======================================================= */

  const burger =
    document.getElementById("burgerBtn");

  const nav =
    document.getElementById("primaryNav");

  if (burger && nav) {

    burger.addEventListener(
      "click",
      () => {

        const isOpen =
          burger.getAttribute(
            "aria-expanded"
          ) === "true";

        burger.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );

        nav.classList.toggle(
          "is-open",
          !isOpen
        );

      }
    );


    nav.querySelectorAll("a").forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          burger.setAttribute(
            "aria-expanded",
            "false"
          );

          nav.classList.remove(
            "is-open"
          );

        }
      );

    });

  }


  /* =======================================================
     15. SMOOTH ANCHOR LINKS
     ======================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener(
        "click",
        (event) => {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) return;

          const target =
            document.querySelector(targetId);

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

          history.replaceState(
            null,
            "",
            targetId
          );

        }
      );

    });


  /* =======================================================
     16. INITIALIZE
     ======================================================= */

  updateCarousel(false);

});

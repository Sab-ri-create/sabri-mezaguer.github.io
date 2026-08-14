/* =========================================================
   SABRI MEZAGUER — PORTFOLIO
   SELECTED WORK / BRAND CAROUSEL
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     1. BRAND DATA
     Order: newest → oldest
     Facteur X intentionally kept last
     ======================================================= */

  const brands = [
    {
      id: "signal",
      name: "SIGNAL",
      year: "2026 · Present",

      title: "Building an engaging oral-care brand presence.",

      description:
        "Managed social media communication, content direction and creator-led storytelling to build a more authentic and engaging relationship between SIGNAL and its audience.",

      kpis: [
        "13.4K Followers",
        "Authentic community",
        "Engaging content",
        "Positive impact"
      ]
    },

    {
      id: "bionnex",
      name: "BIONNEX",
      year: "2026 · Present",

      title: "Building a coherent dermo-cosmetic brand presence.",

      description:
        "Managed content, social media direction and visual consistency to strengthen the brand image and create a more coherent digital presence.",

      kpis: [
        "60+ Content managed",
        "Coherent feed",
        "Engaged community",
        "Strong brand image"
      ]
    },

    {
      id: "clear",
      name: "CLEAR MEN",
      year: "2026 · Present",

      title: "Turning a global partnership into a digital experience.",

      description:
        "Developed and managed digital communication around the CLEAR MEN brand, connecting campaign objectives, social content, creators and cultural moments.",

      kpis: [
        "100K+ Followers",
        "#1 Worldwide ranking",
        "Millions of impressions"
      ]
    },

    {
      id: "festival",
      name: "FESTIVAL DES SPORTS D'ALGER",
      year: "2026",

      title: "Managing communication in a high-pressure environment.",

      description:
        "",

      kpis: [
        "150 Content posted",
        "3 days of full rush",
        "High engagement"
      ]
    },

    {
      id: "cheezy",
      name: "CHEEZY",
      year: "2025 · 3 months",

      title: "Creating social communication people interact with.",

      description:
        "",

      kpis: [
        "+120 Content pieces managed",
        "High community engagement",
        "Strong brand loyalty & interaction"
      ]
    },

    {
      id: "lg",
      name: "LG",
      year: "2025 · 3 months",

      title: "Managing digital content and community activation.",

      description:
        "",

      kpis: [
        "100+ Content managed",
        "High engagement",
        "15+ UGC profiles managed"
      ]
    },

    {
      id: "ifri",
      name: "IFRI",
      year: "2024 · 3 months",

      title: "Building reach through creator-led communication.",

      description:
        "",

      kpis: [
        "+20 Influencers collaborated",
        "+60 Content managed",
        "Millions of views generated"
      ]
    },

    {
      id: "facteur-x",
      name: "FACTEUR X",
      year: "Present",

      title: "Brand communication, content and digital activation.",

      description:
        "",

      kpis: [
        "End-to-end brand management",
        "Content strategy",
        "Digital activation"
      ]
    }
  ];


  /* =======================================================
     2. ELEMENTS
     ======================================================= */

  const track = document.getElementById("carTrack");
  const dotsContainer = document.getElementById("carDots");
  const prevButton = document.getElementById("carPrev");
  const nextButton = document.getElementById("carNext");
  const viewport = document.getElementById("carViewport");
  const projectsContainer = document.getElementById("projects");

  if (!track || !dotsContainer || !prevButton || !nextButton) {
    console.error("Carousel elements are missing from the HTML.");
    return;
  }


  /* =======================================================
     3. STATE
     ======================================================= */

  let currentIndex = 0;


  /* =======================================================
     4. BUILD CAROUSEL
     ======================================================= */

  function createCarousel() {

    track.innerHTML = "";

    brands.forEach((brand, index) => {

      const item = document.createElement("li");

      item.className = "car-item";

      item.dataset.index = index;
      item.dataset.brand = brand.id;

      item.setAttribute("role", "group");
      item.setAttribute(
        "aria-label",
        `${index + 1} of ${brands.length}: ${brand.name}`
      );

      item.innerHTML = `
        <button
          class="brand-card"
          type="button"
          data-brand-index="${index}"
          aria-label="View ${brand.name} project"
        >

          <div class="brand-card-top">

            <span class="brand-number">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="brand-period">
              ${brand.year}
            </span>

          </div>

          <div class="brand-card-center">

            <h3>${brand.name}</h3>

          </div>

          <div class="brand-card-bottom">

            <div class="brand-kpis">

              ${brand.kpis
                .slice(0, 3)
                .map((kpi) => `
                  <span>${kpi}</span>
                `)
                .join("")}

            </div>

            <span class="brand-view">
              View project ↗
            </span>

          </div>

        </button>
      `;

      track.appendChild(item);
    });


    /* Click on a brand */

    document.querySelectorAll(".brand-card").forEach((card) => {

      card.addEventListener("click", () => {

        const index = Number(card.dataset.brandIndex);

        currentIndex = index;

        updateCarousel();

        const target = document.getElementById(
          `project-${brands[index].id}`
        );

        if (target) {

          setTimeout(() => {

            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }, 150);

        }

      });

    });

  }


  /* =======================================================
     5. BUILD DOTS
     ======================================================= */

  function createDots() {

    dotsContainer.innerHTML = "";

    brands.forEach((brand, index) => {

      const dot = document.createElement("button");

      dot.type = "button";

      dot.className = "car-dot";

      dot.dataset.index = index;

      dot.setAttribute(
        "aria-label",
        `Show ${brand.name}`
      );

      dot.addEventListener("click", () => {

        currentIndex = index;

        updateCarousel();

      });

      dotsContainer.appendChild(dot);

    });

  }


  /* =======================================================
     6. UPDATE CAROUSEL
     ======================================================= */

  function updateCarousel() {

    /*
      Each slide occupies 100% of the viewport.
      Only one brand is visible at a time.
    */

    track.style.transform =
      `translate3d(-${currentIndex * 100}%, 0, 0)`;


    /* Active slide */

    document
      .querySelectorAll(".car-item")
      .forEach((item, index) => {

        item.classList.toggle(
          "is-active",
          index === currentIndex
        );

      });


    /* Active dot */

    document
      .querySelectorAll(".car-dot")
      .forEach((dot, index) => {

        dot.classList.toggle(
          "is-active",
          index === currentIndex
        );

      });


    /* Navigation */

    prevButton.disabled = false;
    nextButton.disabled = false;


    /*
      Keep the carousel infinite.
      This feels more natural for a portfolio.
    */

    prevButton.setAttribute(
      "aria-label",
      `Previous brand`
    );

    nextButton.setAttribute(
      "aria-label",
      `Next brand`
    );

  }


  /* =======================================================
     7. NEXT / PREVIOUS
     ======================================================= */

  function nextSlide() {

    currentIndex++;

    if (currentIndex >= brands.length) {
      currentIndex = 0;
    }

    updateCarousel();

  }


  function previousSlide() {

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = brands.length - 1;
    }

    updateCarousel();

  }


  nextButton.addEventListener("click", nextSlide);

  prevButton.addEventListener("click", previousSlide);


  /* =======================================================
     8. KEYBOARD CONTROL
     ======================================================= */

  if (viewport) {

    viewport.addEventListener("keydown", (event) => {

      if (event.key === "ArrowRight") {

        event.preventDefault();

        nextSlide();

      }

      if (event.key === "ArrowLeft") {

        event.preventDefault();

        previousSlide();

      }

    });

  }


  /* =======================================================
     9. TOUCH / SWIPE
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

        handleSwipe();

      },
      { passive: true }
    );

  }


  function handleSwipe() {

    const distance =
      touchStartX - touchEndX;

    /*
      Ignore very small movements.
    */

    if (Math.abs(distance) < 50) {
      return;
    }

    if (distance > 0) {

      nextSlide();

    } else {

      previousSlide();

    }

  }


  /* =======================================================
     10. BUILD PROJECT DETAIL SECTIONS
     ======================================================= */

  function createProjectSections() {

    if (!projectsContainer) {
      return;
    }

    projectsContainer.innerHTML = "";


    brands.forEach((brand, index) => {

      const section =
        document.createElement("section");

      section.className = "project-detail";

      section.id =
        `project-${brand.id}`;


      /*
        Keep the same visual hierarchy for every brand.
      */

      section.innerHTML = `

        <div class="wrap">

          <div class="project-detail-head">

            <div class="project-meta">

              <span class="project-index">
                ${String(index + 1).padStart(2, "0")}
              </span>

              <span class="project-brand">
                ${brand.name}
              </span>

            </div>

            <span class="project-period">
              ${brand.year}
            </span>

          </div>


          <div class="project-detail-content">

            <h2 class="display">
              ${brand.title}
            </h2>

            ${
              brand.description
                ? `<p class="project-description">
                    ${brand.description}
                  </p>`
                : ""
            }

          </div>


          <div class="project-kpi-grid">

            ${brand.kpis
              .map((kpi) => {

                /*
                  Split the KPI into a highlighted first part
                  when possible.
                */

                const parts =
                  kpi.match(
                    /^(\+?\#?\d[\d.K+]*|HIGH|AUTHENTIC|STRONG|Millions|End-to-end)(.*)$/i
                  );

                if (parts) {

                  return `
                    <div class="project-kpi">
                      <strong>${parts[1]}</strong>
                      <span>${parts[2]}</span>
                    </div>
                  `;

                }

                return `
                  <div class="project-kpi">
                    <strong>${kpi}</strong>
                  </div>
                `;

              })
              .join("")}

          </div>


          <div class="project-detail-footer">

            <span>
              ${brand.name}
            </span>

            <button
              type="button"
              class="back-to-work"
              data-back-to-work
            >
              Back to selected work ↑
            </button>

          </div>

        </div>
      `;


      projectsContainer.appendChild(section);

    });


    /* Back to carousel buttons */

    document
      .querySelectorAll("[data-back-to-work]")
      .forEach((button) => {

        button.addEventListener("click", () => {

          const workSection =
            document.getElementById("work");

          if (workSection) {

            workSection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        });

      });

  }


  /* =======================================================
     11. INITIALIZE
     ======================================================= */

  createCarousel();

  createDots();

  createProjectSections();

  updateCarousel();


  /* =======================================================
     12. MOBILE MENU
     ======================================================= */

  const burger =
    document.getElementById("burgerBtn");

  const nav =
    document.getElementById("primaryNav");

  if (burger && nav) {

    burger.addEventListener("click", () => {

      const isOpen =
        burger.getAttribute("aria-expanded") === "true";

      burger.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      nav.classList.toggle(
        "is-open",
        !isOpen
      );

    });


    /* Close menu after clicking a link */

    nav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        burger.setAttribute(
          "aria-expanded",
          "false"
        );

        nav.classList.remove(
          "is-open"
        );

      });

    });

  }


  /* =======================================================
     13. ESC KEY
     ======================================================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      if (burger && nav) {

        burger.setAttribute(
          "aria-expanded",
          "false"
        );

        nav.classList.remove(
          "is-open"
        );

      }

    }

  });

});

/* =========================================================
   SABRI MEZAGUER — PORTFOLIO
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     DATA — BRANDS
     ======================================================= */

  const brands = [
    {
      id: "clear",
      name: "CLEAR",
      year: "2026",
      duration: "Present",
      kpis: [
        "100K+ followers",
        "#1 worldwide ranking",
        "Millions of impressions"
      ],
      description:
        "Brand and digital work focused on social media, content strategy and campaign execution."
    },

    {
      id: "cheezy",
      name: "CHEEZY",
      year: "2025",
      duration: "3 months",
      kpis: [
        "+120 content pieces managed",
        "High community engagement",
        "Strong brand loyalty & interaction"
      ],
      description:
        "Social media and content management focused on creating an active community and strengthening brand interaction."
    },

    {
      id: "signal",
      name: "SIGNAL",
      year: "2026",
      duration: "Present",
      kpis: [
        "13.4K followers",
        "Authentic community",
        "Engaging content",
        "Positive impact"
      ],
      description:
        "Brand management, social media strategy and content activation designed around everyday oral care and engaging storytelling."
    },

    {
      id: "bionnex",
      name: "BIONNEX",
      year: "2026",
      duration: "Present",
      kpis: [
        "60+ content managed",
        "Coherent feed",
        "Engaged community",
        "Strong brand image"
      ],
      description:
        "Brand and social media management for a dermo-cosmetic portfolio, combining content strategy, visual consistency and digital activation."
    },

    {
      id: "ifri",
      name: "IFRI",
      year: "2024",
      duration: "3 months",
      kpis: [
        "+20 influencers collaborated",
        "+60 content managed",
        "Millions of views generated"
      ],
      description:
        "Influencer marketing and social content activation focused on reach, creator partnerships and audience engagement."
    },

    {
      id: "lg",
      name: "LG",
      year: "2025",
      duration: "3 months",
      kpis: [
        "100+ content managed",
        "High engagement",
        "15+ UGC profiles managed"
      ],
      description:
        "Social media and UGC management supporting digital communication and community-driven content."
    },

    {
      id: "facteur-x",
      name: "FACTEUR X",
      year: "2026",
      duration: "Present",
      kpis: [
        "Integrated digital communication",
        "Content strategy",
        "Social media activation"
      ],
      description:
        "End-to-end communication work covering strategy, content, social media and digital activation."
    },

    {
      id: "festival",
      name: "FESTIVAL DES SPORTS D'ALGER",
      year: "2026",
      duration: "Event",
      kpis: [
        "150 content pieces",
        "3 days of full rush",
        "Strong engagement"
      ],
      description:
        "High-intensity event communication delivered across three days, from content production to real-time social media publishing."
    }
  ];


  /* =======================================================
     CAROUSEL ELEMENTS
     ======================================================= */

  const track = document.getElementById("carTrack");
  const viewport = document.getElementById("carViewport");
  const prevButton = document.getElementById("carPrev");
  const nextButton = document.getElementById("carNext");
  const dotsContainer = document.getElementById("carDots");

  if (!track || !viewport) {
    console.warn("Carousel elements not found.");
    return;
  }


  /* =======================================================
     CREATE BRAND CARDS
     ======================================================= */

  track.innerHTML = "";

  brands.forEach((brand, index) => {

    const li = document.createElement("li");

    li.className = "brand-card";
    li.dataset.brand = brand.id;
    li.dataset.index = index;

    li.innerHTML = `
      <div class="brand-card-inner">

        <div class="brand-placeholder">
          <span>${brand.name}</span>
        </div>

        <div class="brand-name">
          ${brand.name}
        </div>

        <div class="brand-meta">
          <span>${brand.year}</span>
          <span>${brand.duration}</span>
        </div>

        <div class="brand-kpis">

          <h3>${brand.name}</h3>

          ${brand.kpis
            .map(kpi => `<p>${kpi}</p>`)
            .join("")}

          <span class="view-project">
            View project ↗
          </span>

        </div>

      </div>
    `;

    track.appendChild(li);
  });


  /* =======================================================
     DOTS
     ======================================================= */

  dotsContainer.innerHTML = "";

  brands.forEach((brand, index) => {

    const dot = document.createElement("button");

    dot.type = "button";
    dot.setAttribute("aria-label", `Go to ${brand.name}`);

    if (index === 0) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      goToSlide(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = [...dotsContainer.querySelectorAll("button")];


  /* =======================================================
     CAROUSEL STATE
     ======================================================= */

  let currentIndex = 0;

  /*
     Desktop:
     3 cards visible

     Tablet:
     approximately 2 cards

     Mobile:
     1 card
  */

  function getVisibleCards() {

    const width = window.innerWidth;

    if (width <= 720) {
      return 1;
    }

    if (width <= 1100) {
      return 2;
    }

    return 3;
  }


  function getMaxIndex() {
    return Math.max(0, brands.length - getVisibleCards());
  }


  /* =======================================================
     CALCULATE CAROUSEL POSITION
     ======================================================= */

  function getCardStep() {

    const card = track.querySelector(".brand-card");

    if (!card) return 0;

    const style = window.getComputedStyle(track);

    const gap = parseFloat(style.columnGap || style.gap || 0);

    return card.offsetWidth + gap;
  }


  function updateCarousel(animate = true) {

    const step = getCardStep();

    if (!step) return;

    if (!animate) {
      track.style.transition = "none";
    } else {
      track.style.transition =
        "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)";
    }

    track.style.transform =
      `translate3d(-${currentIndex * step}px, 0, 0)`;


    /* Update dots */

    dots.forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index === currentIndex
      );
    });


    /* Update buttons */

    if (prevButton) {
      prevButton.disabled = currentIndex === 0;
      prevButton.style.opacity =
        currentIndex === 0 ? "0.35" : "1";
    }

    if (nextButton) {
      nextButton.disabled =
        currentIndex >= getMaxIndex();

      nextButton.style.opacity =
        currentIndex >= getMaxIndex()
          ? "0.35"
          : "1";
    }
  }


  /* =======================================================
     GO TO SLIDE
     ======================================================= */

  function goToSlide(index) {

    const maxIndex = getMaxIndex();

    currentIndex = Math.max(
      0,
      Math.min(index, maxIndex)
    );

    updateCarousel(true);
  }


  /* =======================================================
     PREVIOUS / NEXT
     ======================================================= */

  if (prevButton) {

    prevButton.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
    });

  }


  if (nextButton) {

    nextButton.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
    });

  }


  /* =======================================================
     KEYBOARD NAVIGATION
     ======================================================= */

  viewport.addEventListener("keydown", event => {

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(currentIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(currentIndex - 1);
    }

  });


  /* =======================================================
     TOUCH / SWIPE
     ======================================================= */

  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener(
    "touchstart",
    event => {

      touchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


  viewport.addEventListener(
    "touchend",
    event => {

      touchEndX =
        event.changedTouches[0].screenX;

      const difference =
        touchStartX - touchEndX;

      const threshold = 50;

      if (Math.abs(difference) < threshold) {
        return;
      }

      if (difference > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }

    },
    { passive: true }
  );


  /* =======================================================
     MOUSE WHEEL
     ======================================================= */

  let wheelLocked = false;

  viewport.addEventListener(
    "wheel",
    event => {

      if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) {
        return;
      }

      if (wheelLocked) return;

      wheelLocked = true;

      if (event.deltaX > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }

      setTimeout(() => {
        wheelLocked = false;
      }, 500);

    },
    { passive: true }
  );


  /* =======================================================
     BRAND CLICK → PROJECT
     ======================================================= */

  track.addEventListener("click", event => {

    const card =
      event.target.closest(".brand-card");

    if (!card) return;

    const brandId =
      card.dataset.brand;

    const project =
      document.getElementById(
        `project-${brandId}`
      );

    if (!project) return;

    project.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });


  /* =======================================================
     CREATE PROJECT SECTIONS
     ======================================================= */

  const projectsContainer =
    document.getElementById("projects");

  if (projectsContainer) {

    projectsContainer.innerHTML = "";

    brands.forEach((brand, index) => {

      const project =
        document.createElement("section");

      project.className =
        "project-detail brand-project";

      project.id =
        `project-${brand.id}`;

      project.innerHTML = `

        <div class="project-detail-inner">

          <div class="project-header">

            <div>

              <div class="sec-tag">

                <span class="num">
                  ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="dash"></span>

                <span class="label">
                  ${brand.name}
                </span>

              </div>

              <h2 class="project-title">
                ${brand.name}
              </h2>

            </div>


            <div class="project-meta">

              <strong>
                Collaboration
              </strong>

              <span>
                ${brand.year} · ${brand.duration}
              </span>

            </div>

          </div>


          <div class="project-image">

            <div class="project-placeholder">

              <span>
                ${brand.name}
              </span>

            </div>

          </div>


          <div class="project-info">

            <div>

              <p class="project-description">
                ${brand.description}
              </p>

            </div>


            <div class="project-kpis">

              ${brand.kpis
                .map(kpi => `
                  <div class="project-kpi">
                    <strong>${kpi.split(" ")[0]}</strong>
                    <span>
                      ${kpi.substring(kpi.indexOf(" ") + 1)}
                    </span>
                  </div>
                `)
                .join("")}

            </div>

          </div>

        </div>
      `;

      projectsContainer.appendChild(project);

    });

  }


  /* =======================================================
     RESPONSIVE RESIZE
     ======================================================= */

  let resizeTimer;

  window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

      currentIndex =
        Math.min(
          currentIndex,
          getMaxIndex()
        );

      updateCarousel(false);

    }, 150);

  });


  /* =======================================================
     INITIALIZE
     ======================================================= */

  updateCarousel(false);


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const burger =
    document.getElementById("burgerBtn");

  const nav =
    document.getElementById("primaryNav");

  if (burger && nav) {

    burger.addEventListener("click", () => {

      const isOpen =
        nav.classList.toggle("open");

      burger.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });


    nav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

        burger.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* =======================================================
     HEADER SCROLL EFFECT
     ======================================================= */

  const header =
    document.querySelector(".site-header");

  if (header) {

    window.addEventListener(
      "scroll",
      () => {

        if (window.scrollY > 30) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }

      },
      { passive: true }
    );

  }

});

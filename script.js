document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CAROUSEL
    ===================================================== */

    const track = document.getElementById("carouselTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const progress = document.getElementById("carouselProgress");

    const cards = Array.from(
        track.querySelectorAll(".brand-card")
    );

    let currentIndex = 0;


    /* -----------------------------------------------------
       CREATE PROGRESS DOTS
    ----------------------------------------------------- */

    cards.forEach((_, index) => {

        const dot = document.createElement("div");

        dot.classList.add("progress-dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });

        progress.appendChild(dot);

    });


    const dots = Array.from(
        progress.querySelectorAll(".progress-dot")
    );


    /* -----------------------------------------------------
       GET CARD WIDTH
    ----------------------------------------------------- */

    function getCardWidth() {

        if (!cards.length) {
            return 0;
        }

        const card = cards[0];

        const style = window.getComputedStyle(track);

        const gap = parseFloat(style.columnGap) || 0;

        return card.getBoundingClientRect().width + gap;
    }


    /* -----------------------------------------------------
       NUMBER OF VISIBLE CARDS
    ----------------------------------------------------- */

    function getVisibleCards() {

        if (window.innerWidth <= 700) {
            return 1;
        }

        if (window.innerWidth <= 1100) {
            return 2;
        }

        return 4;
    }


    /* -----------------------------------------------------
       UPDATE
    ----------------------------------------------------- */

    function updateCarousel() {

        const visibleCards = getVisibleCards();

        const maxIndex = Math.max(
            0,
            cards.length - visibleCards
        );

        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        const amount =
            currentIndex * getCardWidth();

        track.style.transform =
            `translateX(-${amount}px)`;


        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });


        prevBtn.disabled =
            currentIndex === 0;

        nextBtn.disabled =
            currentIndex >= maxIndex;

    }


    /* -----------------------------------------------------
       NEXT
    ----------------------------------------------------- */

    nextBtn.addEventListener("click", () => {

        const visibleCards = getVisibleCards();

        const maxIndex = Math.max(
            0,
            cards.length - visibleCards
        );

        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }

    });


    /* -----------------------------------------------------
       PREVIOUS
    ----------------------------------------------------- */

    prevBtn.addEventListener("click", () => {

        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }

    });


    /* -----------------------------------------------------
       RESIZE
    ----------------------------------------------------- */

    window.addEventListener("resize", () => {
        updateCarousel();
    });


    /* -----------------------------------------------------
       KEYBOARD
    ----------------------------------------------------- */

    document.addEventListener("keydown", (event) => {

        if (event.key === "ArrowRight") {
            nextBtn.click();
        }

        if (event.key === "ArrowLeft") {
            prevBtn.click();
        }

    });


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       INITIALIZE
    ===================================================== */

    updateCarousel();

});

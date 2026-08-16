# Sabri Mezaguer — Portfolio

Personal portfolio website for **Sabri Mezaguer**, Brand Manager / Social Media Manager / Digital professional.

The website is designed for an **international audience, especially recruiters and companies in Canada**.

The objective is to communicate **strategic thinking, brand management, digital communication and execution**, rather than presenting the portfolio as a simple graphic-design showcase.

---

## 1. Design Direction

### Overall aesthetic

* Premium
* Editorial
* Minimal
* Corporate but contemporary
* Strong typography
* Generous whitespace
* Structured grid
* Subtle interactions
* No generic Canva/template feeling
* Inspired by premium agency portfolios and modern editorial websites

### Main visual identity

The website should use a warm off-white / cream background as the main canvas.

Accent color:

* Deep muted green
* Used selectively for buttons, lines, active states and small details

The design must remain elegant and restrained.

---

# 2. Website Structure

The website must contain the following sections:

1. Navigation
2. Hero
3. Selected Work / Brands
4. The Scale of the Work — KPIs
5. Selected Brand Work
6. Behind the Brands — moving backstage gallery
7. Approach / How I Work
8. About
9. Contact
10. Footer

Do NOT use artificial numbering such as:

* 01 / 05
* 02 / 05
* 03 / 05

The sections should feel like one continuous portfolio experience.

---

# 3. Hero

Main positioning:

**BRAND MANAGEMENT / SOCIAL MEDIA / DIGITAL**

Main headline:

**I turn strategy into brands people remember.**

Supporting text:

**I connect business objectives, brand strategy and creative execution to build communication people actually notice.**

Primary CTA:

**Explore my work ↘**

Secondary CTA:

**Let's talk ↗**

The hero should immediately communicate that Sabri is not only a content manager.

The positioning is:

**Strategy × Culture × Execution**

---

# 4. Selected Work — Brands Carousel

This is one of the most important sections.

Title:

**Brands I've worked with.**

Supporting text:

**A selection of brands, campaigns and digital experiences I've helped build, manage and activate.**

## Carousel behaviour

The carousel must display **exactly 3 cards at a time on desktop**.

There must always be:

* A clearly visible LEFT arrow
* A clearly visible RIGHT arrow
* 3 brand cards
* Smooth horizontal movement
* No broken layout
* No cards disappearing outside the viewport
* No automatic chaotic movement

Clicking the arrows should move to the next set of brands.

Example:

### Slide 1

SIGNAL
BIONNEX
CLEAR MEN

### Slide 2

FESTIVAL DES SPORTS D'ALGER
CHEEZY
LG

### Slide 3

IFRI
FACTEUR X
etc.

The order must be **from newest to oldest**.

Current order:

1. SIGNAL — 02 2026 · Present
2. BIONNEX — 03 2026 · Present
3. CLEAR MEN — 01 2026 · Present
4. FESTIVAL DES SPORTS D'ALGER — 04 2026
5. CHEEZY — 04 2025 · 3 months
6. LG — 06 2025 · 3 months
7. IFRI — 2024
8. FACTEUR X — oldest / final position

Do not randomly reorder the brands.

---

# 5. Brand Cards

The cards must be **large square cards**.

They should NOT be tall rectangles.

Each card contains:

* Brand logo only
* No date visible by default
* No large text description
* No "View project" permanently visible

The logo should be large because all supplied logos have transparent backgrounds.

## Hover interaction

When the cursor enters a card:

* Logo remains visible
* A subtle overlay appears
* KPIs / project information appears
* The interaction should feel premium and minimal

Example:

### SIGNAL

**13.4K Followers**

**ENGAGING Content**

**AUTHENTIC Community**

### CLEAR MEN

**100K+ Followers**

**#1 Worldwide Ranking**

**Millions of Impressions**

### BIONNEX

**60+ Content Managed**

**STRONG Brand Image**

**COHERENT Feed**

### CHEEZY

**+120 Content Pieces**

**HIGH Community Engagement**

**STRONG Brand Loyalty**

Other brands should follow the same visual logic.

---

# 6. Brand Card Colours

Each card has a brand-specific background.

### FESTIVAL DES SPORTS D'ALGER

White

### BIONNEX

Soft pastel green

### SIGNAL

White

### CLEAR MEN

Electric blue

### CHEEZY

Green

### LG

White

### IFRI

Blue

### FACTEUR X

Black

The colours must remain elegant and should not overpower the logos.

---

# 7. Logos

All logos are stored here:

`assets/images/brands/`

Current filenames:

```text
logo-bionnex.png
logo-cheezy.png
logo-clear.png
logo-facteur-x.png
logo-festival.png
logo-ifri.png
logo-lg.png
logo-signal.png
```

All logos are intended to be transparent PNG files.

They should be displayed **large inside the square cards**.

Do not artificially make them tiny.

Use `object-fit: contain`.

---

# 8. The Scale of the Work

This section should appear before the detailed projects.

Eyebrow:

**The scale of the work**

Headline:

**More than content.
Real brand management.**

The purpose of this section is to demonstrate the scale and complexity of the work.

Use four KPI blocks.

### KPI 01

**5+**

**Brands managed simultaneously**

Balancing different objectives, audiences, channels, calendars and teams at the same time.

### KPI 02

**4**

**Core communication dimensions**

Brand Strategy · Social Media · Content · Digital Activation

### KPI 03

**20+**

**Influencers collaborated with**

Creator partnerships and influencer-led communication across brand projects.

### KPI 04

**100+**

**Content pieces managed**

Across social calendars, campaigns, activations and always-on communication.

Add a short concluding sentence:

**Managing brands is not about managing one thing at a time. It's about keeping multiple objectives, audiences, channels and deadlines moving in the same direction.**

---

# 9. Selected Brand Work

Eyebrow:

**Projects**

Headline:

**Selected brand work.**

Supporting text:

**A closer look at the role, thinking and execution behind the brands.**

This section can later contain detailed project case studies.

Do not invent project information.

Only use information that is actually available.

---

# 10. Behind the Brands

Eyebrow:

**Behind the Brands**

Headline:

**What happens
behind the content.**

Supporting text:

**A moving look at shoots, productions, activations and the moments behind the work.**

## Gallery behaviour

This section must NOT be a static gallery.

Create a continuously moving horizontal image strip.

The images should automatically move:

**RIGHT → LEFT**

continuously.

The animation should be:

* slow
* smooth
* seamless
* continuous
* premium
* never abruptly reset

The user should be able to see multiple images at different sizes.

Use a **masonry/editorial collage style** inspired by the supplied visual reference.

Different image proportions should create visual rhythm.

The gallery must be easy to expand later.

When new backstage photos are added to the folder, they should be easy to include in the gallery.

Current backstage content available:

### CLEAR MEN

2–3 photos

### FESTIVAL DES SPORTS D'ALGER

1 photo

### BIONNEX

3 photos

More photos can be added later.

Store these images in:

`assets/images/backstage/`

---

# 11. Approach / How I Work

Eyebrow:

**How I Work**

Headline:

**Strategy that
survives execution.**

Introduction:

**I don't see brand management as a straight line from strategy to execution. It's a continuous process of understanding, building, measuring and adapting.**

The approach should explain the actual working methodology rather than giving generic two-line descriptions.

## Step 01 — Understand the business

Start with:

* Business objective
* Audience
* Market context
* Brand role
* Commercial challenge

The principle:

**I start with the business, not the post.**

## Step 02 — Build the strategic direction

Translate the objective into:

* Positioning
* Key messages
* Communication territories
* Brand strategy
* Content direction
* Creative framework

The strategy should provide a clear direction for every communication decision.

## Step 03 — Turn strategy into communication

Work hands-on with:

* Creative teams
* Content
* Production
* Creators
* Influencers
* Media teams

The objective is to transform strategic thinking into communication that people actually see, understand and remember.

## Step 04 — Manage multiple moving parts

Coordinate:

* Content calendars
* Campaigns
* Stakeholders
* Creators
* Deadlines
* Platforms
* Brand consistency

The focus is maintaining coherence while several projects move simultaneously.

## Step 05 — Measure and adapt

Review:

* Performance
* Engagement
* Reach
* Content results
* Audience response

Then adapt the communication based on what the data and the audience are telling us.

---

# 12. About

Eyebrow:

**About**

Headline:

**A marketer who thinks in brands, not just posts.**

The section should position Sabri as:

* Strategic
* Curious
* Adaptable
* Hands-on
* Organized
* Creative
* Business-oriented
* Comfortable managing multiple priorities
* Strong communicator
* Able to connect strategy and execution
* Comfortable working across different industries and audiences

These qualities should be presented visually rather than as a huge generic paragraph.

## Languages

Languages must be clearly visible.

### French

Native / Fluent

### English

Professional working proficiency

### Arabic

Fluent

The language section should be visually prominent enough for an international recruiter to immediately understand the multilingual profile.

---

# 13. Contact

Keep the contact section simple and premium.

Headline:

**Let's build something worth remembering.**

Include:

**Email**

[mezaguersabri@gmail.com](mailto:mezaguersabri@gmail.com)

**LinkedIn**

https://www.linkedin.com/in/sabri-mezaguer/

**Instagram**

https://www.instagram.com/sabriii_mezaguer/

The contact section should have a clear CTA.

---

# 14. Navigation

Navigation:

**SM.**

Links:

* Work
* Approach
* About
* Contact

CTA:

**Let's talk ↗**

Navigation should remain minimal.

On desktop, it can remain visible while scrolling.

On mobile, use a clean responsive menu.

---

# 15. Responsive Design

The website must work correctly on:

* Desktop
* Laptop
* Tablet
* Mobile

Desktop:

* 3 brand cards visible

Tablet:

* 2 cards visible

Mobile:

* 1 card visible

The arrows must remain usable on every screen size.

Do not allow horizontal overflow.

---

# 16. Technical Structure

Repository:

```text
sabri-mezaguer.github.io/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    └── images/
        ├── brands/
        │   ├── logo-bionnex.png
        │   ├── logo-cheezy.png
        │   ├── logo-clear.png
        │   ├── logo-facteur-x.png
        │   ├── logo-festival.png
        │   ├── logo-ifri.png
        │   ├── logo-lg.png
        │   └── logo-signal.png
        │
        └── backstage/
            ├── clear-01.jpg
            ├── clear-02.jpg
            ├── clear-03.jpg
            ├── festival-01.jpg
            ├── bionnex-01.jpg
            ├── bionnex-02.jpg
            └── bionnex-03.jpg
```

If a backstage filename is different, update the HTML/JavaScript reference accordingly.

---

# 17. Important Rules

### DO

* Keep the design premium
* Keep the cream background
* Use the green accent
* Keep square brand cards
* Keep exactly 3 cards visible on desktop
* Keep visible carousel arrows
* Keep the newest-to-oldest brand order
* Make logos large
* Use transparent logos correctly
* Use brand-specific card backgrounds
* Keep the backstage gallery continuously moving
* Make the website responsive
* Keep animations subtle
* Keep typography strong and editorial
* Make the portfolio feel like a professional international portfolio

### DO NOT

* Do not redesign the concept randomly
* Do not replace the square cards with vertical cards
* Do not make logos tiny
* Do not remove the carousel arrows
* Do not display dates permanently on the cards
* Do not add fake KPIs
* Do not invent project information
* Do not use generic stock imagery
* Do not turn the website into a basic template
* Do not add unnecessary gradients
* Do not use excessive animations
* Do not create a completely different colour palette
* Do not change the brand order
* Do not modify filenames unless absolutely necessary
* Do not break existing image paths
* Do not create a new folder structure without a clear reason

---

# 18. Final Quality Check

Before considering the website finished, verify:

* [ ] GitHub Pages loads correctly
* [ ] `index.html` loads correctly
* [ ] CSS loads correctly
* [ ] JavaScript loads correctly
* [ ] All 8 logos appear
* [ ] All logos are large enough
* [ ] Logos have transparent backgrounds
* [ ] Brand cards are square
* [ ] Exactly 3 cards appear on desktop
* [ ] Left/right arrows work
* [ ] Carousel order is correct
* [ ] Hover KPIs work
* [ ] Brand card colours are correct
* [ ] KPI section is visible
* [ ] Behind-the-scenes gallery moves automatically
* [ ] Gallery loops seamlessly
* [ ] Approach section is complete
* [ ] About section contains languages and qualities
* [ ] Contact links work
* [ ] Mobile layout works
* [ ] No horizontal scrolling
* [ ] No broken images
* [ ] No console errors
* [ ] No placeholder content remains

**Do not consider the project finished until every item above has been checked.**

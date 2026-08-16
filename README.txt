````markdown
# Sabri Mezaguer — Portfolio

Personal portfolio of **Sabri Mezaguer**, Brand Manager and Strategic Marketer.

The portfolio showcases selected brand management, marketing, social media, digital communication and creative execution projects across multiple industries.

---

## About

I work at the intersection of:

**Strategy × Culture × Execution**

My approach combines strategic thinking, brand management, content direction and hands-on digital execution.

My experience covers FMCG, dermo-cosmetics, food, retail, consumer electronics, sports and digital brand experiences.

---

## Portfolio Structure

The website is organized around several sections:

### Hero

Introduction to my profile and positioning as a Brand Manager / Strategic Marketer.

### Selected Work

Interactive carousel showcasing the brands I have worked on.

Each brand card includes:

- Brand logo
- Brand name
- Year
- Selected KPIs
- Hover interaction

The carousel displays three brands at a time on desktop and adapts automatically to smaller screens.

### The Scale of the Work

Key indicators highlighting the scale and diversity of my experience.

Examples include:

- 5+ brands managed simultaneously
- Multiple industries
- 20+ influencer collaborations
- 100+ content pieces managed

### About

A concise overview of my professional profile, working style, strengths and languages.

### How I Work

Three core stages:

1. Understand the business
2. Turn the objective into a direction
3. Make it happen

### Projects

Selected projects and brand experiences presented separately from the employer.

### Experience

Professional experience and responsibilities at Grow Consult Group.

### Contact

Direct contact links for:

- Email
- LinkedIn
- Instagram

---

# Brands

The portfolio currently showcases:

| Brand | Year |
|---|---:|
| Facteur X | 2026 |
| Bionnex | 2026 |
| Signal | 2026 |
| Clear Men | 2026 |
| Festival des Sports d'Alger | 2026 |
| IFRI | 2026 |
| Cheezy | 2025 |
| LG | 2025 |

---

# Technologies

The portfolio is built with:

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- GitHub Pages

No framework or external JavaScript library is required.

---

# Project Structure

```text
sabri-mezaguer.github.io/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── facteur-x.png
│   ├── bionnex.png
│   ├── signal.png
│   ├── clear-men.png
│   ├── festival-des-sports.png
│   ├── ifri.png
│   ├── cheezy.png
│   ├── lg.png
│   │
│   └── backstage/
│       ├── clear-01.jpg
│       ├── clear-02.jpg
│       ├── clear-03.jpg
│       ├── festival-01.jpg
│       ├── bionnex-01.jpg
│       ├── bionnex-02.jpg
│       └── bionnex-03.jpg
│
└── README.md
````

---

# Brand Logos

Brand logos are stored in:

```text
/images/
```

Recommended format:

* PNG
* Transparent background
* 1000 × 1000 px
* Logo centered
* No unnecessary white background

The JavaScript automatically loads the logos from these paths.

---

# Adding a New Brand

New brands can be added directly inside:

```text
script.js
```

Find the `brands` array and add a new object:

```javascript
{
    name: "BRAND NAME",
    year: "2026",
    logo: "images/brand-name.png",
    className: "brand-name",
    kpis: [
        "KPI 01",
        "KPI 02",
        "KPI 03",
        "KPI 04"
    ]
}
```

The carousel will automatically include the new brand.

---

# Changing Brand Colors

Brand card background colors are controlled in:

```text
script.js
```

Inside the `createBrandCard()` function.

Current visual system:

* Festival des Sports d'Alger → White
* Bionnex → Pastel Green
* Signal → White
* Clear Men → Electric Blue
* Cheezy → Green
* LG → White
* IFRI → Blue
* Facteur X → Black

---

# Backstage Content

Behind-the-scenes photography can be stored inside:

```text
/images/backstage/
```

The section is designed to support additional photography as the portfolio grows.

Recommended format:

* JPG or WebP
* High resolution
* Consistent visual treatment
* Landscape or editorial compositions preferred

---

# Responsive Design

The portfolio is designed for:

* Desktop
* Laptop
* Tablet
* Mobile

The selected-work carousel automatically adapts:

* Desktop → 3 cards
* Tablet → 2 cards
* Mobile → 1 card

Navigation also adapts to mobile screens.

---

# Deployment

The website is deployed through **GitHub Pages**.

Main files:

```text
index.html
style.css
script.js
```

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will automatically publish the latest version.

---

# Contact

**Sabri Mezaguer**

Brand Manager · Strategic Marketer

Email: [mezaguersabri@gmail.com](mailto:mezaguersabri@gmail.com)

LinkedIn:
https://www.linkedin.com/in/sabri-mezaguer/

Instagram:
https://www.instagram.com/sabriii_mezaguer/

---

## © 2026 Sabri Mezaguer

Personal portfolio — Brand Management · Marketing · Digital

```
```

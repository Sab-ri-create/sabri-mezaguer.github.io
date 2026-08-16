# Sabri Mezaguer — Portfolio

Static site (vanilla HTML/CSS/JS) built for GitHub Pages.

## Deploy
1. Push these files to a GitHub repo (e.g. `sabri-portfolio`).
2. In the repo: Settings → Pages → Deploy from branch → `main` / root.
3. Site goes live at `https://<username>.github.io/<repo>/`.

All asset paths are relative, so it works from a repo subpath.

## Replacing the placeholder logos
`images/*.png` are currently generated wordmark placeholders (transparent PNG,
1000×1000) so the site works out of the box. Swap in the real transparent
brand-logo PNGs using the **exact same filenames** and the cards will update
automatically — no code changes needed:

```
images/facteur-x.png
images/bionnex.png
images/signal.png
images/clear-men.png
images/festival-des-sports.png
images/ifri.png
images/cheezy.png
images/lg.png
```

## Replacing the backstage photos
`images/backstage/*.jpg` are currently abstract placeholder textures (no real
photos were provided). Replace with real behind-the-scenes photography using
the same filenames, or add new files and register them in the
`#backstageTrack` list in `index.html` — the strip auto-duplicates its
contents for a seamless loop, so no other code needs to change.

```
images/backstage/clear-men-1.jpg
images/backstage/clear-men-2.jpg
images/backstage/clear-men-3.jpg
images/backstage/festival-1.jpg
images/backstage/bionnex-1.jpg
images/backstage/bionnex-2.jpg
images/backstage/bionnex-3.jpg
```

## Structure
```
index.html
style.css
script.js
images/
  *.png          (8 brand logos)
  backstage/     (7 behind-the-scenes images)
```

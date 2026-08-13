# Portfolio — Sabri

Site statique (HTML/CSS/JS pur, aucune dépendance) prêt pour GitHub Pages.

## Mise en ligne — étape par étape

1. Crée un nouveau repo sur GitHub, par exemple `sabri.github.io` (remplace `sabri` par ton pseudo GitHub exact — ce nom précis rend le site accessible directement à la racine de ton compte) **ou** un nom classique comme `portfolio`.

2. Sur ta machine, dans le dossier `portfolio` :
   ```bash
   git init
   git add .
   git commit -m "Premier déploiement du portfolio"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/NOM-DU-REPO.git
   git push -u origin main
   ```

3. Sur GitHub : va dans **Settings > Pages** du repo.
   - Source : **Deploy from a branch**
   - Branch : **main**, dossier **/ (root)**
   - Sauvegarde.

4. Attends 1-2 minutes. Ton site sera disponible à :
   - `https://TON-PSEUDO.github.io/` (si le repo s'appelle `TON-PSEUDO.github.io`)
   - `https://TON-PSEUDO.github.io/NOM-DU-REPO/` (sinon)

## Avant de publier

- Remplace `ton.email@exemple.com` et le lien LinkedIn dans `index.html` (section Contact).
- Ajoute une vraie photo si tu veux (je peux l'intégrer).
- Le texte est basé sur tes marques actuelles (Signal, Bionnex, Nike Algeria, Protech Plast...) — dis-moi si des missions ont changé ou si tu veux en retirer/ajouter.

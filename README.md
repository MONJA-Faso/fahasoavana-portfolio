# Portfolio — Fahasoavana MONJA

Portfolio React, TypeScript et Vite. Direction visuelle : typographie sobre, navigation translucide, cartes arrondies et identité Malagasy en blanc, rouge et vert olive.

## Développement

- `npm ci`
- `npm run dev`
- `npm run typecheck`
- `npm run build`
- `npm run lint`

## Contenu

Le parcours et les formations sont dans `src/data/experience.ts`. TELOS chez CAH est présenté comme une expérience en cours depuis 2026, avec des missions de conception et d’analyse métier. Les projets et les domaines d’expertise sont dans `src/App.tsx`.

Le mode sombre suit la préférence système lors de la première visite, puis conserve le choix local. Le site respecte la réduction des animations.

## Contact

Créer un fichier `.env.local` à partir de `.env.example` pour activer EmailJS. Les identifiants VITE sont des identifiants publics intégrés au navigateur ; ne pas y placer de secrets serveur. Sans configuration, la section propose un contact direct par email et WhatsApp.

Le formulaire désactive l’envoi pendant la requête et affiche son résultat. La livraison réelle nécessite une configuration EmailJS valide.

## Point de restauration

- Branche de refonte : `feat/malagasy-portfolio-redesign`
- Tag avant refonte : `restore/portfolio-before-redesign-2026-10-10`
- Commit d’origine : `de1e084`

Pour consulter la version originale sans modifier la branche de refonte :

```sh
git worktree add ../portfolio-original restore/portfolio-before-redesign-2026-10-10
```

La refonte reste locale sur sa branche ; aucune publication n’est effectuée.

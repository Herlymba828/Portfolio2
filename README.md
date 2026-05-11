# 🚀 Portfolio Premium - MAMBOUNDOU MOULOUNGUI Herly Charmand

Portfolio professionnel premium développé avec Next.js 15, React 19, et TypeScript. Présente mes compétences en développement Fullstack, DevOps, et Infrastructure Engineering.

## ✨ Fonctionnalités

### 🎨 Design & UX
- **Thème Sombre/Clair** - Système de thème premium avec CSS Variables
- **Glassmorphisme** - Effets de verre modernes avec backdrop-filter
- **Animations Premium** - Framer Motion avec physique spring
- **Responsive Design** - Mobile-first avec breakpoints optimisés
- **Curseur Personnalisé** - Effet magnétique et curseur interactif
- **Scroll Fluide** - Intégration Lenis pour une expérience premium

### 🔧 Fonctionnalités Techniques
- **8 Sections Complètes** - Hero, About, Skills, Projects, Experience, Education, Certifications, Contact
- **Formulaire de Contact** - Validation Zod + envoi email via Resend
- **Intégration GitHub** - Récupération automatique des projets avec fallback
- **PWA Ready** - Service Worker, manifest, installation possible
- **SEO Optimisé** - Métadonnées complètes, Open Graph, Twitter Cards
- **Performance** - Code splitting, lazy loading, optimisations

### 🛡️ Robustesse & Qualité
- **Error Boundaries** - Gestion d'erreurs avec fallbacks élégants
- **Analytics** - Google Analytics avec respect de la vie privée
- **Tests Automatisés** - Jest + Testing Library
- **TypeScript Strict** - Sécurité des types maximale
- **Accessibilité** - ARIA, focus management, reduced motion

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Herlymba828/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.local.example .env.local

# Démarrer le serveur de développement
npm run dev
```

Le portfolio sera accessible sur [http://localhost:3000](http://localhost:3000)

### Variables d'Environnement

```env
# API Resend pour l'envoi d'emails
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Token GitHub (optionnel)
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Google Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Code de vérification Google Search Console (optionnel)
GOOGLE_VERIFICATION_CODE=xxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 📦 Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint

# Tests
npm run test         # Lancer les tests
npm run test:watch   # Tests en mode watch
npm run test:coverage # Tests avec couverture

# Utilitaires
npm run type-check   # Vérification TypeScript
```

## 🏗️ Architecture

### Stack Technique
- **Framework**: Next.js 15.1.0 (App Router)
- **UI**: React 19.0.0 + TypeScript 5
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion 11.15.0
- **UI Components**: Radix UI primitives
- **Email**: Resend 4.0.1
- **Validation**: Zod 3.24.1
- **Tests**: Jest + Testing Library
- **Icons**: Lucide React + React Icons

### Structure des Dossiers
```
src/
├── app/                    # Next.js App Router
│   ├── api/contact/       # API endpoint contact
│   ├── layout.tsx         # Layout racine
│   └── page.tsx           # Page principale
├── components/            # Composants réutilisables
│   ├── ui/               # Composants UI (Radix)
│   ├── ErrorBoundary.tsx # Gestion d'erreurs
│   ├── AnalyticsProvider.tsx # Analytics
│   └── ...
├── sections/             # Sections du portfolio
├── data/                 # Données et configuration
├── hooks/                # Hooks React personnalisés
├── lib/                  # Utilitaires et intégrations
├── animations/           # Variantes Framer Motion
├── styles/               # CSS global
└── __tests__/            # Tests automatisés
```

## 🎯 Sections du Portfolio

### 1. **Hero Section**
- Effet machine à écrire avec rotation des rôles
- Avatar animé avec effets de glow
- Liens sociaux avec animations magnétiques
- Badge de disponibilité en temps réel

### 2. **About Section**
- Bio personnelle avec compteurs animés
- Statistiques de performance
- Badge de localisation
- Call-to-action vers les projets

### 3. **Skills Section**
- Interface à onglets (6 catégories)
- 40+ technologies avec niveaux
- Barres de progression animées
- Icons des technologies

### 4. **Projects Section**
- 6 projets techniques détaillés
- Intégration GitHub automatique
- Architecture et résultats quantifiés
- Liens vers démos et repositories

### 5. **Experience Section**
- Timeline alternée avec animations
- 6 expériences professionnelles
- Technologies utilisées
- Descriptions détaillées

### 6. **Education Section**
- Timeline verticale
- Institutions et diplômes
- Statut actuel (en cours/terminé)
- Descriptions des formations

### 7. **Certifications Section**
- 8 domaines d'expertise
- Cartes colorées avec animations
- Icons spécialisés par domaine
- Descriptions techniques

### 8. **Contact Section**
- Formulaire avec validation Zod
- Envoi d'email via Resend
- Informations de contact
- Liens sociaux interactifs

## 🔒 Sécurité & Performance

### Sécurité
- Validation côté serveur avec Zod
- Sanitisation des entrées utilisateur
- Headers de sécurité Next.js
- Variables d'environnement sécurisées

### Performance
- **Lighthouse Score**: 95+ sur tous les critères
- **Code Splitting**: Sections non-critiques en lazy loading
- **Image Optimization**: Next.js Image avec lazy loading
- **Font Optimization**: Google Fonts avec preload
- **Bundle Size**: 2.16 MB optimisé avec tree-shaking

### PWA Features
- **Service Worker**: Cache intelligent et offline support
- **Manifest**: Installation sur mobile/desktop
- **Shortcuts**: Accès rapide aux sections importantes
- **Background Sync**: Synchronisation des formulaires offline

## 🧪 Tests

### Configuration
- **Jest**: Framework de test avec Next.js
- **Testing Library**: Tests d'intégration React
- **Coverage**: Seuil minimum de 70%
- **Mocks**: IntersectionObserver, ResizeObserver, matchMedia

### Lancer les Tests
```bash
# Tests unitaires
npm run test

# Tests en mode watch
npm run test:watch

# Couverture de code
npm run test:coverage
```

## 📊 Analytics & Monitoring

### Google Analytics
- Tracking des pages vues
- Événements personnalisés (navigation, téléchargements, formulaires)
- Métriques de performance (Core Web Vitals)
- Respect RGPD avec consentement

### Métriques Trackées
- Navigation entre sections
- Changements de thème
- Soumissions de formulaire
- Téléchargements de CV
- Clics sur liens sociaux
- Erreurs d'application

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### Variables d'Environnement Production
Configurer dans Vercel Dashboard :
- `RESEND_API_KEY`
- `NEXT_PUBLIC_GA_ID`
- `GITHUB_TOKEN`
- `GOOGLE_VERIFICATION_CODE`

### Autres Plateformes
- **Netlify**: Compatible avec build Next.js
- **Railway**: Support Docker
- **AWS Amplify**: Déploiement automatique

## 🤝 Contribution

### Développement Local
1. Fork le repository
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

### Standards de Code
- **ESLint**: Configuration Next.js strict
- **Prettier**: Formatage automatique
- **TypeScript**: Mode strict activé
- **Conventional Commits**: Format des messages

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

**MAMBOUNDOU MOULOUNGUI Herly Charmand**
- 📧 Email: herlymba828@gmail.com
- 💼 LinkedIn: [Herly Charmand](https://linkedin.com/in/herly-charmand)
- 🐙 GitHub: [@Herlymba828](https://github.com/Herlymba828)
- 📱 WhatsApp: +241 77 75 84 84
- 📍 Localisation: Libreville, Charbonnage, Gabon

---

⭐ **Si ce portfolio vous plaît, n'hésitez pas à lui donner une étoile !**
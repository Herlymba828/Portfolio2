# 🐳 Docker - Portfolio Herly MAMBOUNDOU

Ce document explique comment conteneuriser et déployer le portfolio avec Docker.

## 📁 Fichiers Docker

- `Dockerfile` - Build multi-stage optimisé
- `docker-compose.yml` - Orchestration des services
- `.dockerignore` - Exclusions de fichiers
- `nginx.conf` - Configuration reverse proxy (optionnel)
- `docker-build.sh` - Script de build automatisé

## 🚀 Démarrage rapide

### 1. Build et démarrage

```bash
# Build et lancement
docker-compose up -d --build

# Ou avec le script
docker-compose up -d
```

### 2. Accès

- Portfolio : http://localhost:3000
- Avec Nginx : http://localhost (port 80)

## 🔧 Commandes utiles

```bash
# Build
docker build -t portfolio-herly .

# Lancer
docker run -p 3000:3000 portfolio-herly

# Logs
docker-compose logs -f portfolio

# Arrêter
docker-compose down

# Redémarrer
docker-compose restart

# Nettoyer
docker-compose down -v --rmi all
```

## 🏗️ Architecture

### Build Multi-Stage

1. **deps** : Installation des dépendances
2. **builder** : Build de l'application Next.js
3. **runner** : Image finale légère avec serveur standalone

### Services

- **portfolio** : Application Next.js (port 3000)
- **nginx** : Reverse proxy avec cache et compression (optionnel)

## 📦 Variables d'environnement

Créez un fichier `.env` pour personnaliser :

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
```

## 🔒 Sécurité

- Utilisateur non-root (`nextjs`)
- Headers de sécurité configurés
- Rate limiting activé
- Cache des assets statiques

## 💾 Optimisations

- Image basée sur `node:20-alpine` (légère)
- Build standalone Next.js
- Cache npm
- Gzip compression
- Static files caching (1 an)

## 🌐 Production avec Nginx

```bash
# Lancer avec Nginx
docker-compose --profile production up -d
```

## 📊 Monitoring

```bash
# Stats des conteneurs
docker stats portfolio-herly

# Health check
docker inspect --format='{{.State.Health.Status}}' portfolio-herly
```

## 🛠️ Dépannage

```bash
# Shell dans le conteneur
docker exec -it portfolio-herly sh

# Rebuild sans cache
docker-compose build --no-cache
```

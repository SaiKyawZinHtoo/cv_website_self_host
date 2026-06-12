# CV Website — Sai Kyaw Zin Htoo

Premium portfolio / CV website built with Next.js 16, TypeScript, and Tailwind CSS 4.

## Local development

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Docker deployment (VPS)

This project includes production Docker setup using Next.js `standalone` output.

### Files

- `Dockerfile` — multi-stage production image
- `docker-compose.yml` — run on VPS with one command
- `.env.example` — optional host port config

### Deploy on VPS

1. Copy the project to your VPS (git clone or upload).
2. Install Docker and Docker Compose on the VPS.
3. From the project folder:

```bash
cp .env.example .env
docker compose up -d --build
```

4. Open `http://<your-vps-ip>:3000`

### Useful commands

```bash
npm run docker:build   # build image
npm run docker:up      # start container in background
npm run docker:down    # stop container
npm run docker:logs    # view logs
```

### Change port

Edit `.env`:

```env
APP_PORT=80
```

Then restart:

```bash
docker compose up -d
```

### Update after changes

```bash
git pull
docker compose up -d --build
```

### Production tips

- Put Nginx or Caddy in front of the container for HTTPS.
- Map `APP_PORT=80` or reverse-proxy to container port `3000`.
- Container listens on `0.0.0.0:3000` inside Docker.

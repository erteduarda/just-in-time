FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY ../../pnpm-workspace.yaml ../../turbo.json ./
RUN npm i -g pnpm && pnpm fetch
COPY . .
RUN pnpm install -r --offline && pnpm build || true
CMD ["pnpm","start"]

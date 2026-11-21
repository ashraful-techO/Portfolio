
FROM node:22-alpine

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

RUN pnpm add -g serve

EXPOSE 3000

CMD ["serve", "-s", "out", "-l", "3000"]

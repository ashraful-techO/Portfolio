# Use Node.js
FROM node:22-alpine

# Enable pnpm
RUN corepack enable

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy application source code
COPY . .

# Build Next.js application
RUN pnpm run build

# Production environment
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Expose application port
EXPOSE 3000

# Start Next.js
CMD ["pnpm", "run", "start"]
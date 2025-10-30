FROM node:20-alpine

WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm

COPY . .

# Install dependencies
RUN pnpm install

# Generate Prisma client
RUN pnpm run db:generate

# Build the ws-server specifically
RUN pnpm run build --filter=ws-server

EXPOSE 3001

CMD ["pnpm", "run", "start:ws-server"]
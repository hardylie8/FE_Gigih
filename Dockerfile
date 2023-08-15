FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm ci

EXPOSE 4173
RUN npm run build

CMD ["npm", "run", "preview"]
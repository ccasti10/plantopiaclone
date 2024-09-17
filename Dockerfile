FROM node:20.9.0-alpine 

EXPOSE 3000

WORKDIR /app

COPY package*.json /app/
COPY  grupo-1-backend/.eslintrc.js /app/.eslintrc.js    
COPY grupo-1-backend/.gitignore /app/.gitignore    
COPY grupo-1-backend/.prettierrc /app/.prettierrc    
COPY grupo-1-backend/Logo-Green.png /app/Logo-Green.png    
COPY grupo-1-backend/nest-cli.json /app/nest-cli.json    
COPY grupo-1-backend/README.md /app/README.md    
COPY grupo-1-backend/tsconfig.build.json /app/tsconfig.build.json    
COPY grupo-1-backend/tsconfig.json /app/tsconfig.json    
COPY grupo-1-backend/src /app/src
COPY grupo-1-backend/test /app/test
RUN npm install

CMD ["npm", "run", "start:dev"]

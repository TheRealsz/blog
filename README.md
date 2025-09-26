# Blog

Projeto fullstack de um blog com autenticação, cadastro, criação, edição e exclusão de posts. Desenvolvido com **React + TypeScript + Vite** no frontend e **Node.js + Express + MongoDB** no backend.

## Estrutura do Projeto

```
backend/
  src/
    controllers/
    db/
    middlewares/
    models/
    routes/
    types/
    index.ts
  package.json
  tsconfig.json

frontend/
  src/
    components/
    context/
    lib/
    pages/
    router/
    schema/
    services/
    types/
    utils/
    App.tsx
    main.tsx
    index.css
  package.json
  tsconfig.json
  tailwind.config.js
  vite.config.ts
```

---

## Tecnologias Utilizadas

- **Frontend**
  - React 18
  - TypeScript
  - Vite
  - TailwindCSS
  - React Hook Form + Zod
  - React Router DOM
  - Axios
  - Radix UI
  - React Hot Toast

- **Backend**
  - Node.js
  - Express
  - TypeScript
  - Mongoose (MongoDB)
  - JWT (autenticação)
  - Bcrypt (hash de senha)
  - Dotenv

---

## Como rodar o projeto

### Pré-requisitos

- Node.js (v18+ recomendado)
- MongoDB rodando localmente ou em nuvem

### Backend

1. Acesse a pasta `backend`:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Crie um arquivo `.env` com as variáveis:
   ```
   NODE_URL_MONGODB=<sua_string_de_conexão_mongodb>
   JWT_SECRET=<sua_chave_secreta>
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```
   O backend estará disponível em `http://localhost:3000`.

### Frontend

1. Acesse a pasta `frontend`:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Crie um arquivo `.env` e adicione a URL da API:
   ```
   VITE_API_URL=http://localhost:3000/api/
   ```
4. Inicie o frontend:
   ```sh
   npm run dev
   ```
   O frontend estará disponível em `http://localhost:5173`.

---

## Funcionalidades

- Cadastro e login de usuários
- Autenticação via JWT
- Criação, edição e exclusão de posts
- Edição de perfil e troca de senha
- Exclusão de conta
- Listagem de posts em feed
- Interface responsiva e moderna

---

## Scripts úteis

- **Frontend**
  - `npm run dev` — inicia o servidor de desenvolvimento
  - `npm run build` — build de produção
  - `npm run lint` — lint do código

- **Backend**
  - `npm start` — inicia o servidor com nodemon

---

## Licença

Este projeto é apenas para fins de estudo.

---

## Contato

Desenvolvido por Robson Diego.

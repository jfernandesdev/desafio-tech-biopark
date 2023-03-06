# Desafio Tech Biopark <img src='https://github.com/jfernandesdev/desafio-tech-biopark/blob/793849966d6be081fdddc606567a29c21ab92128/frontend/public/avatar.svg' width='50px' />

Desafio Prático desenvolvido como parte do Processo Seletivo Trainne Biopark 2023.

## Contexto do desafio: 
Desenvolver um sistema com o objetivo de facilitar a gestão dos apartamentos entregues no ecossistema. O sistema deve conter banco de dados, backend e front-end.

### O que foi desenvolvido: 
- [x] Cadastro e listagem de Edifícios e Apartamentos;
- [x] Cadastro e listagem de alugueis;
- [x] API;
- [x] Validade de dados;

<img src="https://github.com/jfernandesdev/desafio-tech-biopark/blob/0200279b7d2443e7f568050d52924c70166f3364/backend/prisma/ERD.png" />


## Dendente
- [ ] Resposividadade do front-end;
- [ ] Funcionalidade extras
- [ ] Documentação da API com Swagger;
- [ ] Teste unitários.

### Principais tecnologias utilizadas: 🚀

## Back-end
- Fastify | ^4
- Zod | ^3
- Prisma | ^4
- Postgres
- Typescript | ^4 -D

## Front-end
- ReactJs | ^18
- Vite | ^4 -D
- Typescript | ^4 -D
- React Hook Form | ^7
- React Router Dom | ^6
- Axios | ^1
- Zod | ^3

## Layout (design by @jfernandesdev) 🎨
Disponível no Figma[https://www.figma.com/file/TaqY8FjjJ1Sru2HfzgERwm/Desafio-Tech-Biopark?node-id=0%3A1&t=cXQYxAqQCZbmoa8P-1]
### Desktop (screenshot):

|  |  | |
| --- | --- |--- |
| <img src="https://github.com/jfernandesdev/desafio-tech-biopark/blob/793849966d6be081fdddc606567a29c21ab92128/frontend/public/layout/layout-1.png" /> | <img src="https://github.com/jfernandesdev/desafio-tech-biopark/blob/793849966d6be081fdddc606567a29c21ab92128/frontend/public/layout/layout-2.png" /> | <img src="https://github.com/jfernandesdev/desafio-tech-biopark/blob/793849966d6be081fdddc606567a29c21ab92128/frontend/public/layout/layout-3.png" /> | 

|  |  | |
| --- | --- | --- |
| <img src="https://github.com/jfernandesdev/desafio-tech-biopark/blob/793849966d6be081fdddc606567a29c21ab92128/frontend/public/layout/layout-4.png" /> | <img src="https://github.com/jfernandesdev/desafio-tech-biopark/blob/793849966d6be081fdddc606567a29c21ab92128/frontend/public/layout/layout-5.png" /> | <img src="https://github.com/jfernandesdev/desafio-tech-biopark/blob/793849966d6be081fdddc606567a29c21ab92128/frontend/public/layout/layout-6.png" /> | 


##  Rodando a aplicação localmente: ⚙

Clone o projeto e entre na pasta do projeto.
```sh
$ git clone git@github.com:jfernandesdev/desafio-tech-biopark.git && cd desafio-tech-biopark
```

Entre na pasta `Backend` e `Front-end` e instale as depedências
```sh
$ cd backend && npm install
$ cd frontend && npm install
```

Com postgre instalado e configurado em sua máquina, crie um banco de dados chamado `db_desafio_tech` e altere os dados de usuário, senha e porta no arquivo`.env` (se não forem o mesmo). Rode as migrition
```sh
$ npm run migrate:dev
```

Rode o `Backend ` depois o `Front-end`
```sh
$ cd backend && npm run dev
$ cd frontend && npm run dev
```

<br>

<img src="https://i.ibb.co/Yckq764/footer-signature.png" alt="footer-signature" border="0"  width='400px' />

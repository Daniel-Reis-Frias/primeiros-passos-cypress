# 🌲 Primeiros Passos com Cypress

Projeto de automação de testes E2E desenvolvido com **Cypress** como parte do meu portfólio em QA. Os testes cobrem um fluxo real de autenticação e atualização de dados de usuário em uma aplicação web.

---

## 📌 Sobre o projeto

Este projeto foi criado com o objetivo de praticar e demonstrar o uso do Cypress para testes end-to-end. Ele simula cenários reais de QA, incluindo login com credenciais válidas e inválidas, além de atualização de perfil de usuário.

---

## ✅ Cenários testados

- Login com credenciais válidas
- Login com credenciais inválidas (teste negativo)
- Atualização de dados do usuário
- Validação de mensagens de erro e sucesso

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes E2E
- JavaScript — Linguagem dos scripts de teste
- Node.js — Ambiente de execução

---

## 📂 Estrutura do projeto

```
primeiros-passos-cypress/
├── cypress/
│   ├── e2e/          # Arquivos de teste
│   ├── fixtures/     # Dados de teste (JSON)
├── cypress.config.js
├── package.json
└── README.md
```

---

## ▶️ Como executar

### Pré-requisitos

- Node.js instalado ([download aqui](https://nodejs.org/))

### Instalação

```bash
npm install
```

### Executar com interface gráfica (Cypress UI)

```bash
npx cypress open
```

### Executar via linha de comando (headless)

```bash
npx cypress run
```

---

## 🧠 Aprendizados

- Estrutura de testes com Cypress (`describe`, `it`, `beforeEach`)
- Uso de `cy.get()`, `cy.type()`, `cy.click()` e assertions
- Organização de testes por cenários positivos e negativos
- Configuração do `cypress.config.js`
- Boas práticas de seletores e isolamento de testes

---

## 👨‍💻 Autor

**Daniel Reis**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danielreisfrias/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Daniel-Reis-Frias)

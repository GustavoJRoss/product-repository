# 🛠️ Sistema de Gerenciamento de Produtos

Este projeto é composto por um **frontend em React** e um **backend em Java (Spring Boot)**. Ele permite o cadastro de **categorias** e **produtos**, com integração total entre as duas camadas.

---

## 📦 Tecnologias utilizadas

- **Frontend**
  - React
  - Axios
  - CSS puro

- **Backend**
  - Java 17+ (compatível com JDK 17 ou superior)
  - Spring Boot
  - Spring Data JPA
  - Banco H2 (em memória)

---

## 🖥️ Como executar o projeto

### 🔹 1. Frontend (React)

> ⚠️ Pré-requisitos:
> - Node.js instalado (v16+ recomendado)
> - NPM ou Yarn

```bash
# Acesse a pasta do frontend (onde está o package.json)
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run start

```

# 🧩 Backend - API REST com Spring Boot

Este é o **backend** do sistema de gerenciamento de produtos e categorias. A aplicação foi construída com **Spring Boot**, utilizando **JPA** para persistência de dados e banco de dados **H2 em memória**.

---

## 📦 Tecnologias utilizadas

- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- Banco de dados H2 (em memória)
- Swagger (opcional para documentação da API)

---

## ▶️ Como executar o backend

> ⚠️ Pré-requisitos:
> - JDK 17 ou superior instalado
> - Maven (ou wrapper) ou uma IDE como IntelliJ/Eclipse/VSCode

### ✅ Executar via terminal (com Maven)

```bash
# Acesse a pasta do backend
cd server

# Compile e inicie o servidor Spring Boot
./mvnw spring-boot:run
```

### ✅ Executar via IDE

- Execute a classe principal, MvcProjetoApplication.java
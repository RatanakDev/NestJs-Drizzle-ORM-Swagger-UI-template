# 🚀 NestJS + Drizzle ORM + Swagger UI Template

A production-ready backend starter template built with **NestJS**, **Drizzle ORM**, and **Swagger UI**. This template provides a solid foundation for building scalable REST APIs with database migrations, seeding, and API documentation support.

## ✨ Features

* ⚡ **NestJS** framework
* 🗄️ **Drizzle ORM**
* 📚 **Swagger UI** API documentation
* 🔐 Environment configuration support
* 📝 Database migrations and schema generation
* 🌱 Database seeding
* 🏗️ Modular project structure
* 🚀 Production-ready setup

---

## 📋 Prerequisites

Before getting started, make sure you have installed:

* Node.js (v18 or higher recommended)
* npm
* TypeScript
* ts-node

Install the required development dependencies:

```bash
npm install -D ts-node typescript
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Navigate into the project

```bash
cd your-repo-name
```

### 3. Install dependencies

```bash
npm install
```

---

## ⚙️ Environment Configuration

Update the database connection settings in the `.env` file:

```env
DATABASE_URL=your_database_connection_string
```

Example:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

---

## 🗄️ Database Setup

### Generate database schema

```bash
npm run db:generate
```

### Run database migrations

```bash
npm run db:migrate
```

### Seed initial users

```bash
npm run user:seed
```

> **Note:** Ensure that your database is running and the `.env` configuration is correct before executing these commands.

---

## ▶️ Running the Application

### Development mode

```bash
npm run start:dev
```

### Production mode

```bash
npm run build
npm run start:prod
```

---

## 📚 Swagger API Documentation

After starting the application, Swagger UI will be available at:

```text
http://localhost:3040/api
```

---

## 🛠️ Available Scripts

| Command               | Description                           |
| --------------------- | ------------------------------------- |
| `npm run start:dev`   | Start application in development mode |
| `npm run build`       | Build the application                 |
| `npm run start:prod`  | Run production build                  |
| `npm run db:generate` | Generate Drizzle schema               |
| `npm run db:migrate`  | Execute database migrations           |
| `npm run user:seed`   | Seed initial user data                |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork this repository.

---

⭐ If you find this template useful, please consider giving it a star.

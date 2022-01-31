<div align="center" id="top">
  <img align="center" width="300px" src="https://miro.medium.com/max/300/1*fY5KPXK0C6csHKhnXkQQ8g.png" alt="Mongodb Icon" />
  <img align="center" width="300px" src="https://i.imgur.com/FxX9HZh.png" />
</div>

<h1 align="center">MongoDB Crud API</h1>

<p align="center">
  <img alt="Main language of the project" src="https://img.shields.io/github/languages/top/D-nDev/crud-mongodb-injectiondependency?color=86DC3D">
  <img alt="Quantity of language used" src="https://img.shields.io/github/languages/count/D-nDev/crud-mongodb-injectiondependency?color=86DC3D">
</p>

<br>

## 🎯 About

Crud API using mongoose as ODM for MongoDB, as well using Dependency Injection and inversion

## 🚀 Technologies

- [Node]
- [Express]
- [Mongoose]
- [TypeScript]
- [Express]

## 🏁 Running

<h3><strong>Dependencies(Using Docker)</strong></h3>

- Visual Studio Code OR another Modern IDE
- Docker
- Docker Compose
- Ports 4000 and 5432 opened and free
- Mongo Compass(Recommended)
- Postman(Recommended)

Clone the project

```bash
  git clone https://github.com/D-nDev/crud-mongodb-injectiondependency.git
```

Go to the project directory

```bash
  cd crud-mongodb-injectiondependency
```

Run Docker compose

```bash
  docker-compose up --build --force-recreate -d
```

Server will be available at:

- localhost:4000/docs - Swagger Docs

<hr>

<h3><strong>Dependencies(If you'll not use docker)</strong></h3>

For this project you'll need:

- Visual Studio Code OR another Modern IDE
- MongoDB
- Postman(Highly Recommended)
- Mongo Compass(Recommended)
- NPM or Yarn

Clone the project

```bash
  git clone https://github.com/D-nDev/crud-mongodb-injectiondependency.git
```

Go to the project directory

```bash
  cd crud-mongodb-injectiondependency
```

Install dependencies

```bash
  npm install or yarn
```

Configure the environment variables following the **.env.example**

```bash
MONGO_USER=your_user
MONGO_PASSWORD=your_pass
MONGO_DATABASE=your_db
DOCKER=NO
```

Start the DEV server

```bash
  npm run dev or yarn dev
```

**OR**

To Build for production

```bash
  npm run build or yarn build
```

## API Reference

- The API reference will be available through Swager docs access <http://localhost:4000/docs> after server started

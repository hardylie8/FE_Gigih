# Gigih play

For the final project in Generasi Gigih 3.0, the goal is to create an interactive live shopping platform that enables users to engage in live shopping events, explore a variety of products, and actively participate by posting comments during the live sessions. this is the frontend repository.

kindly check https://github.com/hardylie8/BE_Gigih for the backend.

## Tech Stack

React.js
Next.ui (ui library)
Socket.io

## Feature

Authentication
live comment with websocket

## Run Locally

Clone the project

```bash
  git clone https://github.com/hardylie8/FE_Gigih.git
```

Go to the project directory

```bash
  cd Generasi_gigih_3.0/FE_Gigih
```

Install dependencies

```bash
  npm install
```

Copy/rename .env.example to .env.local and fill the value

Start the server

```bash
  npm run dev
```

## Run Locally via docker

Clone the project

```bash
  git clone https://github.com/hardylie8/FE_Gigih.git
```

Go to the project directory

```bash
  cd Generasi_gigih_3.0/FE_Gigih
```

Compose Docker Container and wait until done

```bash
  docker-compose -f docker-compose.yml up --build -d
```

## pull the docker image

```bash
  docker pull rd117/gigih-lab
```

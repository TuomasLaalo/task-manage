# Task Management System - DevOps Project

TODO: Käännetään tämä myös suomenkieliseksi README_fi.md tiedostoon.

A full-stack task management application built for learning DevOps practices including CI/CD pipelines, containerization, and cloud deployment.

## Features

- User authentication (Register/Login)
- Create, read, update, delete tasks
- Task status management (Todo, In Progress, Done)
- Task priority levels (Low, Medium, High)
- Due dates
- Filter and search functionality

## Technology Stack

**Backend:**
- Node.js with Express
- TypeScript
- Sequelize ORM
- PostgreSQL database
- JWT authentication

**Frontend:**
- React 19 & Vite
- TypeScript
- React Router
- Axios

## Getting Started

### Prerequisites

- Node.js 22+ and npm
- Docker and Docker Compose
- Git

### Default Ports

- Frontend: `5173`
- Backend: `5000`
- Database: `5432`

## Run Task manager Locally

 It is recommended to run the application locally before starting CI/CD to quickly identify and resolve issues in the development environment. Running locally allows you to verify basic functionality, catch errors early, and ensure dependencies are correctly configured.

 This step also helps prevent unnecessary CI/CD pipeline failures.

### 1. Clone repository and install dependencies
```bash
git clone <repo_url>
cd <directory_name>
npm run install:all
```
### 2. Run PostgreSQL in Docker:
Powershell:
```bash
docker run -d `
  --name postgres-local `
  -e POSTGRES_DB=taskmanagement `
  -e POSTGRES_USER=postgres `
  -e POSTGRES_PASSWORD=postgres `
  -p 5433:5432 `
  postgres:18-alpine
```
Linux or MacOS
```bash
docker run -d \
  --name postgres-local \
  -e POSTGRES_DB=taskmanagement \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5433:5432 \
  postgres:18-alpine
```
### 3. .env files
- Copy `.env.example` to `.env` both in frontend and backend.
This creates a real `.env` file that your app will use.

### 4. Run backend
```bash
npm run build:backend
npm run dev:backend
```
### 5. Run frontend
```bash
npm run dev:frontend
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- Database: localhost:5432

## Tasks

Your goal is to implement a CI/CD pipeline for the Task Management System:

1. **Set Up a CI/CD Workflow:** (1 points)
   - Use GitHub Actions to automate your workflow.
   - The pipeline should run on every push and pull request to the main branch.

2. **Automate Testing and Linting:** (1 points)
   - Configure the pipeline to run backend and frontend tests.
   - Add a linter step to check code quality.

   **HUOM** Coverage testin ajaminen ja tuloksen vieminen artifactina voisi olla kiva lisä. Täytyy ihmetellä tuota.

3. **Security** (1 points)
   - Integrate CodeQL analysis in the CI/CD pipeline to automatically scan for vulnerabilities.
   - Add steps to check for outdated or vulnerable dependencies using tools like `npm audit`.
   
   **HUOM** Nyt token on tallennettu selaimen localstorage:en josta varamasti tulee CodeQL hälytys. Tuo pitäisi muuttaa HttpOnly cookieksi.

4. **Docker Integration:** (3 points)
   - Build Docker images for the backend and frontend as part of the pipeline.
   - Optionally, push images to a container registry.

5. **Deployment:** (3 points)
   - Automate deployment to a cloud service (e.g., Render, Rahti).

6. **Monitoring** (2 points)
   - SOMETHING SIMPLE HERE
   Bäkkärissä on health check url
   Lokituksen monitorointi?

PISTEYTYS ON ALUSTAVA...TUO TÄYTYY MYÖS MIETTIÄ

## Tips for Getting Started

- **Start simple:** Begin by setting up a basic GitHub Actions workflow that runs on push and pull requests.
- **Incremental approach:** Add one CI/CD step at a time (e.g., first linting, then testing, then Docker build).
- **Use official actions:** Leverage pre-built GitHub Actions for Node.js, Docker, and CodeQL to simplify your workflow.
- **Test locally:** Make sure your tests and Docker builds work locally before automating them in CI/CD.
- **Read documentation:** Refer to [GitHub Actions docs](https://docs.github.com/en/actions) and [Docker docs](https://docs.docker.com/) for examples and troubleshooting.
- **Monitor pipeline runs:** Check the Actions tab in your repository for logs and troubleshooting information.
- **Iterate and improve:** Refine your workflow as you discover new requirements or issues.

## References 
The following Docker workshop provides clear instructions that are helpful for completing the tasks in this project: https://docs.docker.com/get-started/workshop

Muita linkkejä jotka auttavat...

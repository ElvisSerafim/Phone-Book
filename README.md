<h1 align="center"> Phone Book </h1>
<p align="center">
 <a href="#description">Description</a> •
 <a href="#demonstration">Demonstration</a> •
  <a href="#requirements">Requirements</a> •
 <a href="#tecnologies">Tecnologies</a>
</p>

### Description

Developed the Phone Book project to manage contacts in an agenda. In the application, it is possible to create new contacts, delete them, update any contact, and list the contacts in a paginated manner (extra feature). The application is dockerized on the frontend and backend for easy project usage. Additionally, the Github subtree scheme was used to unify the project into a single repository, eliminating the need to clone different repositories, and also for Docker Compose usage.

### Demonstration

The project can be accessed without the need to run it locally. I deployed the backend using the [Cyclic](https://www.cyclic.sh/) platform, and for the frontend, I used the [Vercel](https://vercel.com/) platform.

Access link: https://phone-book-frontend-igjszjkrb-elvisserafim.vercel.app/

### Requirements

Before you begin, you'll need to have the following tools installed on your machine:
[Git](https://git-scm.com) and [Docker](https://www.docker.com/).

### 🎲 Runnning the Project

```bash
# Clone the repository
$ git clone <https://github.com/ElvisSerafim/Phone-Book.git>

# Access the project folder
$ cd phone-book

# Execute docker-compose
$ docker-compose up

# The server will run on 8080 port and the frontend on 3000 port. Open the browser and visit this URL
$ http://localhost:3000
```

## Tecnologies

The following tecnologies were used in the construction of the project:

- Frontend:

  - [Nextjs](https://nextjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [React Hook Form](https://react-hook-form.com/)
  - [Docker](https://www.docker.com/)

- Backend:
  - [Nestjs](https://nestjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Docker](https://www.docker.com/)

# Welcome to **Epag Documentation**

Our comprehensive developer resources and API documentation are crafted to provide developers with an in-depth understanding of epag's suite of products. These materials serve as a guide to explore the robust features we offer and the versatile applications of our API. Developers can delve into detailed examples, best practices, and custom integration strategies that showcase the potential of our platform. Whether you're looking to streamline payment processes, enhance user experience, or integrate advanced functionalities, our documentation is designed to support you every step of the way.

This repository contains the source code for the Epag Documentation website built with [Docusaurus](https://docusaurus.io/). It leverages a Dockerized setup to simplify both local development and deployment.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Running the Project with Docker](#running-the-project-with-docker)
  - [Using Docker Compose](#using-docker-compose)
  - [Running with Docker Directly](#running-with-docker-directly)
- [Local Development](#local-development)
- [Building Documentation](#building-documentation)

## Introduction

Epag Documentation is more than just a site—it’s your portal into understanding and utilizing the full spectrum of epag’s innovative solutions. Crafted with Docusaurus, this project ensures that the documentation is both robust and easily maintainable. With our Docker setup, you can quickly spin up the environment, allowing you to focus on exploring and integrating the API’s capabilities into your projects.

## Prerequisites

- **Docker**: Ensure you have Docker installed on your system.
- **Docker Compose**: Required for the Docker Compose setup.

> You can download Docker from [docker.com](https://www.docker.com/).

## Running the Project with Docker

The project is pre-configured with a `Dockerfile` and a `docker-compose.yml` file to ease the process of running the documentation site.

### Using Docker Compose

1. Build and Start the Container
Run the following command to build the Docker image and start the container:

```bash
docker-compose up --build
```

2. Access localhost
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the documentation.

3. Stopping the Container
To stop the container, press `Ctrl+C` in your terminal and then run:

```bash
docker-compose down
```

## Running with Docker Directly

If you prefer to run the project using Docker commands without Docker Compose, follow these steps:

1. Build the Docker Image

```bash
docker build -t epag-docs .
```

2. Run the Container
```bash
docker run -d -p 3000:3000 --name docusaurus epag-docs
```

3. Access localhost

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

4. Stopping and Removing the Container
```bash
docker stop docusaurus
docker rm docusaurus
```

## Local Development

If you want to work on the project locally without Docker:

1. Install Node.js (version >= 18.0) if you haven't already.
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run start
```

The development server will run on [http://localhost:3000](http://localhost:3000).

## Building Documentation

To generate the static files for production:
```bash
npm run build
```
The output will be available in the `build` directory.
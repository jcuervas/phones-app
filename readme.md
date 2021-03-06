# Phones app

This is a repository showing some feature implementation for demo purposes.  

This application is built on javascript stack using the following:
  - nodejs/express wrapped in [nestjs](https://docs.nestjs.com/) framework for backend
  - Mysql as data layer with [typeorm](https://typeorm.io/) library
  - SSR frontend with React and [Next.js](https://nextjs.org/)
  - Material design components library [MUI](https://mui.com/)
  - Yarn as package manager (this opt-in but make and docker commands run with yarn)
  - Docker for packaging

Application just shows a phones listing with some basic filtering and pagination (server side). 
Each phone has a detail page which shows more information and pictures in a carousel

## Folder structure

This repository joins backend, datalayer and frontend implementation, which normally would live in separate
repositories or with submodules in a monorepo orchestrated by docker. For the sake of simplicity as this is 
a demo project i've decided to join all layers in the same one. 
Folders structure is as follow:
- mysql: has sql initialization and .env files needed by docker
- phones-api: has backend code (Nestjs)
- phones-app: has frontend code (Nextjs)
- Root folder: where makefile, docker-compose and this readme live.

## Getting started
To simplify development i rely on Make to execute commands.  
Please, be sure to setup your env files by renaming .env.sample files to .env

### Setup
To install make:
#### Windows
- Install chocolatey from [here](https://chocolatey.org/install).
- Then, ``choco install make``

#### Linux
- ``sudo apt-get install build-essential`` This package will install make and other useful tools

#### Mac
- install [brew](https://formulae.brew.sh/)
- then ``brew install make``

For a list of available make commands just run ``make help``

Application is packed into a docker-compose for production deliver so ensure you have docker and docker-compose

### Install dependencies
``make install``

Or go into phones-api and phones-app and `yarn install`

### Database setup
Setup and seed MySql database by starting its service through docker-compose. Just run ``make ddbb``.  
This will create a Docker container with Mysql and create a persistent volume into mysql/data folder. It will also
create the database and user to connect to it. After that will start api container just to run migrations and seed
database. After that api container is stopped.  
This option is intended for dev purposes as api will be run in local environment to get watch features. If you need
to start the app for production just use ``make prod``

## Production
To start all containers and run the app in production mode run ``make prod``.  
This will build and start all containers. After that will run migrations and seed Database

## Tests
There is a docker-compose.tests for this. Run ``make api-test-start``  
This will setup a test database, start api to run migrations (only first time is really needed) and then stop api
After that run ``make tests-e2e-api`` to run api tests.  
App tests relies on cypress, ``make tests-e2e-app`` to run app tests

## Api Docs
To see api docs just start ddbb and api containers and navigate to ``http://localhost:3005/api``

## Author notes
There are some more things i couldn't cover just for a matter of time like error handling, 
security, authentication a more customized theme in app or a more complete data modeling (i would like to create relations with
categories, prices and internationalization). But any question regarding this can be discussed further.


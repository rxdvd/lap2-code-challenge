# lap2-code-challenge

Paired coding challenge to create an anonymous thought posting website similar to [telegra.ph](https://telegra.ph/) using a database.

## Installation & Usage

1. Clone the repo using `git clone https://github.com/rxdvd/lap2-code-challenge.git`.
2. Enter the directory `cd lap2-code-challenge`

### Docker

#### Usage

* `npm start` to run the dev environment (client, API server, database)
  * Client exposed at `localhost:8000`
  * Server exposed at `localhost:3000`
* `npm test` to run an integration test (API, DB) and see test coverage.
* `npm stop` to stop and remove all containers and associated volumes
* Do not run both dev and test environments at the same time
* Run `npm stop` before starting up either enviroment

### Server

*Note: when running the API server standalone, it must have access to a MongoDB database using environment variables `DB_CONNECTION_URI` and `DB_NAME` for the connection URI and database name respectively.*

#### Installation

1. Run `npm install` in the `./api` directory

#### Usage

* In the `./api` directory:
  * Run `npm start` to start the API server
  * Run `npm run dev` to start the API server with `nodemon`
  * Run `npm run seedDb` to seed the dev database
  * Run `npm test` to run integration tests and see test coverage for the DB and API

### Client

#### Installation

1. Run `npm install` in the `./client` directory
2. Run `npm build` to create a javascript bundle

#### Usage

* In the `./client` directory:
  * Run `npm start` to start the client server on `localhost:8080`
  * Run `npm test` to run client side tests
  * Run `npm build` to create a javascript bundle using [`browserify`](https://browserify.org/)
  * Run `npm watch` to create javascript bundles on watch mode

## Changelog

### Client

- Changed message body on form to textarea
- Made fields on form required
- Improved styling for desktop
- Added date and time to posts

### API

- Factored out `/posts` routes in to a separate file
- Factored out controllers into a separate file
- Created a Post class to handle creating and looking up posts
- Connected API to database

### Database

- Added `post_id` to schema
- Integration testing

## Bugs/Issues

### Client

- [x] Visiting the webpage for a post doesn't load the post if not already on webpage
- [x] Unexpectedly logs "cats" to the console

### API

- [x] Test for `POST` route expects wrong value
- [x] Successful post creation returns status code 200 instead of 201
- [x] Unsuccesful post creation returns status code 200 instead of 422
- [x] Uncaught error from Post class when trying to find a post that doesn't exist

### Database

- [x] Database not seeding properly

## Wins & Challenges

* When using the `mongodb` client on the API to initialise the database, the connection wasn't closed and the process was left hanging. Discovered that `client.close()` needs to be called explicitly for the process to end.
* When trying to drop a database collection that didn't exist a namespace error was thrown. It turned out that non-existent collections cannot be dropped using the `mongodb` client despite it being possible from inside the mongo shell.
* Figured out how to set up a docker environment for integration testing.

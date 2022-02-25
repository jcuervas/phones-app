
down: ## stop all the containers
	docker-compose down

prod: ## start all the containers and run migrations
	docker-compose up -d
	docker-compose exec api yarn migration:run

ddbb: ## start database service
	docker-compose up -d ddbb
	docker-compose up -d api
	docker-compose exec api yarn migration:run
	docker-compose stop api

dev-api: ## start nest api for local development
	cd phones-api && NODE_OPTIONS='-r dotenv/config' yarn start:dev

dev-app: ## start next app for local development
	cd phones-app && yarn dev

tests-e2e-api: ## Run api tests
	cd phones-api && NODE_OPTIONS='-r dotenv/config' yarn test:e2e

tests-e2e-app: ## Run app tests with cypress
	cd phones-app yarn test:e2e

install: ## Install dependencies for api and app
	cd phones-api && yarn
	cd phones-app && yarn

help: ## Show this message. Commands usage: make [options] [arguments]\n
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

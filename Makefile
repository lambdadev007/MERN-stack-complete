dev: ## Build and run local environment
	cp ./backend/.env.example ./backend/.env
	cp ./frontend/.env.example ./frontend/.env
	docker-compose build
	docker-compose up -d

dev-down:
	docker-compose down -v

dev-logs:
	docker-compose logs --tail=100 -f backend

ssh:
	docker exec -it backend /bin/bash

staging: install-deploy ## Deploy to staging environment
	deploy/staging.py

production: install-deploy ## Deploy to production environment
	deploy/production.py

build-push-backend: ## Build and push production backend image
	deploy/ecr-login.sh
	docker build -t 736685040696.dkr.ecr.us-east-1.amazonaws.com/edl-wineclub-backend backend/
	docker push 736685040696.dkr.ecr.us-east-1.amazonaws.com/edl-wineclub-backend

build-push-frontend: ## Build and push production frontend image
	deploy/ecr-login.sh
	docker build -t 400936075989.dkr.ecr.us-east-1.amazonaws.com/crawl-app-frontend
	frontend/
	docker push 736685040696.dkr.ecr.us-east-1.amazonaws.com/edl-wineclub-frontend

install-deploy:
	python -m pip install --upgrade pip
	pip install -r deploy/requirements.txt

logs: ## Display logs for local environment
	docker-compose logs --tail=100 -f
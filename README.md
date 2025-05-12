# Nike Shoes Store - Docker Setup

This repository contains a Django-based Nike Shoes Store application with full Docker configuration for easy deployment.

## Features

- Django web application for an e-commerce sneaker store
- Product image carousel for showcasing multiple product images
- Shopping cart functionality with quantity selector
- Docker and Docker Compose setup for easy deployment
- Nginx for serving static and media files

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Quick Start

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nike-shoes-store
   ```

2. Build and start the containers:
   ```
   docker-compose up --build
   ```

3. Access the application:
   - Web application: http://localhost
   - Admin interface: http://localhost/admin

4. To run in development mode without Docker:
   ```
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

## Configuration

Environment variables can be set in the `docker-compose.yml` file:

- `DEBUG`: Set to 1 for development, 0 for production
- `SECRET_KEY`: Django secret key (change for production)
- `ALLOWED_HOSTS`: Comma-separated list of allowed hosts

## Project Structure

- `nike_shoes_store/`: Django project settings
- `store/`: Main application directory
- `templates/`: HTML templates
- `static/`: Static assets (CSS, JS, images)
- `media/`: Uploaded media files
- `nginx/`: Nginx configuration
- `Dockerfile`: Docker image configuration
- `docker-compose.yml`: Docker Compose services definition

## Production Deployment

For production deployment, update the following in `docker-compose.yml`:

```yaml
environment:
  - DEBUG=0
  - DJANGO_SETTINGS_MODULE=nike_shoes_store.settings_prod
  - SECRET_KEY=your-secure-production-secret-key
  - ALLOWED_HOSTS=your-domain.com,www.your-domain.com
```

## Adding Products

1. Access the Django admin interface at http://localhost/admin
2. Log in with your superuser credentials
3. Navigate to Products and add new products with images
4. Multiple images can be added to each product for the carousel feature

## Docker Commands

```bash
# Start the application
docker-compose up

# Start in detached mode
docker-compose up -d

# Stop the application
docker-compose down

# View logs
docker-compose logs

# Rebuild containers
docker-compose up --build
```

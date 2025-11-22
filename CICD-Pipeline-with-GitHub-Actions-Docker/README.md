
# CI/CD Pipeline Demo - Node + Docker + GitHub Actions

## What it does
- Runs tests on push/PR
- Builds Docker image and pushes to Docker Hub
- Deploys to Minikube (local) or run with docker-compose

# CICD-Pipeline-with-GitHub-Actions-Docker  
This repository contains a sample Node.js application that demonstrates a CI/CD pipeline using GitHub Actions and Docker. The pipeline includes automated testing, building a Docker image, and pushing it to Docker Hub.

## Prerequisites
- A GitHub account
- A Docker Hub account
- GitHub repository with the code
- Docker installed locally for testing

## Setup Instructions
1. **Clone the Repository**: Clone this repository to your local machine.
   ```bash
   git clone
    ```
2. **Create Docker Hub Repository**: Create a new repository on Docker Hub to store your Docker images.
3. **Set Up GitHub Secrets**: In your GitHub repository, navigate to `Settings` > `Secrets` and add the following secrets:
    - `DOCKERHUB_USERNAME`: Your Docker Hub username.
    - `DOCKERHUB_ACCESS TOKEN`: A Docker Hub access token or password.
4. **Push Changes**: Push any changes to the `main` branch to trigger the GitHub Actions workflow.

## Workflow Overview
The GitHub Actions workflow defined in `.github/workflows/ci-cd.yml` performs the following steps:

1. **Checkout Code**: Checks out the code from the repository.
2. **Set Up Node.js**: Sets up the Node.js environment.
3. **Install Dependencies**: Installs the necessary dependencies using npm.
4. **Run Tests**: Executes the test suite to ensure code quality.
5. **Build Docker Image**: Builds a Docker image of the application.
6. **Push Docker Image**: Pushes the Docker image to Docker Hub.

## Quick start
1. `npm install`
2. `npm test`
3. `docker build -t <user>/ci-cd-node-docker:latest .`
4. `docker run -p 3000:3000 <user>/ci-cd-node-docker:latest`

## CI
- Workflow file: `.github/workflows/ci-cd.yml`.
- Requires GitHub secrets: `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`.

## Deploy to Minikube
1. `minikube start --driver=docker`
2. `kubectl apply -f k8s/deployment.yaml`
3. `minikube service cicd-node-service --url`



## Screenshots
### GitHub Actions Workflow


### A: Test app locally
```npm install```
<img width="671" height="283" alt="image" src="https://github.com/user-attachments/assets/3cabbd40-2fcf-43d5-af52-c8b5672adfd9" />

```npm test```
<img width="625" height="135" alt="image" src="https://github.com/user-attachments/assets/caf769aa-4607-4bd2-9f1a-7feead8797d3" />

``` npm start ```
<img width="602" height="134" alt="image" src="https://github.com/user-attachments/assets/9c9f92f3-ffe1-40f7-ac28-45f0fee5f08a" />


![alt text](screenshots/JsonResponse.png)

### B: Build Docker image locally
```
 docker build -t rubi58/cicd-pipeline-with-github-actions-docker:local .


```
<img width="675" height="336" alt="image" src="https://github.com/user-attachments/assets/867a0e11-ab31-479f-abf1-6bc16a34ea2e" />

<img width="583" height="240" alt="image" src="https://github.com/user-attachments/assets/f7b3f6b5-0835-4de1-9f0c-9bc9c727c3b7" />

<img width="884" height="110" alt="image" src="https://github.com/user-attachments/assets/761210de-343f-460c-94c2-6b369709fc3e" />
<img width="766" height="356" alt="image" src="https://github.com/user-attachments/assets/d532ffd0-5893-443b-af1f-a1d5a34e6831" />
<img width="747" height="102" alt="image" src="https://github.com/user-attachments/assets/52a49d30-eb4f-42b2-81cd-7423abe92eaf" />


```
 docker run --rm -p 3001:3000 rubi58/cicd-pipeline-with-github-actions-docker:local
# open http://localhost:3000

```
<img width="938" height="65" alt="image" src="https://github.com/user-attachments/assets/ef66213e-3f87-4e64-893a-8d69f909c28a" />

### C:Test with docker-compose
```
docker-compose up --build
# open http://localhost:3000
```
<img width="717" height="541" alt="image" src="https://github.com/user-attachments/assets/30baac97-fced-4619-9fbe-d9090a19a929" />

<img width="653" height="246" alt="image" src="https://github.com/user-attachments/assets/64d61b7f-74c1-4b1b-99d5-44e91cc82687" />

<img width="783" height="214" alt="image" src="https://github.com/user-attachments/assets/5cb629fc-3442-4d3b-be72-f30c3d9929d8" />

### After the image is pushed to Docker Hub — deploy to Minikube


## Conclusion
This project demonstrates how to set up a CI/CD pipeline using GitHub Actions and Docker. By following the steps outlined above, you can automate the testing and deployment of your applications, ensuring faster and more reliable releases.





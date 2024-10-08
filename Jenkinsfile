pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '4337dd51-b18c-4d6f-afb5-53199725baea'
        NETLIFY_AUTH_TOKEN = 'nfp_R6xdniGX7cn7nP1SYcUCpkmvtmCkXyWubd1e'
    }

    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Checkout') {
            steps {
                script {
                    git url: 'https://github.com/jashan-lefty/HD-Task.git', branch: 'main'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }
        
        stage('Build Image') {
            steps {
                script {
                    bat 'docker build -t jashan:1.0 .'
                }
            }
        }

        stage('Deploy to Test Environment') {
            steps {
                script {
                    // Deploy using Docker Compose to a staging environment
                    bat 'docker-compose down || true'  // Stop any previous instance
                    bat 'docker-compose up -d'         // Start the container in detached mode
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    bat 'npm install'

                    // Start the application in a new terminal
                    bat 'start cmd /c "npm start"'

                    // Run Selenium tests in a separate terminal
                    bat 'start cmd /c "node test.js"'

                    // Wait for a few seconds using sleep
                    sleep(time: 10, unit: 'SECONDS')
                }
            }
        }

        stage('Deploy to Netlify') {
            steps {
                script {
                    // Check Node and npm versions to ensure proper setup
                    bat 'node -v'
                    bat 'npm -v'

                    // Install netlify-cli globally if not already installed
                    bat 'npm install -g netlify-cli'

                    // Deploy the app to Netlify
                    bat """
                    npx netlify deploy --dir=./build --prod --auth=${NETLIFY_AUTH_TOKEN} --site=${NETLIFY_SITE_ID}
                    """
                }
            }
        }

        
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
    }
}
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-dockerhub-jashan992/react-app'
        TEST_ENV = 'test-env'
        PROD_ENV = 'prod-env'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm install'
                sh 'npm run build'
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm run test'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                echo 'Running code quality analysis...'
                // Assuming you have SonarQube installed
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner'
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging...'
                script {
                    docker.image(DOCKER_IMAGE).run("-d --name ${TEST_ENV}")
                }
            }
        }

        stage('Release to Production') {
            steps {
                input 'Do you want to promote this build to production?'
                echo 'Deploying to production...'
                script {
                    docker.image(DOCKER_IMAGE).run("-d --name ${PROD_ENV}")
                }
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                echo 'Setting up monitoring...'
                // Assuming you have Datadog or New Relic for monitoring
                sh 'datadog-agent start' // Replace with actual monitoring commands
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker stop ${TEST_ENV} || true'
            sh 'docker rm ${TEST_ENV} || true'
        }
    }
}

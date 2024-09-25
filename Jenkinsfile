pipeline {
    agent any


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

        stage('Test') {
            steps {
                script {
                    bat 'npm install'
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
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
    }
}
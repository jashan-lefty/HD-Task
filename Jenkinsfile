pipeline {
    agent any

    environment {
        DIRECTORY_PATH = 'C:/ProgramData/Jenkins/.jenkins/workspace/Task_6.2HD'
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
                    git url: 'https://github.com/CodeSnake-wq/SIT223_6.2hd.git', branch: 'main'
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
                    bat 'docker build -t aakash:1.0 .'
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
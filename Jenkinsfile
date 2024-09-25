pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'nfp_q4LYonGisRwY3U6d9S77Z6RZLeufaHqg3dcf'
        NETLIFY_AUTH_TOKEN = '4337dd51-b18c-4d6f-afb5-53199725baea'
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

        stage('Test') {
            steps {
                script {
                    bat 'npm install'
                    // Run Selenium tests using WebDriverIO or Selenium
                    bat 'node test.js'
                }
            }
        }

        stage('Deploy to Netlify') {
            steps {
                script {
                    bat """
                    npx netlify deploy --dir=./build --prod --auth=${NETLIFY_AUTH_TOKEN} --site=${NETLIFY_SITE_ID}
                    """
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
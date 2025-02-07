## Project Description

The project is a React-based web application designed to demonstrate the integration of a
Jenkins pipeline for Continuous Integration and Continuous Deployment (CI/CD). The goal is to
automate the entire process of building, testing, code quality analysis, deployment, and
production release. React is used for building the user interface, providing a dynamic and
interactive web experience.

The Jenkins pipeline consists of several stages, each responsible for a critical part of the
development lifecycle. In the Build stage, the application is compiled, and a Docker image is
created to ensure consistency across environments. Automated testing is conducted in the Test
stage, using Selenium to validate the UI and functionality of the React application.
For deployment, Docker Compose is used to spin up a staging environment in the Deploy
stage, simulating real-world deployment scenarios. Finally, the application is released to
production using Netlify, ensuring it is live and accessible to users. Datadog is integrated for
real-time monitoring and alerting, ensuring the production environment runs smoothly and any
issues are promptly addressed.

# Technologies Used:
• React for front-end development.
• Jenkins for continuous integration and deployment (CI/CD).
• Docker and Docker Compose for containerizing and deploying the application.
• Selenium for automated testing.
• Netlify for release management and production deployment.

# Different stages of Jenkins pipeline
• Build Stage: In this stage, the React project is compiled, and a Docker image is created.
The Dockerfile is used to ensure the app runs in a consistent environment across
different systems. This stage also verifies that the codebase is free of syntax or
compilation errors.
• Test Stage: Automated tests using Selenium are executed to validate the functionality of
the React app. The tests check critical UI elements and ensure expected behaviors.
• Deploy Stage: The application is deployed to a staging environment using Docker
Compose. This stage simulates the production environment, ensuring the application is
correctly deployed and runs as expected before final release.
• Release Stage: The app is released to production using Netlify. This stage ensures the
application is publicly accessible via a secure URL, providing a seamless production
environment deployment.

# Testing Framework Used and Tests Conducted
The testing framework used in this project is Selenium WebDriver, which enables automated
browser testing for the React application. Selenium, coupled with ChromeDriver, helps execute
end-to-end tests to ensure that the application's key functionalities work as expected in real
browsers. In this case, the tests focus on verifying the page title and checking if specific UI
elements, such as the "Learn React" link, are correctly displayed. By running these tests in a
headless mode, the process becomes faster and more efficient. The tests simulate real-world
user interactions with the React app, ensuring that any critical issues are caught early in the
pipeline. This helps identify potential UI bugs or functionality errors before deployment. The use
of automation in testing speeds up the feedback loop, ensures code quality, and minimizes
human error during the testing phase.

# Deployment Tool and Test Environment
Docker Compose is the deployment tool used to deploy the React application into a test
environment. Docker ensures that the application runs consistently across different machines
by packaging it in a containerized format. In the test environment, Docker Compose is
configured to spin up the necessary services and networks, emulating a staging environment
that mirrors production. This setup allows the application to be tested in a near-production
environment, ensuring that any issues are caught before the final deployment. The application
is deployed to a staging server, exposing it to external testing, and allowing the development
team to validate its functionality, performance, and security. Docker’s environment variables
help ensure that the app runs according to its configured staging settings. Running the app in
such an isolated environment ensures that it behaves correctly under real-world scenarios, and
any bugs or configuration issues can be identified and resolved before the final release to
production.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

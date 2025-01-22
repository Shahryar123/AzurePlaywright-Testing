# AzureResourceManagement-SDK

Effortlessly fetch and manage Azure resource details using the Azure SDK for Node.js! This project demonstrates how to utilize the `ResourceManagementClient` from the `@azure/arm-resources` package to interact with Azure resources in your subscription.

## 🌟 Features
- Fetch all resources in your Azure subscription.
- List resource details including name, type, location, and ID.
- Built with Node.js and the Azure SDK for easy integration into your cloud workflows.

## 📋 Prerequisites
- An active Azure subscription.
- Azure CLI installed. Download Azure CLI.

- Install Azure SDK dependencies:
    - npm install @azure/identity @azure/arm-resources.
- Set up Azure authentication:
    - az login.

## 🌟 Execution
    - node azure-sdk/app.js

# Azure Playwright Testing 

## 🌟 Execution
    - npm init playwright@latest 
    - npx playwright test
    - npx playwright test --headed (Includes GUI)

## 📋 Summary of Key Commands (Playwright):
- Run tests: 
    npx playwright test
- Run tests in headed mode: 
    npx playwright test --headed
- Run a specific test file: 
    npx playwright test path/to/test-file.spec.js
- Generate test code using Playwright Inspector: 
    npx playwright codegen https://example.com
- Install browsers: 
    npx playwright install
- Enable video recording: 
    npx playwright test --video=on
- Run tests in parallel: 
    npx playwright test --workers=4
- Run with trace: 
    npx playwright test --trace on
- List test projects: 
    npx playwright list-projects
- Show the test report: 
    npx playwright show-report

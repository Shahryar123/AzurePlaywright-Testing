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
    - npx playwright test (Run tests)
    - npx playwright test --headed (Run tests in headed mode)
    - npx playwright test path/to/test-file.spec.js (Run a specific test file)
    - npx playwright codegen https://example.com (Generate test code using Playwright Inspector)
    - npx playwright install (Install browsers)
    - npx playwright test --video=on (Enable video recording)
    - npx playwright test --workers=4 (Run tests in parallel)
    - npx playwright test --trace on (Run with trace)
    - npx playwright list-projects (List test projects)
    - npx playwright show-report (Show the test report)

name: Cypress CI/CD - Full Test Suite

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: ${{ github.workspace }}

    steps:
      # 1️⃣ Checkout code
      - name: Checkout code
        uses: actions/checkout@v3

      # 2️⃣ Debug: confirm working directory
      - name: Print current working directory
        run: pwd

      # 3️⃣ Setup Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22

      # 4️⃣ Install dependencies
      - name: Install dependencies
        run: npm install

      # 5️⃣ Run Cypress tests for all specs with Mochawesome
      - name: Run all Cypress tests
        run: npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports/html,reportFilename=mochawesome,overwrite=false,html=true,json=true

      # 6️⃣ Merge Mochawesome reports if JSON exists
      - name: Merge Mochawesome reports
        run: |
          if ls cypress/reports/html/*.json 1> /dev/null 2>&1; then
            npm run merge-reports
          else
            echo "No JSON reports to merge."
          fi

      # 7️⃣ Generate HTML report if JSON exists
      - name: Generate HTML report
        run: |
          if [ -f cypress/reports/html/mochawesome.json ]; then
            npm run generate-report
          else
            echo "No JSON report to generate HTML from."
          fi

      # 8️⃣ Upload artifacts safely
      - name: Upload Cypress artifacts
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-artifacts
          path: |
            cypress/screenshots/**/*
            cypress/videos/**/*
            cypress/reports/html/**/*
        continue-on-error: true

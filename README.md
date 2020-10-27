This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using redux-typescript template.

[TOC]

## For what is the boilerplate

For any user who doesn't want to waste time configuring a baseline project.

### How to use it

In order to use this boilerplate as a baseline for your project fork it from bitbucket:

- Go to a repository, click + on the leftmost global sidebar and select Fork this repository at the bottom of the lists.

- In the Fork dialog, define the options for your fork.

### What technologies contains

- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://github.com/reduxjs/react-redux)
- [Redux-toolkit](https://github.com/reduxjs/redux-toolkit#readme)
- [StyledComponents](https://styled-components.com/)
- [json-server](https://github.com/typicode/json-server)
- [Jest](https://jestjs.io/)
- [Cypress](https://github.com/cypress-io/cypress)
- [Lint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [husky](https://typicode.github.io/husky/#/)

### Scripts

```json
{
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --coverage --watchAll=false",
  "lint": "eslint . --ext .ts,.tsx --color",
  "lint:fix": "eslint . --ext .ts,.tsx --fix",
  "pretty": "prettier --write \"{cypress,src}/**/*.{js,jsx,ts,tsx,json}\"",
  "api": "node ./mock-api/server.js",
  "cypress:start-app": "set PORT=3030 && set BROWSER=none && react-scripts -r @cypress/instrument-cra start",
  "cypress:open": "cypress open",
  "cypress:run": "cypress run",
  "cypress:e2e": "start-server-and-test cypress:start-app http://localhost:3030 cypress:run",
  "coverage": "npm run coverage:clean && npm test && npm run cypress:e2e",
  "postcoverage": "npm run coverage:combine",
  "coverage:clean": "rm -rf .nyc_output coverage coverage-cypress coverage-combined reports || true",
  "coverage:copy": "node scripts/coverage.js",
  "coverage:combine": "npm run coverage:copy && npx nyc merge reports .nyc_output/out.json && npx nyc report --reporter lcov --reporter text --report-dir coverage-combined"
}
```

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

#### `npm test`

Launches the test runner.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run api`

Runs a full fake REST API using `db.json` file.<br />

See the section about [mock server](https://www.npmjs.com/package/json-server#getting-started) for more information.

#### `npm run cypress:start-app`

Start the application in port 3030.

#### `npm run cypress:open`

Opens the Cypress Test Runner.<br />

See the section about [open options](https://docs.cypress.io/guides/guides/command-line.html#cypress-open) for more information.

#### `npm run cypress:run`

Runs Cypress tests to completion. By default, `cypress run` will run all tests headlessly in the Electron browser.<br />

See the section about [run options](https://docs.cypress.io/guides/guides/command-line.html#cypress-run) for more information.

#### `npm run cypress:e2e`

Runs scripts `cypress:start-app` and `cypress:run`.

#### `npm run coverage`

Collects, print and export test coverage of the whole application, this includes unit and e2e tests.

const fs = require('fs');
const path = require('path');

const fsPromises = fs.promises;
const { COPYFILE_EXCL } = fs.constants;

const cypressFolder = 'coverage-cypress';
const cypressFile = 'coverage-final.json';

const jestFolder = 'coverage';
const jestFile = 'coverage-final.json';

const reportsFolder = 'reports';
const reportsJestFile = 'coverage-unit.json';
const reportsCypressFile = 'coverage-e2e.json';

fsPromises
  .mkdir(path.join(__dirname, '../', reportsFolder), { recursive: true })
  .then(() => {
    const copyJest = fsPromises.copyFile(
      path.join(jestFolder, jestFile),
      path.join(reportsFolder, reportsJestFile),
      COPYFILE_EXCL
    );

    const copyCypress = fsPromises.copyFile(
      path.join(cypressFolder, cypressFile),
      path.join(reportsFolder, reportsCypressFile),
      COPYFILE_EXCL
    );

    Promise.all([copyJest, copyCypress])
      .then(() => console.log('Reports created!'))
      .catch(() => {
        console.log('Reports failed!');
        process.exit(1);
      });
  })
  .catch(err => {
    console.log('Report folder creation failed!');
    process.exit(1);
  });

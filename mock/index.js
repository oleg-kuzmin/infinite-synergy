import { appendFile, unlink } from 'fs';

(function createDataBase() {
  const bigArray = [];

  for (let index = 0; index < 1_000_000; index++) {
    const id = index;
    const newObject = {
      id: id,
      name: `User ${id}`,
      department: 'Development',
      company: 'Infinite Synergy',
      jobTitle: 'Developer',
    };
    bigArray.push(newObject);
  }

  unlink('public/mock/dataBase.json', err => {
    if (err && err.code === 'ENOENT') {
      console.info("File dataBase.json doesn't exist.");
    } else if (err) {
      console.error('Error occurred while trying to remove file');
    } else {
      console.info(`Removed old file dataBase.json`);
    }
  });

  appendFile('public/mock/dataBase.json', JSON.stringify(bigArray), err => {
    if (err) throw err;
    console.log('New file dataBase.json has been created.');
  });
})();

// RUN: node mock

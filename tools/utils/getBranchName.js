const {exec} = require('child_process');

module.exports = (callback) => {
  return exec('git rev-parse --abbrev-ref HEAD', (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }

    callback(stdout.trim());
  });
};

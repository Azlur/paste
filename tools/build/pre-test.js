const chalk = require('chalk');
const {updatePackageCache} = require('../utils/updatePackageCache');

(async () => {
  await updatePackageCache();
})();

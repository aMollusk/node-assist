var fs = require("fs");

module.exports = function recursiveSearchSync(path, testFn) {
  var result = [];
  fs.readdirSync(path).forEach(x => {
    var resPath = path + "/" + x;
    if (fs.lstatSync(resPath).isDirectory()) {
      result = result.concat(recursiveSearchSync(resPath, testFn));
    } else if (testFn(x)) {
      result.push(resPath);
    }
  });
  return result;
};

const path = require('path');
const fs = require('fs');

const subjects = {};
const siteMap = [];
const targetPath = '../../static/';
const postDirectory = path.join(__dirname, targetPath);

(function generateSitemap(directory) {
  const postList = [];
  const fileKey = directory.replace(postDirectory + '/', '');
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    const fileAddress = directory + path.sep + file;
    if (fs.statSync(fileAddress).isDirectory()) {
      generateSitemap(fileAddress);
    } else {
      const postPath = fileAddress.replace('.md', '');
      const path = postPath.replace(postDirectory + '/', '');
      const siteRoute = postPath.replace(postDirectory, '');
      const to = postPath.replace(directory + '/', '');
      let title;
      let date;
      const postProof = to.indexOf('=@=');
      siteMap.push(siteRoute);

      if (postProof > 0) {
        date = to.substring(0, postProof);
        title = to.substring(postProof + 3);
      }

      postList.push({ title, date, path, to });
    }
  });
  if (postList.length === 0) {
    return;
  }
  postList.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  subjects[fileKey] = postList;
})(postDirectory);

module.exports = { subjects, siteMap };

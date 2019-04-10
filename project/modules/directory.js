const path = require('path');
const fs = require('fs');

const postSet = {};
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
      const title = postPath.replace(directory + '/', '');
      const siteRoute = postPath.replace(postDirectory, '/post');
      siteMap.push(siteRoute);
      postList.push({ title, path });
    }
  });
  if (postList.length === 0) {
    return;
  }
  postList.sort((a, b) => parseInt(a.title.replace(fileKey + '/', '')) - parseInt(b.title.replace(fileKey + '/', '')));
  postSet[fileKey] = postList;
})(postDirectory);
console.log(postSet, siteMap);
module.exports = { postSet, siteMap };

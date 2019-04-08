export const postDirectory = path.join(__dirname, '/static/post');
(function generateSitemap(directory) {
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    const fileAddress = directory + path.sep + file;
    if (fs.statSync(fileAddress).isDirectory()) generateSitemap(fileAddress);
    else sitemap.push(fileAddress.replace(postDirectory, ''));
  });
})(postDirectory);

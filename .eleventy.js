module.exports = function (eleventyConfig) {
  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist',
    },
  };
};

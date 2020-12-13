module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.addPassthroughCopy('src/assets/css');

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

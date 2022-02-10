module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        basePath: `/digital-garden`,
        rootNote: `/digital-garden/Index`,
        contentPath: `content`,
        parseWikiLinks: true,
      },
    },
  ],
};

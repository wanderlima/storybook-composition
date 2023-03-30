module.exports = {
  stories: [],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  features: {
    buildStoriesJson: true,
  },
  refs: {
    twig: {
      title: "Twig",
      url: "http://localhost:6008",
    },
  },
};

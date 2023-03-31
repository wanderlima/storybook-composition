module.exports = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  features: {
    buildStoriesJson: true,
  },
  refs: {
    react: {
      title: "React",
      url: "http://localhost:6007",
    },
    html: {
      title: "html",
      url: "http://localhost:6008",
    },
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

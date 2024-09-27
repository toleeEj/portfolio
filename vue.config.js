const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/myElectroMark/" // Replace 'your-repo-name' with the name of your GitHub repository
      : "/",
};

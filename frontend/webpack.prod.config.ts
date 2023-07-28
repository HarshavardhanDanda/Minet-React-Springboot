import { merge } from "webpack-merge";

import commonConfig from "./webpack.dev.config";

module.exports = () => {
  const envConfig = require(`./webpack.common.ts`);
  return merge(commonConfig, envConfig);
};

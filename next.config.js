const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  webpack: config => {
    /**
     * Returns environment variables as an object
     */
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      console.log(acc);
      return acc;
    }, {});
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

     /** Allows you to create global constants which can be configured
    * at compile time, which in our case is our environment variables
    */
    config.plugins.push(new webpack.DefinePlugin(env));

    return config
  }
}

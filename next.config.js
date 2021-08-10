module.exports = {
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: ["@svgr/webpack"],
      })
<<<<<<< HEAD
=======
      config.module.rules.push({
         test: /\.md$/,
         use: "raw-loader",
      })
>>>>>>> gh-pages

      return config
   },
}

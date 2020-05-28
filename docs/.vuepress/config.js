module.exports = {
  postcss: {
    plugins: [
      require("autoprefixer"),
		  require("tailwindcss")("./tailwind.config.js")
    ]
  },
  title: "wdwiramadhan",
  description: "My Personal Site"
};
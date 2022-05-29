module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF6F00",
          "secondary": "#644F9C",
          "accent": "#404040",
          "neutral": "#F2F2F2",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-bg": "#333A3F",
        "btn-color": "#6B757D",
        mainBackColor: "#282B33",
        singleBackColor: "#020A16",
      },
      height: {
        "nav-calc": "calc(100vh - 4rem)",
        BodyHeight: "calc(100vh - 7rem)",
      },
    },
  },
  plugins: [],
};

import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["lato", "merriweather", "material-icons"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
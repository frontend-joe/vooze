import Color from "color";

const colorPrimary = "#465775";
const colorSecondary = "#48A9A6";
const colorAccent = colorSecondary;

const colorPrimaryFaint = Color(colorPrimary)
  .lighten(1.575)
  .hex();

const colorSecondaryFaint = Color(colorSecondary)
  .lighten(0.95)
  .hex();

const colorAccentFaint = colorSecondaryFaint;

const colorSidebar = "#161b25";

export const themeBlue = {
  colorPrimary,
  colorSecondary,
  colorAccent,
  colorAccentFaint,
  colorPrimaryFaint,
  colorSecondaryFaint,
  colorSidebar
};

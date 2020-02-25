import Color from "color";

const colorPrimary = "#4357AD";
const colorSecondary = "#4C98AD";
const colorAccent = colorSecondary;

const colorPrimaryFaint = Color(colorPrimary)
  .lighten(1.575)
  .hex();

const colorSecondaryFaint = Color(colorSecondary)
  .lighten(0.95)
  .hex();

const colorAccentFaint = colorSecondaryFaint;

const colorSidebar = "#161b25";

const colorGradientLeft = colorPrimary;
const colorGradientRight = colorSecondary;

export const themeBlue = {
  colorPrimary,
  colorSecondary,
  colorAccent,
  colorAccentFaint,
  colorPrimaryFaint,
  colorSecondaryFaint,
  colorSidebar,
  colorGradientLeft,
  colorGradientRight
};

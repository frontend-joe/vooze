import Color from "color";

const colorPrimary = "#522cad";
const colorSecondary = "#C322E0";
const colorAccent = colorSecondary;
const colorSidebar = "#1a1323";
const colorGradientLeft = colorPrimary;
const colorGradientRight = colorSecondary;

const colorPrimaryFaint = Color(colorPrimary)
  .lighten(1.25)
  .hex();

const colorSecondaryFaint = Color(colorSecondary)
  .lighten(0.9)
  .hex();

const colorAccentFaint = colorSecondaryFaint;

export const themePink = {
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

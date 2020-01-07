import Color from "color";

const colorPrimary = "#5b4677";
const colorSecondary = "#C45BAA";
const colorAccent = colorSecondary;
const colorSidebar = "#1a1323";

const colorPrimaryFaint = Color(colorPrimary)
  .lighten(1.5175)
  .hex();

const colorSecondaryFaint = Color(colorSecondary)
  .lighten(0.625)
  .hex();

const colorAccentFaint = colorSecondaryFaint;

export const themePink = {
  colorPrimary,
  colorSecondary,
  colorAccent,
  colorAccentFaint,
  colorPrimaryFaint,
  colorSecondaryFaint,
  colorSidebar
};

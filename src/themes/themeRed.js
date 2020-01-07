import Color from "color";

const colorPrimary = "#d44c4c";
const colorPrimaryFaint = Color(colorPrimary)
  .lighten(0.695)
  .hex();

const colorSecondary = "#2E2E3A";
const colorSecondaryFaint = Color(colorSecondary)
  .lighten(3.5)
  .hex();

const colorAccent = colorPrimary;
const colorAccentFaint = colorPrimaryFaint;

const colorSidebar = "#100d0d";

export const themeRed = {
  colorPrimary,
  colorPrimaryFaint,
  colorSecondary,
  colorSecondaryFaint,
  colorAccent,
  colorAccentFaint,
  colorSidebar
};

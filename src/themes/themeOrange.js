import Color from "color";

const colorPrimary = "#1b8681";
const colorSecondary = "#8EC0ED";
const colorAccent = colorPrimary;

const colorPrimaryFaint = Color(colorPrimary)
  .lighten(0.45)
  .hex();

const colorSecondaryFaint = Color(colorSecondary)
  .lighten(2.6)
  .hex();

const colorAccentFaint = colorPrimaryFaint;

const colorSidebar = "#101010";

export const themeOrange = {
  colorPrimary,
  colorPrimaryFaint,
  colorSecondary,
  colorSecondaryFaint,
  colorAccent,
  colorAccentFaint,
  colorSidebar
};

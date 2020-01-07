import Color from "color";

const colorPrimary = "#ec7e65";
const colorSecondary = "#444140";
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

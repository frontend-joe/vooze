import { rgba } from "polished";
import { css } from "vue-styled-components";

export const createTheme = (
  baseTheme,
  colorPrimary,
  colorPrimaryFaint,
  colorSecondary,
  colorSecondaryFaint,
  colorAccent,
  colorAccentFaint,
  colorGradientLeft,
  colorGradientRight,
  chartColors3,
  chartColors,
  colorSidebar
) => {
  //create gradient
  const gradientPrimary = css`
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#243444+0,41b883+100 */
    background: ${colorGradientLeft}; /* Old browsers */
    background: -moz-linear-gradient(
      left,
      ${colorGradientLeft} 0%,
      ${colorGradientRight} 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      ${colorGradientLeft} 0%,
      ${colorGradientRight} 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      ${colorGradientLeft} 0%,
      ${colorGradientRight} 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${colorGradientLeft}', endColorstr='${colorGradientRight}',GradientType=1 ); /* IE6-9 */
  `;

  let newTheme = {
    ...baseTheme,
    colorPrimaryGradient: gradientPrimary,
    colorPrimary,
    colorPrimaryFaint,
    colorSecondary,
    colorSecondaryFaint,
    colorAccent,
    colorAccentFaint,
    colorOverlay: rgba(colorPrimary, 0.275),
    colorTopbar: colorPrimary,
    chartColors3,
    chartColors,
    colorSidebar
  };

  return newTheme;
};

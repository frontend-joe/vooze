import { lighten, darken, rgba } from "polished";

const colorPrimary = "#243444";
const colorSecondary = "#41b883";
const colorAccent = colorSecondary;

const colorRed = "#de5b5b";
const colorOrange = "#ec7e65";
const colorBlue = "#6274F6";
const colorYellow = "#EFCB68";
const colorTeal = "#48a9a6";
const colorPurple = "#76489e";
const colorGreen = "#41b883";
const colorIndigo = "#48259e";

const colorChartGrey = "#d4d8dc";

const colorPrimaryFaint = lighten(0.7, colorPrimary);
const colorSecondaryFaint = lighten(0.4, colorSecondary);
const colorAccentFaint = colorSecondaryFaint;

const colorRedFaint = lighten(0.3, colorRed);
const colorOrangeFaint = lighten(0.285, colorOrange);
const colorBlueFaint = lighten(0.25, colorBlue);
const colorYellowFaint = lighten(0.4, colorYellow);
const colorTealFaint = lighten(0.45, colorTeal);
const colorPurpleFaint = lighten(0.485, colorPurple);
const colorGreenFaint = lighten(0.425, colorGreen);
const colorIndigoFaint = lighten(0.55, colorIndigo);

const gradientBackgroundBlueLeft = "#0288d1";
const gradientBackgroundBlueRight = "#26c6da";
const gradientBackgroundPinkLeft = "#ff5252";
const gradientBackgroundPinkRight = "#f48fb1";
const gradientBackgroundYellowLeft = "#ff6f00";
const gradientBackgroundYellowRight = "#ffca28";
const gradientBackgroundGreenLeft = "#43a047";
const gradientBackgroundGreenRight = "#1de9b6";
const gradientBackgroundPurpleLeft = "#4c429a";
const gradientBackgroundPurpleRight = "#9956ce";

const chartColors1 = ["#6274F6", "#1dce8e", "#F6B569"];
const chartColors2 = [colorPurple, colorTeal, colorRed];
const chartColorsLoads = [
  colorPurple,
  colorTeal,
  colorRed,
  colorBlue,
  colorYellow
];

const colorText = "#606060";

export const themeDefault = {
  barFillOpacity: 0.85,
  borderRadius: "0.25rem",
  borderButtonRadius: "0.375rem",
  defaultTransition: "0.25s",
  transition: "0.25s",
  fontFamily: "Alata",
  screenWidthXs: "576px",
  screenWidthSm: "768px",
  screenWidthMd: "992px",
  screenWidthLg: "1200px",
  screenWidthXl: "1440px",
  screenWidthXxl: "1600px",
  boxShadowDefault: "0 0 6px 0 rgba(0, 0, 0, 0.275)",
  boxShadowNeu: "8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff",
  chartColors1,
  chartColors2,
  chartColorsLoads,
  colorPrimary,
  colorPrimaryFaint,
  colorSecondary,
  colorSecondaryFaint,
  colorAccent,
  colorAccentFaint,
  colorAqua: "#c9d7f3",
  colorBackground: "#ffffff",
  colorBackgroundGrey: "#f8f8f9",
  colorBarChart1: "#9BA6F9",
  colorBarChart2: "#8FDAD1",
  colorBarChart3: "#78C0E0",
  colorBlack: "#1a1323",
  colorBlue,
  colorBlueFaint,
  colorBorder: "#dee3ec",
  colorBubbleBackground: "rgba(0, 0, 0, 0.025)",
  colorButtonDefault: "#f7f7f7",
  colorButtonDefaultOutline: "#cccccc",
  colorCardBackground: "#ffffff",
  colorCardBackgroundNeu: "#f3f3f3",
  colorCardBorder: "rgba(112,112,112,.12)",
  colorCardOverlay: "rgba(255, 255, 255, 0.5)",
  colorCardHeader: "#f0f1f3",
  colorChart1: "#ce6d8b",
  colorChart2: "#6274F6",
  colorChart3: "#1dce8e",
  colorChart4: "#F6B569",
  colorChart5: "#CE6D8B",
  colorChartLabel: rgba("black", 0.25),
  colorChartGrey,
  colorChartGreyDark: darken(0.075, colorChartGrey),
  colorChartLineDark: "#243444",
  colorDanger: "#d44c4c",
  colorDangerLight: "#FDF0F0",
  colorDisabledBackground: "#ececec",
  colorDisabledText: "#b1b1b1",
  colorDropdownMenu: "#ffffff",
  colorFooter: "#ffffff",
  colorGradientLeft: "red",
  colorGradientRight: "blue",
  colorGreen,
  colorGreenFaint,
  colorGrey: "#bdbec7",
  colorGreyInactive: "#a7a7a7",
  colorHover: "#f5f5f5",
  colorIconForDark: "rgba(255,255,255,0.15)",
  colorIconForLight: "rgba(0,0,0,0.075)",
  colorIconActive: "#a6a6a6",
  colorIconDisabled: "#d6d6d6",
  colorIndigo,
  colorIndigoFaint,
  colorIconHover: "#424242",
  colorLabel: "#a1a5a5",
  colorOrange: colorOrange,
  colorOrangeFaint: colorOrangeFaint,
  colorOverlay: rgba("#6c739c", 0.275),
  colorPaginationButtonHover: "#f7f7f7",
  colorPaginationDot: "#d4d5dc",
  colorPink: "#C13584",
  colorPlaceholder: "#b1afaf",
  colorProgressBackground: "#e9ecef",
  colorPurple,
  colorPurpleFaint,
  colorRed,
  colorRedFaint,
  colorRowAlternate: "#f7f6f9",
  colorRowHover: "#f9fbfd",
  colorSidebar: "#0d1023",
  colorSidebarDefault: "#0d1023",
  colorSidebarButtonText: colorText,
  colorSidebarBorder: "#2d2c44",
  colorSidebarHeader: "#5e6160",
  colorSidebarSectionDivider: "#232725",
  colorSidebarButtonActive: "#bec3c1",
  colorSidebarButtonBackgroundActive: rgba(255, 255, 255, 0.0275),
  colorSkeleton: "#dcddde",
  colorSkeletonGlimmer: "white",
  colorSpinnerGrey: "#eef0f3",
  colorSubtitle: "#a7a7a7",
  colorSuccess: "#52c41a",
  colorTableHeader: "rgba(0,0,0,0.0)",
  colorTeal,
  colorTealFaint,
  colorText: colorText,
  colorTooltipBackground: "white",
  colorTopbar: colorPrimary,
  colorTopbarButton: "rgba(255, 255, 255, 0.75)",
  colorTopbarButtonHover: "rgba(255, 255, 255, 0.88)",
  colorWarning: "#F6B569",
  colorWhite: "#ffffff",
  colorWhiteAlways: "#ffffff",
  colorYellow,
  colorYellowFaint,
  gradientBackgroundBlueLeft,
  gradientBackgroundBlueRight,
  gradientBackgroundPinkLeft,
  gradientBackgroundPinkRight,
  gradientBackgroundYellowLeft,
  gradientBackgroundYellowRight,
  gradientBackgroundGreenLeft,
  gradientBackgroundGreenRight,
  gradientBackgroundPurpleLeft,
  gradientBackgroundPurpleRight
};

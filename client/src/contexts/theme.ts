import { LightTheme, DarkTheme } from "@pankod/refine-mui";

const overridedLightTheme = {
  ...LightTheme,
  palette: {
    ...LightTheme.palette,
    primary: {
      main: "#fcfcfc",
      dark: "#DADEFA",
      contrastText: "#808191",
    },
    secondary: {
      main: "#fcfcfc",
      contrastText: "#fff",
    },
    background: {
      default: "#F4F4F4",
      paper: "#fcfcfc",
    },
    text: {
      primary: "#11142D",
      secondary: "#808191",
      disabled: "#c1c1c1",
    },
  },
};

const overridedDarkTheme = {
  ...DarkTheme,
  palette: {
    ...DarkTheme.palette,
    primary: {
      main: "#111315",
      dark: "#111315",
      contrastText: "#808191",
    },
    secondary: {
      main: "#1A1D1F",
      contrastText: "#fff",
    },
    background: {
      default: "#111315",
      paper: "#1A1D1F",
    },
    text: {
      primary: "#fff",
      secondary: "#808191",
      disabled: "#d1d1d1",
    },
  },
};

export { overridedLightTheme, overridedDarkTheme };

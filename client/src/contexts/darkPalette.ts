import { PaletteOptions } from "@mui/material";

export const darkPalette: PaletteOptions = {
    mode: "dark",
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
    success: {
        main: "#67be23",
        contrastText: "#fff",
    },
    error: {
        main: "#ee2a1e",
        contrastText: "#fff",
    },
    warning: {
        main: "#fa8c16",
        contrastText: "#fff",
    },
    info: {
        main: "#1890ff",
        contrastText: "#fff",
    },
    divider: "rgba(0,0,0,0)",
    text: {
        primary: "#fff",
        secondary: "#808191",
        disabled: "#d1d1d1",
    },
};

import { extendTheme, stringifyTheme } from "@mui/material";

const themeRaw = extendTheme({
  components: {
    MuiFab: {
      styleOverrides: {
        extended: {
          // borderRadius: 12,
          borderRadius: `12px !important`,
        },
        root: {
          background: `red !important`,
        },
      },
    },
  },
});
// @ts-ignore
themeRaw.toRuntimeSource = stringifyTheme;

export const theme = themeRaw;

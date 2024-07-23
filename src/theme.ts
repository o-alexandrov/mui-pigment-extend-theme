import { extendTheme } from "@mui/material/styles";

const themeRaw = extendTheme({
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          background: `red !important`,
          variants: [
            {
              props: { variant: "extended" },
              style: { borderRadius: 12 },
            },
          ],
        },
        extended: {},
      },
    },
  },
});

export const theme = themeRaw;

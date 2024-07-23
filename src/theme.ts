import { extendTheme } from "@mui/material/styles";

export const theme = extendTheme({
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

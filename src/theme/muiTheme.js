import { createTheme } from "@mui/material/styles";

/*
    uygulamanın muı temasını üretir
    Redux'tan gelen moda göre light / dark teması döner
*/



export function getAppTheme(mode = "light") {
    const isDark = mode === "dark";

    return createTheme ({
        palette: {
            mode,
            background: {
                default: isDark ?  "#0f0f12" : "#fff7fb",
                paper: isDark ? "#17171c" : "#ffffff",
            },
            text: {
                primary: isDark ?  "#f3f3f3" : "#2f2f2f",
                secondary: isDark ? "rgba(243,243,243,0.75)" : "rgba(47,47,47,0.7)",
            },
            primary: { main: isDark ? "#c8b6e2" : "#f4c2d7" },
            secondary: { main: isDark ? "#f4c2d7" : "#7a4a2e" },
        },
        shape: { borderRadius: 16 },
        typography: {
            fontFamily:
             'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
        },
        // arka planı garantiye almak için 
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                       backgroundColor: isDark ? "#0f0f12" : "#fff7fb",
                       transition: "background-color 250ms ease, color 250ms ease", 
                    }
                }
            }
        }
    });
}
import { Navigate, Outlet, Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import { SnackbarProvider } from "notistack";
import { SesionContext, SesionProvider } from "./providers/SesionProvider";
import { useContext } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import {
  ChangeThemeContext,
  ChangeThemeProvider,
} from "./providers/ChangeThemeProvider";
import { esES as dataGridEs } from "@mui/x-data-grid";
import { esES as coreEs } from "@mui/material/locale";
import { esES as dateEs } from "@mui/x-date-pickers/locales";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const PrivateRoutes = () => {
  const { sesion } = useContext(SesionContext);

  return sesion ? <Outlet /> : <Navigate to="/login" />;
};

const ReturnTheme = () => {
  const { theme, setTheme } = useContext(ChangeThemeContext);
  console.log(theme);
  setTheme();
  const ThemeApp = createTheme(
    {
      palette: {
        mode: theme ? "light" : "dark",
        primary: { main: "#596BAB" },
      },
    },
    dataGridEs
  );
  return ThemeApp;
};

const lightTheme = createTheme(
  {
    palette: {
      mode: "light",
      primary: { main: "#596BAB" },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "filled",
          size: "small",
        },
        styleOverrides: {},
      },
      MuiTypography: {
        defaultProps: {},
      },
      MuiCard: {
        defaultProps: {
          variant: "outlined",
        },
      },
    },
  },
  dataGridEs,
  coreEs,
  dateEs
);

const App = () => {
  return (
    <ChangeThemeProvider>
      <SesionProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SnackbarProvider autoHideDuration={2000} maxSnack={2}>
            <ThemeProvider theme={lightTheme}>
              {/* Establece los estilos base para la aplicación */}
              <CssBaseline />
              <HashRouter>
                <Routes>
                  <Route element={<PrivateRoutes />}>
                    <Route path="/*" element={<HomePage />} />
                  </Route>
                  <Route path="/login" element={<LoginPage />} />
                </Routes>
              </HashRouter>
            </ThemeProvider>
          </SnackbarProvider>
        </LocalizationProvider>
      </SesionProvider>
    </ChangeThemeProvider>
  );
};

export default App;

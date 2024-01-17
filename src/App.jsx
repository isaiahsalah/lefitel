import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { SnackbarProvider } from "notistack";
import { SesionContext, SesionProvider } from "./providers/SesionProvider";
import { useContext } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const PrivateRoutes = () => {
  const { sesion } = useContext(SesionContext);

  return sesion ? <Outlet /> : <Navigate to="/login" />;
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#596BAB" },
  },
});
function App() {
  return (
    <SesionProvider>
      <SnackbarProvider autoHideDuration={2000} maxSnack={2}>
        <ThemeProvider theme={lightTheme}>
          {/* Establece los estilos base para la aplicación */}
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/*" element={<HomePage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </SnackbarProvider>
    </SesionProvider>
  );
}

export default App;

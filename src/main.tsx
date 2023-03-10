import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";

import theme from "./theme";
import "./index.css";
import router from "./routes/root";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </ThemeProvider>
  // </React.StrictMode>,
);

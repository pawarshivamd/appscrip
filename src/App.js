import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./Page/Home";
import Navbar from "./components/Navbar/Navbar";
export const theme = createTheme({

  typography: {
    fontFamily: ["Simplon Norm"].join(","),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./infrastructure/theme/theme";
import { Home } from "./screens/home/home.screen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;

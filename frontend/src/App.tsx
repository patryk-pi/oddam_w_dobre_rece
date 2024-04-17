import { Outlet } from "react-router-dom";
import GlobalStyles from "./assets/components/styles/Global";
import theme from "./assets/components/styles/Theme";
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Outlet />
        </ThemeProvider>
    );
}

export default App;

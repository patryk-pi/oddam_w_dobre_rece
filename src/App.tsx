import GlobalStyles from "./assets/components/styles/Global";
import theme from "./assets/components/styles/Theme";
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </ThemeProvider>
    );
}

export default App;

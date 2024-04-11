import AboutUs from "./assets/components/AboutUs";
import ContactForm from "./assets/components/ContactForm";
import Foundations from "./assets/components/Foundations";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import GlobalStyles from "./assets/components/styles/Global";
import theme from "./assets/components/styles/Theme";
import { ThemeProvider } from "styled-components";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Hero />
            <AboutUs />
            <Foundations />
            <ContactForm />
        </ThemeProvider>
    );
}

export default App;

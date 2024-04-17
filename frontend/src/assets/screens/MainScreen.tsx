import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Foundations from "../components/Foundations";
import ContactForm from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainScreen = () => {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <Foundations />
            <ContactForm />
            <Footer />
        </>
    );
};
export default MainScreen;

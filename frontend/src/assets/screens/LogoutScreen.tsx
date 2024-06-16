import AuthHeader from "../components/AuthHeader";
import Navigation from "../components/Navigation";
import { StyledMainPageButton } from "../components/styles/LoginForm.styled";

const LogoutScreen = () => {
    return (
        <>
            <Navigation />
            <AuthHeader action="Wylogowanie nastąpiło pomyślnie!" />
            <StyledMainPageButton>
                <a href="/">Strona główna</a>
            </StyledMainPageButton>
        </>
    );
};
export default LogoutScreen;

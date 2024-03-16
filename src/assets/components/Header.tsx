import Navigation from "./Navigation";
import StyledContainer from "./styles/Container.styled";
import { StyledHeader, StyledImage } from "./styles/Header.styled";

const Header = () => {
    return (
        <StyledHeader>
            <StyledImage
                src="src/assets/images/Hero-Image.webp"
                alt="Pile of clothes"
            />
            <StyledContainer>
                <Navigation />
            </StyledContainer>
        </StyledHeader>
    );
};
export default Header;

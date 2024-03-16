import { StyledHeader, StyledImage } from "./styles/Header.styled";

const Header = () => {
    return (
        <StyledHeader>
            <StyledImage
                src="src/assets/images/Hero-Image.webp"
                alt="Pile of clothes"
            />
        </StyledHeader>
    );
};
export default Header;

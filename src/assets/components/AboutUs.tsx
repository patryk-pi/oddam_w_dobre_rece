import AboutUsCard from "./AboutUsCard";
import { StyledAboutUs, StyledImageContainer } from "./styles/AboutUs.styled";

const AboutUs = () => {
    return (
        <StyledAboutUs>
            <AboutUsCard />
            <StyledImageContainer>
                <img src="src/assets/images/People.jpg" alt="People" />
            </StyledImageContainer>
        </StyledAboutUs>
    );
};
export default AboutUs;

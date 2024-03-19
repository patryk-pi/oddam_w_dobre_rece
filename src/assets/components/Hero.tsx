import BigButton from "./BigButton";
import Decoration from "./Decoration";
import Numbers from "./Numbers";
import Steps from "./Steps";
import {
    StyledButtonContainer,
    StyledHero,
    StyledHeroHeader,
} from "./styles/Hero.styled";

const Hero = () => {
    return (
        <StyledHero>
            <Numbers />
            <StyledHeroHeader>
                <h2>Wystarczą 4 proste kroki</h2>
                <Decoration />
            </StyledHeroHeader>
            <Steps />
            <StyledButtonContainer>
                <BigButton text="oddaj rzeczy" link="#" />
            </StyledButtonContainer>
        </StyledHero>
    );
};
export default Hero;

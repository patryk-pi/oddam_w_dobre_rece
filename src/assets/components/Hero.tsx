import Decoration from "./Decoration";
import Numbers from "./Numbers";
import Steps from "./Steps";
import { StyledHero, StyledHeroHeader } from "./styles/Hero.styled";

const Hero = () => {
    return (
        <StyledHero>
            <Numbers />
            <StyledHeroHeader>
                <h2>Wystarczą 4 proste kroki</h2>
                <Decoration />
            </StyledHeroHeader>
            <Steps />
        </StyledHero>
    );
};
export default Hero;

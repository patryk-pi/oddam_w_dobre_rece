import Decoration from "./Decoration";
import { StyledAboutUsCard } from "./styles/AboutUsCard.styled";

const AboutUsCard = () => {
    return (
        <StyledAboutUsCard>
            <h2>O nas</h2>
            <Decoration />
            <div>
                <p>
                    Nori grape silver beet broccoli kombu beet greens fava bean
                    potato quandong celery. Bunya nuts black-eyed pea prairie
                    turnip leek lentil turnip greens parsnip.
                </p>
                <img src="src/assets/images/Signature.svg" alt="" />
            </div>
        </StyledAboutUsCard>
    );
};
export default AboutUsCard;

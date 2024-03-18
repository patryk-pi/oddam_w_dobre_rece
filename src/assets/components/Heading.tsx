import BigButton from "./BigButton";
import Decoration from "./Decoration";

import {
    StyledHeading,
    StyledHeadingButtons,
    StyledHeadingContainer,
} from "./styles/Heading.styled";

const Heading = () => {
    return (
        <StyledHeading>
            <StyledHeadingContainer>
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <Decoration />
                <StyledHeadingButtons>
                    {/* ROUTES TO BE DEFINED!!! */}
                    <BigButton text="Oddaj rzeczy" link="#" />
                    <BigButton text="Zorganizuj zbiórkę" link="#" />
                </StyledHeadingButtons>
            </StyledHeadingContainer>
        </StyledHeading>
    );
};
export default Heading;

import BigButton from "./BigButton";

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
                <img
                    src="src/assets/images/Decoration@2x.png"
                    alt="Decoration"
                />
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

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
                    <a href="#">
                        Oddaj
                        <br /> rzeczy
                    </a>
                    <a href="#">Zorganizuj zbiórkę</a>
                </StyledHeadingButtons>
            </StyledHeadingContainer>
        </StyledHeading>
    );
};
export default Heading;

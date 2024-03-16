import styled from "styled-components";

interface StyledContainerProps {
    flexbox?: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
    display: ${({ flexbox }) => (flexbox ? flexbox : "block")};
`;

export default StyledContainer;

import styled from "styled-components";

interface StyledContainerProps {
    flexbox?: string;
    column?: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
    display: ${({ flexbox }) => (flexbox ? flexbox : "block")};
    flex-direction: ${({ column }) => (column ? "column" : "row ")};
    flex-grow: 1;
`;

export default StyledContainer;

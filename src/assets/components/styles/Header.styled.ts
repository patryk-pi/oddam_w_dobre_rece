import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const StyledImage = styled.img`
    width: auto;
    height: 88rem;
    margin-left: -45rem;

    @media (max-width: 1720px) {
        height: 80rem;
    }
`;

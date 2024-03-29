import styled from "styled-components";

export const StyledBigButton = styled.a`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 3.6rem;
    font-weight: 300;
    width: 31rem;
    height: 12rem;
    border: 1px solid ${({ theme }) => theme.colors.black};
    padding: 0 4rem;
`;

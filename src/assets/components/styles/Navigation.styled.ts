import styled from "styled-components";

interface StyledLoginProps {
    border?: string;
}

export const StyledNavigation = styled.nav``;

export const StyledLogin = styled.ul`
    display: flex;

    li {
        &:last-of-type button {
            border: 1px solid ${({ theme }) => theme.colors.yellow};
        }
    }

    button {
        color: ${({ theme }) => theme.colors.grey};
        font-size: 1.4rem;
        padding: 1rem 0.9rem;
    }
`;

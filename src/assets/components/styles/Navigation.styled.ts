import styled from "styled-components";

export const StyledNavigation = styled.nav`
    margin-right: 15rem;
    display: flex;
    flex-direction: column;
`;

export const StyledLogin = styled.ul`
    display: flex;
    margin-top: 4.5rem;
    align-self: flex-end;

    li {
        &:last-of-type a {
            border: 1px solid ${({ theme }) => theme.colors.yellow};
        }
    }

    a {
        color: ${({ theme }) => theme.colors.grey};
        font-size: 1.4rem;
        padding: 1rem 0.9rem;
    }
`;

export const StyledLinks = styled.ul`
    display: flex;
    gap: 3.5rem;
    font-size: 1.8rem;

    li {
        padding: 1rem 2rem;
        border: 1px solid transparent;
        transition: all 0.3s ease-in;

        &:hover {
            border: 1px solid ${({ theme }) => theme.colors.black};
        }
    }
`;

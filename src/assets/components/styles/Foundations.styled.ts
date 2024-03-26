import styled from "styled-components";

interface OrgItemProps {
    active?: boolean;
    onClick: () => void;
}

export const StyledFoundations = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 3.8rem;
        font-weight: 400;
        margin: 7rem 0 4rem;
    }
`;

export const StyledOrgList = styled.ul`
    display: flex;
    gap: 10rem;
    padding: 0;
    margin-top: 7rem;
`;

export const StyledOrgListItem = styled.li<OrgItemProps>`
    width: 21rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid
        ${({ active, theme }) => (active ? theme.colors.black : "transparent")};
    text-align: center;
    cursor: pointer;
    transition: border 0.2s ease-in;

    h4 {
        font-size: 2.4rem;
        font-weight: 400;
    }
`;

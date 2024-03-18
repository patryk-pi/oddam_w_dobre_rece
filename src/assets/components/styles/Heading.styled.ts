import styled from "styled-components";

export const StyledHeading = styled.div`
    margin-left: -18rem;

    div {
    }
`;

export const StyledHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 22rem;
    align-items: center;

    h1 {
        font-size: 3.8rem;
        font-weight: 300;
        text-align: center;

        &:last-of-type {
            margin-bottom: 2.5rem;
        }
    }
`;

export const StyledHeadingButtons = styled.div`
    display: flex;
    gap: 9.5rem;
    margin-top: 6.5rem;
`;

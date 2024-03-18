import styled from "styled-components";

export const StyledHeading = styled.div`
    margin-left: -18rem;

    div {
    }

    img {
        height: 3.3rem;
        width: 25.3rem;
        margin-bottom: 6.5rem;
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

    a {
        /* display: inline-block; */
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
    }
`;

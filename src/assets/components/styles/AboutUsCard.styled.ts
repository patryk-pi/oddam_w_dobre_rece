import styled from "styled-components";

export const StyledAboutUsCard = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    text-align: center;
    flex-basis: 50%;

    flex-grow: 1;

    h2 {
        font-size: 3.8rem;
        font-weight: 400;
        margin: 10rem auto 4rem;
    }

    div {
        position: relative;

        img {
            position: absolute;
            right: 8rem;
            bottom: -20rem;
            height: auto;
            margin-top: 4rem;
        }
    }

    img {
        &:first-of-type {
            margin: 0 auto;
        }
    }

    p {
        font-size: 3rem;
        line-height: 5.4rem;
        width: 66rem;
        margin: 5.5rem auto 0;
    }
`;

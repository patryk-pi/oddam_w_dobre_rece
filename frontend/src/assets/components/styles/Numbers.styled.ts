import styled from "styled-components";

export const StyledNumbers = styled.section`
    background-image: url("src/assets/images/background.webp");

    & > div {
        display: flex;
        justify-content: space-between;
        max-width: 150rem;
        margin: 0 auto;
        gap: 10rem;
    }
`;

export const StyledStatsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gold};
    margin: 4.6rem 0 8rem;
    width: 35rem;

    h2 {
        font-size: 9rem;
        font-weight: 300;
        margin-bottom: 2.8rem;
    }

    h5 {
        font-size: 1.8rem;
        font-weight: 400;
    }

    p {
        font-size: 1.6rem;
        font-weight: 300;
        text-align: justify;
        text-align-last: center;
        line-height: 1.5;
    }
`;

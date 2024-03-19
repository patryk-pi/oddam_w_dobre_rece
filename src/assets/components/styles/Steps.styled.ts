import styled from "styled-components";

export const StyledSteps = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 8rem 0;

    & > div {
        max-width: 110rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
`;

export const StyledStep = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    justify-content: center;
    text-align: center;

    img {
        height: 8.3rem;
        width: auto;
    }

    h5 {
        font-size: 1.8rem;
        font-weight: 400;
        margin-top: 1rem;
    }

    span {
        width: 7rem;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey};
        margin: 0.85rem 0;
    }

    p {
        font-size: 1.6rem;
        margin: 0;
    }
`;

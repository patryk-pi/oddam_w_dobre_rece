import styled from "styled-components";

export const StyledLoginForm = styled.section`
    margin: 6.7rem auto 0;
    width: 39rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        main {
            background-color: ${({ theme }) => theme.colors.white};
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 4rem 6.8rem;
            gap: 3rem;
            flex-shrink: 0;
            width: 100%;
        }

        input {
            background-color: transparent;
            border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
            font-size: 1.6rem;
            padding: 1rem 0.2rem;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
        }

        label {
            font-size: 1.6rem;
            font-weight: 500;
        }
    }
`;

export const StyledActionButtons = styled.section`
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120%;
    font-size: 1.8rem;
    font-weight: 300;

    button {
        font-size: 1.8rem;
        font-weight: 300;
        padding: 1.3rem 1.6rem;
        border: 1px solid ${({ theme }) => theme.colors.black};
    }
`;

export const StyledMainPageButton = styled.div`
    font-size: 1.8rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    a {
        margin: 0 auto;
        display: inline-block;
        padding: 1.3rem 1.8rem;
        border: 1px solid ${({ theme }) => theme.colors.black};
    }
`;

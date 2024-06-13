import styled from "styled-components";

export const StyledLoginForm = styled.section`
    margin: 6.7rem auto 0;
    width: 39rem;

    form {
        background-color: ${({ theme }) => theme.colors.white};
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4rem 6.8rem;
        gap: 3rem;

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

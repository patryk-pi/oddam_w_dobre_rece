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

        input {
            background-color: transparent;
            border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
        }

        label {
            font-size: 1.6rem;
        }
    }
`;

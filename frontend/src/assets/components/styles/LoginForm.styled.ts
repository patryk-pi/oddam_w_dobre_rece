import styled from "styled-components";

export const StyledLoginForm = styled.section`
    margin: 0 auto;

    form {
        background-color: ${({ theme }) => theme.colors.white};

        input {
            background-color: transparent;
        }
    }
`;

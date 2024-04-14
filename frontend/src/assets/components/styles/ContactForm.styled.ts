import styled from "styled-components";

export const StyledContactForm = styled.div`
    width: 53rem;
    z-index: 10;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 12rem;
    top: 15rem;

    h2 {
        font-size: 3.8rem;
        font-weight: 300;
        margin-bottom: 4rem;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 7.5rem;

        & > div {
            display: flex;
            justify-content: space-between;

            margin-bottom: 3rem;
            gap: 1rem;

            div {
                display: flex;
                width: 25rem;
                flex-direction: column;
            }
        }

        input {
            border-bottom: 1px solid ${({ theme }) => theme.colors.black};
            font-size: 1.8rem;
            padding: 0.4rem 0;
            background-color: transparent;

            &::placeholder {
                color: rgba(24, 24, 24, 0.2);
            }
        }

        label {
            margin-bottom: 1.2rem;
            font-family: "Open Sans", sans-serif;
            font-size: 1.6rem;
            font-weight: 600;
            align-self: flex-start;
        }

        label[for="message"] {
            margin-left: 2%;
            margin-top: 2rem;
        }

        textarea {
            resize: none;
            font-size: 1.8rem;
            padding: 0.4rem 0;
            background-color: transparent;
            border-bottom: 1px solid ${({ theme }) => theme.colors.black};

            &::placeholder {
                color: rgba(24, 24, 24, 0.2);
            }
        }

        button {
            margin-top: 4rem;
            align-self: flex-end;
            font-size: 1.8rem;
            padding: 1.3rem 5.2rem;
            border: 1px solid ${({ theme }) => theme.colors.black};
            transition: transform 0.3s ease-in;
            box-shadow: 0 0px 10px 1px rgba(128, 128, 128, 0.2);
            cursor: pointer;

            &:hover {
                transform: scale(0.95);
            }
        }
    }
`;

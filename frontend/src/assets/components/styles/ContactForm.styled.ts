import styled from "styled-components";

export const StyledContactForm = styled.div`
    width: 53rem;
    z-index: 10;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #3c3c3c;

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

        textarea {
            resize: none;
        }
    }
`;

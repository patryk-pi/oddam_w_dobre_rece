import styled from "styled-components";

export const StyledContactSection = styled.section`
    height: 85rem;
    width: auto;
    background: url("src/assets/images/Background-Contact-Form.jpg") no-repeat
        top center;
    background-size: cover;
    position: relative;
    margin-top: 10rem;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
    }
`;

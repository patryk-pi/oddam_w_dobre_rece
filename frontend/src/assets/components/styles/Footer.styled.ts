import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin-top: -7.2rem;
    position: relative;
    z-index: 20;
    padding: 2rem 14rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    h6 {
        font-size: 1.8rem;
        font-weight: 400;
    }

    div {
        display: flex;
        gap: 2rem;
        margin-left: auto;

        a {
            height: 3rem;
            width: 3rem;
            display: inline-block;

            svg {
                height: 100%;
                width: 100%;
                color: ${({ theme }) => theme.colors.black};
            }
        }
    }
`;

import styled from "styled-components";

export const StyledAboutUs = styled.section`
    display: flex;
    overflow: hidden;

    & > div {
        flex: 1;
        flex-grow: 1;
        flex-basis: 50%;
    }

    /* img {
        &:last-child {
            width: 80rem;
            height: auto;
            margin-right: -15rem;
        }
    } */
`;

export const StyledImageContainer = styled.div`
    margin-right: -5rem;
    min-height: 85rem;
    display: flex;
    align-items: center; /* Center the image vertically */

    img {
        /* min-height: 85rem; */

        height: 100%;
        width: calc(1.39 * height);
        object-fit: cover; /* Cover the entire container */
        object-position: center; /* Center the image within the container */
    }
`;

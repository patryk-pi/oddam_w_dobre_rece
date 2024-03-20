import { useState, useEffect } from "react";
import Decoration from "./Decoration";
import { StyledFoundations } from "./styles/Foundations.styled";

const [organization, setOrganization] = useState<string>("foundation");

const Foundations = () => {
    return (
        <StyledFoundations>
            <h2>Komu pomagamy</h2>
            <Decoration />
        </StyledFoundations>
    );
};
export default Foundations;

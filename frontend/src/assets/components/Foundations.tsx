import { useState } from "react";
import Decoration from "./Decoration";
import {
    StyledFoundations,
    StyledOrgList,
    StyledOrgListItem,
} from "./styles/Foundations.styled";

const Foundations = () => {
    const [organization, setOrganization] = useState<string>("charity");
    console.log(organization);

    return (
        <StyledFoundations>
            <h2>Komu pomagamy</h2>
            <Decoration />
            <StyledOrgList>
                <StyledOrgListItem
                    active={organization === "charity"}
                    onClick={() => setOrganization("charity")}
                >
                    <h4>Fundacjom</h4>
                </StyledOrgListItem>
                <StyledOrgListItem
                    active={organization === "ngo"}
                    onClick={() => setOrganization("ngo")}
                >
                    <h4>Organizacjom pozarządowym</h4>
                </StyledOrgListItem>
                <StyledOrgListItem
                    active={organization === "local"}
                    onClick={() => setOrganization("local")}
                >
                    <h4>Lokalnym zbiórkom</h4>
                </StyledOrgListItem>
            </StyledOrgList>
        </StyledFoundations>
    );
};

export default Foundations;

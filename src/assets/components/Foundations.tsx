import { useState } from "react";
import Decoration from "./Decoration";
import {
    StyledFoundations,
    StyledOrgList,
    StyledOrgListItem,
} from "./styles/Foundations.styled";

interface OrgItemProps {
    active?: boolean;
    onClick: () => void;
}

const Foundations = () => {
    const [organization, setOrganization] = useState<string>("foundation");
    console.log(organization);

    return (
        <StyledFoundations>
            <h2>Komu pomagamy</h2>
            <Decoration />
            <StyledOrgList>
                <StyledOrgListItem
                    active={organization === "foundation"}
                    onClick={() => setOrganization("foundation")}
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

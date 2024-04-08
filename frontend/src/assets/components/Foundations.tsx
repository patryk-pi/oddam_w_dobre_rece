import { useState } from "react";
import Decoration from "./Decoration";
import {
    StyledFoundations,
    StyledOrgList,
    StyledOrgListItem,
} from "./styles/Foundations.styled";
import { useGetOrgsQuery, useGetAllOrgsQuery } from "../slices/orgsApiSlice";

const Foundations = () => {
    const [organization, setOrganization] = useState<string>("charity");
    const [cursor, setCursor] = useState<string>("");

    const { data: orgs, error, isLoading } = useGetAllOrgsQuery({});
    console.log(orgs);

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
            <div>
                {orgs?.map((org: any) => {
                    return (
                        <div key={org._id}>
                            <h3>{org.orgName}</h3>
                            <p>{org.orgPurpose}</p>
                        </div>
                    );
                })}
            </div>
        </StyledFoundations>
    );
};

export default Foundations;

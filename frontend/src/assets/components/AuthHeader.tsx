import Decoration from "./Decoration";
import { StyledAuthHeader } from "./styles/AuthHeader.styled";

interface AuthHeaderProps {
    action: string;
}

const AuthHeader = ({ action }: AuthHeaderProps) => {
    return (
        <StyledAuthHeader>
            <h2>{action}</h2>
            <Decoration />
        </StyledAuthHeader>
    );
};
export default AuthHeader;

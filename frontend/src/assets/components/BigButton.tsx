import { StyledBigButton } from "./styles/BigButton.styled";

interface BigButtonProps {
    text: string;
    link: string;
}

const BigButton = ({ text, link }: BigButtonProps) => {
    return <StyledBigButton href={link}>{text}</StyledBigButton>;
};
export default BigButton;

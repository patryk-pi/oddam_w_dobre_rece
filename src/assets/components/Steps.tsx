import { StyledSteps } from "./styles/Steps.styled";

interface StepProps {
    icon: string;
    action: string;
    description: string;
}

const stepsArray: StepProps[] = [
    {
        icon: "Icon-1.svg",
        action: "Wybierz rzeczy",
        description: "ubrania, zabawki, sprzęt i inne",
    },
    {
        icon: "Icon-2.svg",
        action: "Spakuj je",
        description: "skorzystaj z worków na śmieci",
    },
    {
        icon: "Icon-3.svg",
        action: "Zdecyduj komu chcesz pomóc",
        description: "wybierz zaufane miejsce",
    },
    {
        icon: "Icon-4.svg",
        action: "Zamów kuriera",
        description: "kurier przyjedzie w dogodnym terminie",
    },
];

const Steps = () => {
    return <StyledSteps>Steps</StyledSteps>;
};
export default Steps;

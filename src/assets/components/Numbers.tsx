import StatsBox from "./StatsBox";
import StyledContainer from "./styles/Container.styled";
import { StyledNumbers, StyledStatsBox } from "./styles/Numbers.styled";

interface StatsProps {
    amount: number;
    action: string;
}

const statsArray: StatsProps[] = [
    {
        amount: 154,
        action: "ODDANYCH WORKÓW",
    },
    {
        amount: 10,
        action: "WSPARTYCH ORGANIZACJI",
    },
    {
        amount: 25,
        action: "WSPARTYCH ORGANIZACJI",
    },
];

const Numbers = () => {
    return (
        <StyledNumbers>
            <div>
                {statsArray.map(({ amount, action }, index) => (
                    <StatsBox key={index} amount={amount} action={action} />
                ))}
            </div>
        </StyledNumbers>
    );
};
export default Numbers;

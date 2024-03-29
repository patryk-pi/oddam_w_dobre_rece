import StatsBox from "./StatsBox";
import { StyledNumbers } from "./styles/Numbers.styled";

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
        action: "ZORGANIZOWANYCH ZBIÓREK",
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

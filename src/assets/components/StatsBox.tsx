import { StyledStatsBox } from "./styles/Numbers.styled";

interface StatsBoxProps {
    amount: number;
    action: string;
}

const StatsBox = ({ amount, action }: StatsBoxProps) => {
    return (
        <StyledStatsBox>
            <h2>{amount}</h2>
            <h5>{action}</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
                enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
        </StyledStatsBox>
    );
};
export default StatsBox;

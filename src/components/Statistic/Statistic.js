import { StatContainer, StatTittle, Rating } from './Statistic.styled';

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return ( 
        <StatContainer>
            <StatTittle>Statistics</StatTittle>
            <Rating>Good: {good}</Rating>
            <Rating>Neutral: {neutral}</Rating>
            <Rating>Bad: {bad}</Rating>
            <Rating>Total: {total}</Rating>
            <Rating>Positive percentage: {positivePercentage}%</Rating>
        </StatContainer>
    )
}





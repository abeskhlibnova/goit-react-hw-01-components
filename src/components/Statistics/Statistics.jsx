import { StatisticCard } from './StatisticCards';
import { StatisticTitle } from './StatisticTitle';
import { Statisctics } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Statisctics>
            <StatisticTitle title={title} />
            <StatisticCard stats={stats} />
        </Statisctics>
    );
};

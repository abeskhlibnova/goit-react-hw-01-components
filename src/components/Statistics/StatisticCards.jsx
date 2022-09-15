import PropTypes from 'prop-types';
import { StatisticWrapper } from './StatisticWrapper';
import { StatisticWrapperList } from './StatisticWrapper.styled';

export const StatisticCard = ({ stats }) => {
    return (
        <StatisticWrapperList>
            {stats.map(({ id, label, percentage }) => (
                <StatisticWrapper
                    key={id}
                    label={label}
                    percentage={percentage}
                />
            ))}
        </StatisticWrapperList>
    );
};

StatisticCard.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

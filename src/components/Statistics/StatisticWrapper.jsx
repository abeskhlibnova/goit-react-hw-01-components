import PropTypes from 'prop-types';
import {
    StatisticWrapperItem,
    StatisticWrapperLabel,
    StatisticWrapperPercentage,
} from './StatisticWrapper.styled';

export const StatisticWrapper = ({ label, percentage }) => {
    return (
        <StatisticWrapperItem>
            <StatisticWrapperLabel>{label}</StatisticWrapperLabel>
            <StatisticWrapperPercentage>
                {percentage}%
            </StatisticWrapperPercentage>
        </StatisticWrapperItem>
    );
};

StatisticWrapper.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

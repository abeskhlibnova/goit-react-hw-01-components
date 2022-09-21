import PropTypes from 'prop-types';
import { StatTitle } from './StatisticTitle.styled';

export const StatisticTitle = ({ title }) => {
    return <StatTitle>{title}</StatTitle>;
};

StatisticTitle.propTypes = {
    title: PropTypes.string,
};

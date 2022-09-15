import PropTypes from 'prop-types';
import {
    StatsList,
    StatsItem,
    StatsLabel,
    StatsQuantity,
} from './Stats.styled';

export const Stats = ({ followers, views, likes }) => {
    return (
        <StatsList>
            <StatsItem>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{followers}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{views}</StatsQuantity>
            </StatsItem>
            <StatsItem>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{likes}</StatsQuantity>
            </StatsItem>
        </StatsList>
    );
};

Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

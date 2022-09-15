import PropTypes from 'prop-types';
import { FriendsWrapper, Status, Avatar, Name } from './FriendsWrapper.styled';

export const FriendWrapper = ({ avatar, name, isOnline }) => {
    return (
        <FriendsWrapper>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
        </FriendsWrapper>
    );
};

FriendWrapper.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

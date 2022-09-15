import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem.styled';
import { FriendWrapper } from './FriendWrapper';

export const FriendsListItem = ({ friends }) => {
    return (
        <FriendListItem>
            {friends.map(({ avatar, id, name, isOnline }) => (
                <FriendWrapper
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
            ))}
        </FriendListItem>
    );
};

FriendsListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};

import { FriendList } from './FriendList.styled';
import { FriendsListItem } from './FriendListItem';

export const FriendsList = ({ friends }) => {
    return (
        <FriendList>
            <FriendsListItem friends={friends} />
        </FriendList>
    );
};

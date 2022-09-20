import { FriendList } from './FriendList.styled';
import { FriendsListItem } from './FriendListItem';

const FriendsList = ({ friends }) => {
    return (
        <FriendList>
            <FriendsListItem friends={friends} />
        </FriendList>
    );
};

export default FriendsList;

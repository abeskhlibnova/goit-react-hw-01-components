import { Profile } from '../components/Profile/ProfileCard/Profile';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';

export const App = () => {
    return (
        <Container>
            <Profile userInfo={user} />
            <Statistics title="Upload stats" stats={data} />
            <FriendsList friends={friends} />;
        </Container>
    );
};

import { Profile } from '../components/Profile/ProfileCard/Profile';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';
import { TransactionsHistory } from 'components/TransactionHistory/TransactionsHistory';

export const App = () => {
    return (
        <Container>
            <Profile userInfo={user} />
            <Statistics title="Upload stats" stats={data} />
            <FriendsList friends={friends} />
            <TransactionsHistory items={transactions} />
        </Container>
    );
};

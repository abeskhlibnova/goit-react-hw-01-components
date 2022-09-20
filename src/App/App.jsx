import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendsList from 'components/FriendList';
import TransactionsHistory from 'components/TransactionHistory';
import { Container } from './App.styled';

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

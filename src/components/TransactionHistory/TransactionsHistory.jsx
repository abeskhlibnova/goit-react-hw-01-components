import { TransactionsHistoryBoard } from './TransactionsHistory.styled';
import { TransactionsHistoryHeader } from './TransactionsHistoryHeader';
import { TransactionsHistoryBody } from './TransactionsHistoryBody';

export const TransactionsHistory = ({ items }) => {
    return (
        <TransactionsHistoryBoard>
            <TransactionsHistoryHeader />
            <TransactionsHistoryBody items={items} />
        </TransactionsHistoryBoard>
    );
};

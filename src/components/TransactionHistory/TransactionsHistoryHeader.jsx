import {
    TransactionsTHead,
    TransactionsTR,
    TransactionsTH,
} from './TransactionsHistoryHeader.styled';

export const TransactionsHistoryHeader = () => {
    return (
        <TransactionsTHead>
            <TransactionsTR>
                <TransactionsTH>Type</TransactionsTH>
                <TransactionsTH>Amount</TransactionsTH>
                <TransactionsTH>Amount</TransactionsTH>
            </TransactionsTR>
        </TransactionsTHead>
    );
};

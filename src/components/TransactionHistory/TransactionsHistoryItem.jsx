import PropTypes from 'prop-types';
import {
    TransactionsItemTR,
    TransactionsItemTD,
} from './TransactionsHistoryItem.styled';

export const TransactionsHistoryItem = ({ type, amount, currency }) => {
    return (
        <TransactionsItemTR>
            <TransactionsItemTD>{type}</TransactionsItemTD>
            <TransactionsItemTD>{amount}</TransactionsItemTD>
            <TransactionsItemTD>{currency}</TransactionsItemTD>
        </TransactionsItemTR>
    );
};

TransactionsHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

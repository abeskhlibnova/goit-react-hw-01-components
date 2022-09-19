import PropTypes from 'prop-types';
import { TransactionsTBody } from './TransactionsHistoryBody.styled';
import { TransactionsHistoryItem } from './TransactionsHistoryItem';

export const TransactionsHistoryBody = ({ items }) => {
    return (
        <TransactionsTBody>
            {items.map(({ id, type, amount, currency }) => (
                <TransactionsHistoryItem
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
            ))}
        </TransactionsTBody>
    );
};

TransactionsHistoryBody.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

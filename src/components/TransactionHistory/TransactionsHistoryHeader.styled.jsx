import styled from '@emotion/styled';

export const TransactionsTHead = styled.thead`
    background: #1c6ea4;
    border-bottom: 2px solid #444444;

    th {
        font-size: 15px;
        font-weight: bold;
        color: #ffffff;
        border-left: 2px solid #d0e4f5;
    }
    th:first-child {
        border-left: none;
    }
`;
export const TransactionsTR = styled.tr`
    &:nth-child(even) {
        background: #d0e4f5;
    }
`;
export const TransactionsTH = styled.th`
    border: 1px solid #aaaaaa;
    padding: 5px 5px;
    color: #2f4f4f;
`;

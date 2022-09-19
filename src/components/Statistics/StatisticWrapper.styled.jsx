import styled from '@emotion/styled';

const colors = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatisticWrapperList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

export const StatisticWrapperItem = styled.li`
    width: 100%;
    background-color: ${colors};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    text-shadow: 1px 1px 5px #ffffff;
    border-top: 1px solid rgb(0, 0, 0, 0.5);
    &:not(:last-child) {
        border-right: 1px solid rgb(0, 0, 0, 0.5);
    }
`;

export const StatisticWrapperLabel = styled.span`
    font-size: 30px;
`;
export const StatisticWrapperPercentage = styled.span`
    font-size: 30px;
    font-weight: 700;
`;

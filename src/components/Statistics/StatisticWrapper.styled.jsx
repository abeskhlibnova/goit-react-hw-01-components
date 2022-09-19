import styled from '@emotion/styled';

export const StatisticWrapperList = styled.ul`
    display: flex;
    justify-content: space-between;
    /* padding: 10px 20px; */
    padding-right: 20px;
    padding-left: 20px;
    list-style: none;
    background-color: rgb(0, 128, 0);
`;

export const StatisticWrapperItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    &:not(:last-child) {
        padding-right: 30px;
        border-right: 1px solid black;
    }
`;

export const StatisticWrapperLabel = styled.span`
    font-size: 24px;
`;
export const StatisticWrapperPercentage = styled.span`
    font-size: 30px;
    font-weight: 700;
`;

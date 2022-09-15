import styled from '@emotion/styled';

export const StatisticWrapperList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    list-style: none;
    background-color: rgb(0, 128, 0);
`;

export const StatisticWrapperItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatisticWrapperLabel = styled.span`
    font-size: 24px;
`;
export const StatisticWrapperPercentage = styled.span`
    font-size: 30px;
    font-weight: 700;
`;

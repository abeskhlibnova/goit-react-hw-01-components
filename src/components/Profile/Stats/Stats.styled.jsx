import styled from '@emotion/styled';

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    list-style: none;
    background-color: rgb(128, 128, 128, 0.3);
`;
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatsLabel = styled.span`
    font-size: 24px;
`;

export const StatsQuantity = styled.span`
    font-size: 30px;
    font-weight: 700;
`;

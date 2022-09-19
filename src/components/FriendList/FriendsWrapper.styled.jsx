import styled from '@emotion/styled';

export const FriendsWrapper = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 7px 7px 30px -11px rgba(0, 0, 0, 0.83);

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Status = styled.div`
    margin-right: 10px;
    line-height: 30px;
    width: 30px;
    height: 30px;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
    border-radius: 50px;
`;

export const Avatar = styled.img`
    width: 20%;
    margin-right: 10px;
`;

export const Name = styled.p`
    font-size: 30px;
    font-weight: 700;
`;

import styled from '@emotion/styled';

export const FriendsWrapper = styled.li``;
export const Status = styled.span`
    border-radius: 1px solid black;
    border-radius: 50%;
    background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
    width: 40%;
`;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 700;
`;

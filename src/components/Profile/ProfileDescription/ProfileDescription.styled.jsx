import styled from '@emotion/styled';

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 40%;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid rgb(0, 0, 0, 0.5);
    border-radius: 50%;
    background-color: white;
`;

export const UserName = styled.p`
    margin-bottom: 20px;
    color: rgb(0, 0, 0, 0.8);
    font-size: 40px;
`;

export const Tag = styled.p`
    margin-bottom: 10px;
    font-size: 26px;
    color: rgb(0, 0, 0, 0.5);
`;

export const Location = styled.p`
    margin-bottom: 20px;
    font-size: 26px;
    color: rgb(0, 0, 0, 0.5);
`;

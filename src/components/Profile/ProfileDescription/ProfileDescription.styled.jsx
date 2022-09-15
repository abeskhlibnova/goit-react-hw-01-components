import styled from '@emotion/styled';

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 60%;
  border: 1px solid rgb(0, 0, 0, 0.5);
  border-radius: 50%;
  background-color: white;
`;

export const UserName = styled.p`
  margin-bottom: 0;
  color: rgb(0, 0, 0, 0.8);
  font-size: 40px;
`;

export const Tag = styled.p`
  margin-bottom: 0;
  font-size: 26px;
  color: rgb(0, 0, 0, 0.5);
`;

export const Location = styled.p`
  font-size: 26px;
  color: rgb(0, 0, 0, 0.5);
`;

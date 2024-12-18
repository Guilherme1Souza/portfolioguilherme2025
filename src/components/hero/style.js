import styled from "styled-components";

export const HeroContainer = styled.aside`
display: flex;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 250px;
  margin-left: 15px;

  a {
    font-size: 25px;
    width: 15px;
    transition: 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;

export const Profile = styled.div`

`;

export const ProfileInfo = styled.div`
    display: flex;
    gap: 255px;
    margin: 150px auto 0 250px;


  > img {
    width: 256px;
    height: 256px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 104px;

    span {
      font-size: 55px;
      color: ${({ theme }) => theme.COLORS.TEXT};
    }

    strong {
      font-size: 68px;
      color: ${({ theme }) => theme.COLORS.TEXT};
    }
  }
`;  


export const ButtonDownload = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.COLORS.TEXT};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND}; 
  color: ${({ theme }) => theme.COLORS.TEXT};
  padding: 12px 24px;
  margin-left: 250px;
  cursor: pointer;
  border-radius: 50px; 
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease; 

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE}; 
    color: ${({ theme }) => theme.COLORS.WHITE}; 
    transform: scale(1.1);
  }

  &:focus {
    outline: none; 
    box-shadow: 0 0 5px ${({ theme }) => theme.COLORS.FOCUS_COLOR}; 
  }

  p {
    margin-left: 8px;
    font-size: 16px; 
  }

  svg {
    font-size: 24px; 
  }
`;

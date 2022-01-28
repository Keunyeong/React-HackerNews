import styled from "styled-components";

const HeadEl = styled.header`
  display: flex;
  align-items: center;
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 60px;
    border: 1px solid blue;
  }
  height: 120px;
  border: 1px solid blue;
  justify-content: space-between;
`;

const ImgBox = styled.img`
  @media screen and (max-width: 375px) {
    width: 28px;
    heigth: 28px;
    /* border: 1px solid blue; */
    margin: 16px 0 16px 20px;
  }
  width: 60px;
  margin: 30px 0 30px 30px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 375px) {
    margin-left: 6px;
    height: 32px;
    /* border: 1px solid green; */
  }
`;

const Title = styled.h1`
  color: #111;
  vertical-align: bottom;
  margin: 0;
  @media screen and (max-width: 375px) {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 22px;
  }
`;

const SubTitle = styled.span`
  text-align: left;
  opacity: 0.4;
  margin: 0;
  color: #111;
  @media screen and (max-width: 375px) {
    font-size: 0.2rem;
    font-weight: 300;
    line-height: 10px;
  }
`;

const OptionBox = styled.div`
  @media screen and (max-width: 375px) {
    width: 50px;
    height: 32px;
    padding: 6px 0 0 0;
    /* border: 1px solid green; */
    margin: 0 0 0 150px;
  }
  height: 120px;
  padding: 45px 15px 0 0;
  & > img {
    @media screen and (max-width: 375px) {
      width: auto;
      height: auto;
      margin: 3px;
    }
    width: 20px;
    height: 20px;
    margin: 9px;
  }
`;

const Head = () => {
  return (
    <HeadEl>
      <ImgBox src="images/HackerNewsLogo.png" alt="LOGO" />
      <TitleBox>
        <SubTitle>React</SubTitle>
        <Title>Hacker News</Title>
      </TitleBox>
      <OptionBox>
        <img src="images/DarkMode.png" alt="DARKMODE" />
        <img src="images/Help.png" alt="HELP" />
      </OptionBox>
    </HeadEl>
  );
};

export default Head;

import styled from "styled-components";
import { Link } from "react-router-dom";

const HeadEl = styled.header`
  display: flex;
  align-items: center;
  & .link {
    text-decoration: none;
    display: flex;
    /* border: 1px solid red; */
  }
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 60px;
    /* border: 1px solid blue; */
    padding: 20px;
  }
  height: 120px;
  /* border: 1px solid blue; */
  justify-content: space-between;
`;

const LogoBox = styled.img`
  @media screen and (max-width: 375px) {
    /* border: 1px solid blue; */
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 375px) {
    margin-left: 5px;
    padding-top: 3px;
    /* border: 1px solid green; */
  }
`;

const Title = styled.h1`
  font-weight: 500;
  text-align: left;
  color: #505050;
  vertical-align: bottom;
  margin: 0;
  font-style: Italic;
  @media screen and (max-width: 375px) {
    font-size: 1rem;
    line-height: 14.6px;
    /* border: 1px solid green; */
  }
`;

const OptionBox = styled.div`
  @media screen and (max-width: 375px) {
    width: 50px;
    height: 32px;
    padding: 6px 0 0 0;
    /* border: 1px solid green; */
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
      <Link className="link" to="/">
        <LogoBox src="images/HackerNewsLogo.png" alt="LOGO" />
        <TitleBox>
          <Title>ReHacker</Title>
          <Title>News</Title>
        </TitleBox>
      </Link>
      <OptionBox>
        <img src="images/DarkMode.png" alt="DARKMODE" />
        <img src="images/Help.png" alt="HELP" />
      </OptionBox>
    </HeadEl>
  );
};

export default Head;

import styled from "styled-components";
import Slider from "./Slider";
const Section = styled.div`
  margin-bottom: 16px;
`;
const TitleBox = styled.div`
  margin: 36px 20px 24px 20px;
  /* border: 1px solid blue; */
`;
const RankTitle = styled.h1`
  font-family: Times New Roman;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  margin: 0;
  text-align: left;
`;
const SlideBox = styled.div`
  @media screen and (max-width: 375px) {
    floor: left;
    height: 427px;
    width: 375px;
    background-color: #f2f3f7;
    /* margin-top: -20px; */
    padding-top: 4px;
  }
`;

const HomeRanking = ({ sort }) => {
  return (
    <Section>
      <TitleBox>
        <RankTitle>Current</RankTitle>
        <RankTitle> Total {!sort ? "Top" : "New"} 5</RankTitle>
      </TitleBox>
      <SlideBox>
        <Slider></Slider>
      </SlideBox>
    </Section>
  );
};

export default HomeRanking;

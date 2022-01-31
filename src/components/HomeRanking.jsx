import styled from "styled-components";
import Slider from "react-slick";

const TitleBox = styled.div`
  margin: 36px 20px 24px 20px;
  border: 1px solid blue;
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
    width: 375px;
    height: 427px;
  }
`;
const HomeRanking = () => {
  return (
    <>
      <TitleBox>
        <RankTitle>Current</RankTitle>
        <RankTitle> Total Top 5</RankTitle>
      </TitleBox>
      <SlideBox>
        <Slider>
          <div>
            <h1>하이</h1>
          </div>
        </Slider>
      </SlideBox>
    </>
  );
};

export default HomeRanking;

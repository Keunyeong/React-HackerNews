import styled from "styled-components";
import useSWR from "swr";

const RankContent = styled.div`
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(15, 41, 107, 0.12);
  border-radius: 24px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 375px) {
    margin: 54px 87px 73px 88px;
    height: 300px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(158.71deg, #e8ebf2 2.84%, #f2f3f7 97.53%);
    padding-top: 64px;
  }
`;
const RankNum = styled.h3`
  font-family: Roboto;
  font-style: italic;
  font-weight: normal;
  font-size: 28px;
  line-height: 28px;
  text-align: left;
  color: #ff6600;
  margin-left: 20px;
`;
const RankArticle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  width: 130px;
  margin-top: 12px;
  margin-left: 20px;
  color: #767676;
`;
const RankArticleWriter = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #999999;
  position: absolute;
  width: 160px;
  left: 20px;
  bottom: 16px;
`;

const Shadow = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  left: 75px;
  top: -10px;
  background: #ffffff;
  filter: blur(15px);
  border-radius: 24px;
  z-index: 1;
`;
const RankContents = ({ ranking, id }) => {
  let rankingNum = "00";
  if (ranking < 10) {
    rankingNum = "0" + String(ranking);
  } else {
    rankingNum = ranking;
  }
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  console.log(id);
  const { data, error } = useSWR(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);

  return (
    <div style={{ position: "relative" }}>
      <RankContent>
        <RankNum>{rankingNum}</RankNum>
        <RankArticle>{data.title}</RankArticle>
        <RankArticleWriter>{data.by}</RankArticleWriter>
      </RankContent>
      <Shadow />
    </div>
  );
};

export default RankContents;

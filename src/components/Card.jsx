import styled from "styled-components";
import useSWR from "swr";

const CardEl = styled.li`
  @media screen and (max-width: 375px) {
    width: 335px;
    /* border: 1px solid pink; */
    margin: 6px 20px;
    background: #ffffff;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 16px 12px;
  }
`;
const TitleBox = styled.div`
  @media screen and (max-width: 375px) {
    width: 303px;
  }
  & > h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #111111;
    text-align: left;
  }
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    width: 303px;
    height: 25px;
    margin-top: 12px;
    border-top: 1px solid #f0f0f6;
  }
`;

const WriterBox = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  @media screen and (max-width: 375px) {
    width: 108px;
    height: 25px;
    margin-top: 6px;
  }
  & > span {
    display: block;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #999999;
    height: 25px;
    padding-top: 7.5px;
  }
  & > img {
    width: 16px;
    height: 16px;
  }
`;

const InforBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    width: 96px;
    height: 16px;
    margin-top: 6px;
    /* border: 1px solid red; */
  }
`;

const PointCount = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    width: 45px;
  }
  & > img {
  }
  & > span {
    display: block;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    padding-top: 2px;
    color: #505050;
  }
`;
const CommentCount = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    width: 45px;
  }
  & > img {
  }
  & > span {
    display: block;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    padding-top: 2px;
    text-align: right;
    color: #ff6600;
  }
`;

const Card = ({ id }) => {
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
    <CardEl>
      <TitleBox>
        <h3>{data.title}</h3>
      </TitleBox>
      <Option>
        <WriterBox>
          <span>{data.by}</span>
          <img src="images/Arrow.png" alt="ARROW" />
        </WriterBox>
        <InforBox>
          <PointCount>
            <img src="images/PointIcon.png" alt="POINTICON" />
            <span>{data.score}</span>
          </PointCount>
          <CommentCount>
            <img src="images/CommentIcon.png" alt="COMMENTICON" />
            <span>{data.kids ? data.kids.length : 0}</span>
          </CommentCount>
        </InforBox>
      </Option>
    </CardEl>
  );
};

export default Card;

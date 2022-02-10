import { useState, useRef } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Card = ({ id, index, open }) => {
  let num = 0;
  if (index + 1 < 10) {
    num = "00" + String(index + 1);
  } else if (index + 1 > 9 && index + 1 < 100) {
    num = "0" + String(index + 1);
  } else {
    num = index + 1;
  }

  const nodeRef = useRef(null);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    fetcher
  );

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isControlled, setIsControlled] = useState(true);

  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  let urlArr = [];
  if (data.url) {
    urlArr = data.url.split("/");
  }
  const lapse = (new Date().getTime() - Number(data.time) * 1000) / 60000;
  const lapseMin = Math.floor(lapse);
  const lapseHour = Math.floor(lapseMin / 60);
  const lapseDay = Math.floor(lapseHour / 24);
  const lapseYear = Math.floor(lapseDay / 365);
  let lapseTime = 0;
  if (lapseYear >= 1) {
    lapseTime = `${lapseYear} year ${lapseDay - Number(lapseYear) * 365} day`;
  } else if (lapseDay >= 1) {
    lapseTime = lapseDay + " day";
  } else if (lapseHour >= 1) {
    lapseTime = lapseHour + " hour";
  } else {
    lapseTime = lapseMin + " minute";
  }
  return (
    <CardEl>
      <FrontBox ref={nodeRef} className="box">
        <div className="card-head">
          <div className="number">
            <h2>{num}</h2>
            <span>{`${lapseTime} ago`}</span>
          </div>
          <div className="url-link">
            <a href={data.url} target="_blank">
              {urlArr[2]}
            </a>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8.5C4 7.645 4.645 7 5.5 7H6.5C6.5 7 7 7 7 6.5C7 6 6.5 6 6.5 6H5.5C4.12 6 3 7.12 3 8.5C3 9.88 4.12 11 5.5 11H6.5C6.5 11 7 11 7 10.5C7 10 6.5 10 6.5 10H5.5C4.645 10 4 9.355 4 8.5ZM6 9H10C10 9 10.5 9 10.5 8.5C10.5 8 10 8 10 8H6C6 8 5.5 8 5.5 8.5C5.5 9 6 9 6 9ZM10.5 6H9.5C9.5 6 9 6 9 6.5C9 7 9.5 7 9.5 7H10.5C11.355 7 12 7.645 12 8.5C12 9.355 11.355 10 10.5 10H9.5C9.5 10 9 10 9 10.5C9 11 9.5 11 9.5 11H10.5C11.88 11 13 9.88 13 8.5C13 7.12 11.88 6 10.5 6Z"
                fill="#AFD8D8"
              />
            </svg>
          </div>
        </div>
        <TitleBox>
          <Link to={`/${id}`} className={`link${id}`}>
            <h3 className={`title${id}`}>{data.title}</h3>
          </Link>
        </TitleBox>
        <Option>
          <WriterBox>
            <span className={`by${id}`}>{data.by}</span>
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
      </FrontBox>
    </CardEl>
  );
};

const CardEl = styled.li`
  position: relative;
`;
const FrontBox = styled.div`
  & .card-head {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 375px) {
      width: 295px;
      margin-bottom: 8px;
    }
    & > .number {
      display: flex;
      justify-content: space-between;
      & > h2 {
        font-size: 20px;
        line-height: 22px;
        color: #ff6600;
      }
      & > span {
        display: block;
        margin: 5px 0 0 4px;
        font-size: 12px;
        line-height: 16px;
        color: rgba(255, 102, 0, 0.5);
      }
    }
    & > .url-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > a {
        display: block;
        font-size: 12px;
        line-height: 16px;
        text-align: right;
        color: #999999;
        opacity: 0.7;
        margin-top: 4px;
      }
      & > svg {
        display: flex;
      }
    }
  }
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
    transition: all 0.3s ease-out;
  }
`;

const TitleBox = styled.div`
  @media screen and (max-width: 375px) {
    width: 303px;
  }
  & h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
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

export default Card;

import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Spinner from "./Spinner";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

const CardEl = styled.li`
  position: relative;
`;
const FrontBox = styled.div`
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
const BackBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 21px;
  top: 1px;
  bottom: 1px;
  right: 21px;
  z-index: -1;
  border-radius: 18px;
  & > .rank {
    position: absolute;
    top: 0;
    left: 0;
    right: 50%;
    bottom: 0;
    background-color: #ff6600;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 24px;
    & > h2 {
      font-size: 20px;
      line-height: 22px;
      color: #ffffff;
      margin-bottom: 2px;
    }
    & > span {
      font-size: 12px;
      line-height: 12px;
      color: #ffffff;
    }
  }
  & > .link {
    position: absolute;
    top: 0;
    left: 50%;
    right: 0;
    bottom: 0;
    background-color: #afd8d8;
    border-radius: 18px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: end;
    & > img {
      margin-right: 16px;
    }
  }
`;

const TitleBox = styled.div`
  @media screen and (max-width: 375px) {
    width: 303px;
  }
  & h3 {
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

const Card = ({ id, index }) => {
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
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const handleStart = () => {
    setIsControlled(false);
  };
  const handleStop = (e) => {
    const URL = data.url
      ? data.url
      : `https://news.ycombinator.com/item?id=${id}`;
    if (position.x === -100) {
      window.open(URL, "_blank")?.focus();
    }
    if (position.x === 0 && position.y === 0) {
      const h3 = document.querySelector(`.title${id}`);
      const link = document.querySelector(`.link${id}`);
      console.log(e.target === h3);
      if (e.target === h3) {
        link.click();
      }
    } else {
      setPosition({ x: 0, y: 0 });
    }

    setIsControlled(true);
  };
  // const cardEvent = (e) => {
  //   e.preventDefault();
  //   e.target.click();
  // };
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  return (
    <CardEl>
      <Draggable
        nodeRef={nodeRef}
        position={position}
        bounds={{ left: -100, right: 100, top: 0, bottom: 0 }}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        // onMouseDown={cardEvent}
      >
        <FrontBox ref={nodeRef} className="box">
          <TitleBox>
            <Link to={`/${id}`} className={`link${id}`}>
              <h3 className={`title${id}`}>{data.title}</h3>
            </Link>
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
        </FrontBox>
      </Draggable>
      <BackBox>
        <div className="rank">
          <h2>{num}</h2>
          <span>3 hours</span>
          <span>ago</span>
        </div>
        <div className="link">
          <img src="/images/link.png" alt="LINK" />
        </div>
      </BackBox>
    </CardEl>
  );
};

export default Card;

import { useState, useEffect, isValidElement } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import styled from "styled-components";
import Comment from "./Comment";
import ReComment from "./ReComment";

const Detail = () => {
  const num = 0;
  const [count, setCount] = useState(10);
  const { id } = useParams();
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [comments, setComments] = useState("");
  useEffect(() => {
    let abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
          {
            signal: abortController.signal,
          }
        );
        const newData = await response.json();
        setData(newData);
        if (count >= newData.kids.length) {
          setComments(newData.kids);
        } else {
          setComments(newData.kids.slice(0, count));
        }
      } catch (error) {
        setError(error);
        if (error.name === "AbortError") {
          // requset를 abort하는 과정에서 에러 발생
        }
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [count]);
  function addCount() {
    setCount(count + 10);
  }
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  const lapse = (new Date().getTime() - data.time * 1000) / 60000;
  const lapseMin = Math.floor(lapse);
  const lapseHour = Math.floor(lapseMin / 60);
  let urlArr = [];
  if (data.url) {
    urlArr = data.url.split("/");
  }

  return (
    <Frame>
      <Content>
        <span>
          {lapseHour < 1 ? lapseMin + " mintes ago" : lapseHour + " hours ago"}
        </span>
        <h3>{data.title}</h3>
        <div>
          <div className="writerBox">
            <span>{data.by}</span>
            <img src="images/Arrow.png" alt="ARROW" />
          </div>
          {data.url && (
            <a href={data.url} target="_blank">
              {urlArr[2]}
            </a>
          )}
        </div>
      </Content>
      <CommentBox>
        <div className="option">
          <div className="sort">
            <div>
              <img src="images/NewCheckOn.png" alt="NEWON" />
            </div>
            <div>
              <img src="images/TopCheckOff.png" alt="TOPOFF" />
            </div>
          </div>

          <div className="comment_count">
            <img src="images/CommentIcon.png" alt="" />
            <span>{data.kids.length}</span>
          </div>
        </div>
        {comments &&
          comments.map((item) => {
            return (
              <div key={item}>
                <Comment
                  key={`comment${item}`}
                  id={item}
                  parent={data.id}
                  num={num}
                />
                <ReComment
                  key={`recomment${item}`}
                  id={item}
                  parent={data.id}
                  num={num}
                />
              </div>
            );
          })}
      </CommentBox>
      {count < data.kids.length && (
        <div className="more" onClick={addCount}>
          more
        </div>
      )}
    </Frame>
  );
};
const Frame = styled.div`
  margin: 0;
  & > .more {
    border: 1px solid #ff6600;
    border-radius: 10px;
    height: 30px;
    margin: 0 20px 20px 20px;
    text-align: center;
    line-height: 30px;
    color: #ff6600;
  }
`;
const Content = styled.div`
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  overflow: scroll;
  @media screen and (max-width: 375px) {
    margin: 0;
    padding: 24px 20px 40px 20px;
    border-radius: 0px 0px 24px 24px;
    /* border: 1px solid red; */
  }

  & > span {
    display: block;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
    color: rgba(255, 102, 0, 0.5);
  }
  & > h3 {
    text-align: left;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #111111;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    font-size: 12px;
    line-height: 16px;
    color: #767676;
    border-bottom: 1px solid #f0f0f6;
    & > .writerBox {
      display: flex;
      & > span {
        padding-top: 2px;
        margin-left: 2px;
      }
      & > img {
        margin-left: 2px;
      }
    }
    & a {
      color: #999999;
    }
  }
`;

const CommentBox = styled.div`
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.08);
  @media screen and (max-width: 375px) {
    margin: 0;
    margin-top: 8px;
    padding: 24px 20px 20px 20px;
    border-radius: 24px 24px 0px 0px;
    /* border: 1px solid red; */
  }
  & > .option {
    display: flex;
    justify-content: space-between;
    & > .sort {
      display: flex;
    }
    & > .comment_count {
      display: flex;
      & > img {
        height: 16px;
      }
      & > span {
        display: block;
        font-size: 12px;
        line-height: 16px;
        text-align: right;
        color: #ff6600;
        line-height: 16px;
        margin: 1px 0 0 3px;
      }
    }
  }
`;

export default Detail;

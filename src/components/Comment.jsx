import styled from "styled-components";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const Comment = ({ id, parent, num }) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
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
  }, []);
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  const innerText = `<p>${data.text}</p>`;
  const lapse = (new Date().getTime() - data.time * 1000) / 60000;
  const lapseMin = Math.floor(lapse);
  const lapseHour = Math.floor(lapseMin / 60);
  const gapArr = Array.from({ length: num }, (v, i) => i);

  return (
    <CommentEl>
      {gapArr.map((a, i) => {
        if (i % 2 === 0) {
          return (
            <div className="gap" key={`gap${i}`}>
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="4" height="4" rx="2" fill="#E5E5EC" />
              </svg>
            </div>
          );
        } else {
          return (
            <div className="gap" key={`gap${i}`}>
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="4" height="4" rx="2" fill="#AFD8D8" />
              </svg>
            </div>
          );
        }
      })}
      <div className="main">
        <div className="info">
          <span className="writer">{data.by}</span>
          <span className="ago">
            {lapseHour < 1
              ? lapseMin + " mintes ago"
              : lapseHour + " hours ago"}
          </span>
        </div>
        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: innerText }}
        ></div>
      </div>
    </CommentEl>
  );
};

const CommentEl = styled.div`
  border-bottom: 1px solid #f0f0f6;
  display: flex;
  overflow: scroll;
  @media screen and (max-width: 375px) {
    width: 335px;
    padding: 16px 0;
  }
  word-wrap: break-word;
  a {
    font-weight: 700;
    background-color: #c4c4c4;
    border-radius: 5px;
  }
  & > .gap {
    width: 12px;
    & > svg {
      margin: 2px 4px;
    }
  }
  & > .main {
    word-wrap: break-word;
  }
  & > .main > .info {
    display: flex;
    @media screen and (max-width: 375px) {
      margin-bottom: 8px;
    }
    & > .writer {
      display: block;
      border: 1px solid #ff6600;
      border-radius: 20px;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #ff6600;
      padding: 0 12px;
      height: 16px;
    }
    & > .ago {
      font-size: 12px;
      line-height: 16px;
      color: #999999;
      @media screen and (max-width: 375px) {
        margin-left: 8px;
        margin-top: 2px;
      }
    }
  }
  & > .main > .text {
    text-align: left;
    word-wrap: break-word;
  }
`;

export default Comment;

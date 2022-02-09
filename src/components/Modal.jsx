import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import styled from "styled-components";
const Modal = ({ openModal, close, id }) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    let abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          ` https://hacker-news.firebaseio.com/v0/user/${id}.json`,
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
  }, [id]);
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  let innerAbout = "HackerNews!";
  if (data.about) {
    innerAbout = `<p>${data.about}</p>`;
  }
  const lapse = (new Date().getTime() - Number(data.created) * 1000) / 60000;
  const lapseMin = Math.floor(lapse);
  const lapseHour = Math.floor(lapseMin / 60);
  const lapseDay = Math.floor(lapseHour / 24);
  const lapseYear = Math.floor(lapseDay / 365);
  let lapseTime = 0;
  if (lapseYear >= 1) {
    lapseTime = `${lapseYear}Y ${lapseDay - Number(lapseYear) * 365}D`;
  } else if (lapseDay >= 1) {
    lapseTime = lapseDay + "D";
  } else if (lapseHour >= 1) {
    lapseTime = lapseHour + "H";
  } else {
    lapseTime = lapseMin + "M";
  }
  return (
    <UserDetail>
      {openModal && (
        <div>
          <div className="dark"></div>
          <div className={openModal ? "modal open" : "modal"}>
            <button className="close" onClick={close}></button>
            <div className="user">
              <div className="id">
                <h3>{data.id}</h3>
                <p>profile with Hacker News</p>
              </div>
              <div className="score">
                <div className="joined">
                  <span>Joined</span>
                  <span className="data">{lapseTime}</span>
                </div>
                <div className="karma">
                  <span>Karma</span>
                  <span className="data">{data.karma}</span>
                </div>
              </div>
            </div>
            <div
              className="about"
              dangerouslySetInnerHTML={{ __html: innerAbout }}
            ></div>
            <div className="btnBox">
              <button>Submissions</button>
              <button>Favorites</button>
              <button>Comments</button>
            </div>
          </div>
        </div>
      )}
    </UserDetail>
  );
};

const UserDetail = styled.div`
  & .dark {
    position: absolute;
    z-index: 98;
    background-color: #111;
    top: 0;
    left: 0;
    opacity: 0.5;
    @media screen and (max-width: 375px) {
      width: 375px;
      height: 812px;
    }
  }
  & .modal {
    position: absolute;
    z-index: 99;
    background-color: white;
    transition: all 3s ease-out;
    @media screen and (max-width: 375px) {
      width: 375px;
      height: ${812 - 212}px;
      border-radius: 20px 20px 0 0;
      top: 812px;
      left: 0;
      font-size: 30px;
    }
    &.open {
      @media screen and (max-width: 375px) {
        top: 212px;
      }
    }
    & .close {
      width: 36px;
      height: 4px;
      background: #bbbbc0;
      border-radius: 2px;
      border: none;
      position: absolute;
      top: 8px;
      left: 170px;
    }
    & > .user {
      border-bottom: 1px solid #f0f0f6;
      margin: 60px 20px 0 20px;
      & > .id {
        & > h3 {
          font-weight: 500;
          font-size: 28px;
          line-height: 28px;
          color: #111111;
        }
        & > p {
          font-weight: 300;
          font-size: 10px;
          line-height: 10px;
          color: #bfbfbf;
        }
      }
      & > .score {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 20px;
        text-align: right;
        color: #767676;
        margin: 20px 100px;
        & .data {
          font-weight: 500;
          font-size: 20px;
          line-height: 22px;
          text-align: center;
          color: #ff6600;
        }
        & > .joined {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        & > .karma {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }

    & > .about {
      margin: 16px 20px;
      font-size: 14px;
      line-height: 20px;
      color: #767676;
      text-align: left;
    }
    & > .btnBox {
      margin: 0 20px;
      display: flex;
      flex-direction: column;
      & > button {
        margin-bottom: 8px;
      }
    }
  }
`;

export default Modal;

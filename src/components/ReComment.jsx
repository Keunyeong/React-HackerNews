import { useState, useEffect } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import Spinner from "./Spinner";

const ReComment = ({ id, num }) => {
  const renum = num + 1;
  const [childCommentNumber, setchildCommentNumber] = useState(0);
  const [openReply, setopenReply] = useState(false);
  const onClickViewMore = () => {
    setopenReply(!openReply);
  };
  // const [count, setCount] = useState(5);
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [recomments, setReComments] = useState([]);
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
        if (newData.kids) {
          setReComments(newData.kids);
          setchildCommentNumber(newData.kids.length);
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
  }, []);
  const RenderReply = (parentId) => {
    return recomments.map((comment) => (
      <div key={comment}>
        <Comment key={comment} parent={parentId} id={comment} num={renum} />
        <ReComment
          key={`re${comment}`}
          id={comment}
          parent={parentId}
          num={renum}
        />
      </div>
    ));
  };
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  return (
    <Box>
      {childCommentNumber > 0 && (
        <div key={`click${id}`} onClick={onClickViewMore} className="recomment">
          {openReply ? (
            <span>▼</span>
          ) : (
            <span>{`${childCommentNumber} comment ▶`}</span>
          )}
        </div>
      )}
      {openReply && RenderReply(id)}
    </Box>
  );
};
const Box = styled.div`
  & > .recomment {
    text-align: right;
    & > span {
      font-size: 10px;
    }
  }
`;

export default ReComment;

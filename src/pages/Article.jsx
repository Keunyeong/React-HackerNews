import styled from "styled-components";
import MainList from "../components/MainList";
import { fetchNums } from "../store/api";
import { topActions } from "../store/top-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Main = styled.div``;

const Article = () => {
  const dispatch = useDispatch();
  const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
  useEffect(() => {
    (async () => {
      const data = await fetchNums(url);
      dispatch(topActions.addJson(data));
    })();
  }, []);

  const [page, setPage] = useState(20);
  const list = useSelector((state) => state.top.json.slice(0, page));
  return (
    <Main>
      <MainList list={list}></MainList>
    </Main>
  );
};

export default Article;

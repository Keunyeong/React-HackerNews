import styled from "styled-components";
import HomeRanking from "../components/HomeRanking";
import MainList from "../components/MainList";
import { fetchNums } from "../store/api";
import { topActions } from "../store/top-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Main = styled.div`
  margin: 0;
`;

const Home = () => {
  const [page, setPage] = useState(20);
  const dispatch = useDispatch();
  const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
  useEffect(() => {
    (async () => {
      const data = await fetchNums(url);
      dispatch(topActions.addJson(data));
    })();
  }, []);
  const list = useSelector((state) => state.top.json.slice(0, page));

  return (
    <Main>
      <HomeRanking></HomeRanking>
      <MainList list={list} page={page} setPage={setPage}></MainList>
    </Main>
  );
};

export default Home;

import styled from "styled-components";
import MainList from "../components/MainList";
import { fetchNums } from "../store/api";
import { topActions } from "../store/top-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Main = styled.div``;

const Article = () => {
  const topUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
  const newUrl = "https://hacker-news.firebaseio.com/v0/newstories.json";
  const [url, setUrl] = useState(topUrl);
  const [sort, setSort] = useState(false);
  function sortConvert() {
    setSort(!sort);
    if (!sort) {
      setUrl(newUrl);
    } else {
      setUrl(topUrl);
    }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await fetchNums(url);
      dispatch(topActions.addJson(data));
    })();
  }, [sort]);

  const [page, setPage] = useState(20);
  const list = useSelector((state) => state.top.json.slice(0, page));
  return (
    <Main>
      <MainList
        list={list}
        page={page}
        setPage={setPage}
        sortConvert={sortConvert}
        sort={sort}
      ></MainList>
    </Main>
  );
};

export default Article;

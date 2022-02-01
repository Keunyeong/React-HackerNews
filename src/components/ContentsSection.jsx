import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home.jsx";
import Ask from "../pages/Ask.jsx";
import Show from "../pages/Show.jsx";
import Article from "../pages/Article.jsx";
import Jobs from "../pages/Jobs.jsx";

const Contents = styled.div`
  @media screen and (max-width: 375px) {
    width: 375px;
    height: ${812 - 44 - 60 - 40}px;
    overflow: scroll;
    /* border: 1px solid blue; */
  }
  /* border: 1px solid blue; */
`;

const ContentsSection = () => {
  return (
    <Contents>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Article" element={<Article />}></Route>
        <Route path="/show" element={<Show />}></Route>
        <Route path="/ask" element={<Ask />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
      </Routes>
    </Contents>
  );
};

export default ContentsSection;

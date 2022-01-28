import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home.jsx";
import Ask from "../pages/Ask.jsx";
import Show from "../pages/Show.jsx";
import News from "../pages/News.jsx";
import Job from "../pages/Job.jsx";

const Contents = styled.div`
  @media screen and (max-width: 375px) {
    width: 375px;
    height: ${812 - 44 - 60 - 40}px;
    border: 1px solid blue;
  }
  border: 1px solid blue;
`;

const ContentsSection = () => {
  return (
    <Contents>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/show" element={<Show />}></Route>
        <Route path="/ask" element={<Ask />}></Route>
        <Route path="/job" element={<Job />}></Route>
      </Routes>
    </Contents>
  );
};

export default ContentsSection;

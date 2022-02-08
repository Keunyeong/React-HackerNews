import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Spinner from "./Spinner";

const Detail = () => {
  const { id } = useParams();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
    fetcher
  );
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  return <div> {data.by}라우트 성공</div>;
};

export default Detail;

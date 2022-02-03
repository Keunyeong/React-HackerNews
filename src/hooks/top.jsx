import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useTop(url) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useTop;

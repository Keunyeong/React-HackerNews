export const fetchNums = async (url) => {
  const json = await fetch(url).then((response) => response.json());
  return json;
};

export const fetchArticles = async (nums, size) => {
  const objArr = await Promise.all(
    nums.slice(0, size).map((articleNum) => {
      const value = fetch(
        `https://hacker-news.firebaseio.com/v0/item/${articleNum}.json`
      ).then((response) => response.json());
      return value;
    })
  );
  return objArr;
};

export const fetchTop = async (nums) => {
  const objArr = await Promise.all(
    nums.map((articleNum) => {
      const value = fetch(
        `https://hacker-news.firebaseio.com/v0/item/${articleNum}.json`
      ).then((response) => response.json());
      return value;
    })
  );
  return objArr;
};

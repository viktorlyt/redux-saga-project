export const getLatestNewsFn = async (searchQuery) => {
  const request = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`
  );
  return request.json();
};

export const getPopularNewsFn = async () => {
  const request = await fetch(
    `https://hn.algolia.com/api/v1/search?query=&hitsPerPage=10&page=0`
  );
  return request.json();
};

import { FETCH_POSTS, NEW_POST } from "./Types";

export const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
    .then((res) => res.json())
    .then((posts) => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
    });
};

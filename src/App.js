import { Provider } from "react-redux";
import Postform from "./components/Postform";
import Posts from "./components/Posts";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>superfuture task</h1>
        <Posts />
      </div>
    </Provider>
  );
}
/*
Make an UI for the following with proper routes following these APIs.

Listing all resources ( 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5' )  with pagination.

Creating a resource ( 'https://jsonplaceholder.typicode.com/posts' ) ( 'POST' )

Updating a resource ( 'https://jsonplaceholder.typicode.com/posts/{postId}' )

Deleting a resource ( 'https://jsonplaceholder.typicode.com/posts/1' ))



NB : make sure to commit the code at each stage and use the redux to manage the API.

*/
export default App;

import AddPostForm from "./features/posts/AddPostForm";
import Posts from "./features/posts/Posts";

import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import EditPost from "./features/posts/EditPost";
import { Routes, Route } from "react-router-dom";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path="posts">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPost />} />
        </Route>
        <Route path="user" element={<UsersList />} />
      </Route>
    </Routes>
  );
}

export default App;

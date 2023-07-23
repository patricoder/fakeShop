import { useSelector } from "react-redux";
import { selectPostById } from "../posts/postsSlice";
import { selectAllPosts } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "./usersSlice";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) => {
    const allPosts = useSelector(selectAllPosts);
    return allPosts.filter((post) => post.userId === userId);
  });

  

  return ;
};

export default UserPage;

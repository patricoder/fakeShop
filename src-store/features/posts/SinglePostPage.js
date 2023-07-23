import { useDispatch, useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostsAuthor from "./PostsAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMemo } from "react";
const SinglePostPage = () => {
  //retrive postId
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p className="postCredit">
        <PostsAuthor userId={post?.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
        <Link to={`/posts/edit/${post.id}`}>Edit Post</Link>
      </p>
    </article>
  );
};

useMemo(SinglePostPage);

export default SinglePostPage;

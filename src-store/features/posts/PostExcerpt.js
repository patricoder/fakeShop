import PostsAuthor from "./PostsAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostsAuthor userId={post?.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
      <Link to={`posts/${post.id}`}> View post </Link>
    </article>
  );
};

export default PostExcerpt;

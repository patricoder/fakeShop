import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch(reactionAdded);

  const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

  const reactionEntries = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        kay={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionEntries}</div>;
};

export default ReactionButtons;

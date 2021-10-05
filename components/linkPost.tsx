import Link from "next/link";

const LinkPost = ({ postTitle, postId, postBody }) => {
  return (
    <li>
      <Link href={`/posts/[postId]`} as={`/posts/${postId}`}>
        <a>{postTitle}</a>
      </Link>
      <p>{postBody}</p>
    </li>
  );
};

export default LinkPost;
import Link from 'next/link';
import styled from 'styled-components';

const PostContent = styled.li`
  border: 1px solid rgba(112, 148, 219, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  width: 35rem;
  height: 20rem;
  overflow: hidden;

  &:nth-child(3n) {
    width: 100%;
  }
`;

const LinkContent = styled.a`
  color: #212112;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #424224;
  }
`;

const DescriptionContent = styled.p`
  font-weight: 300;
  color: black;
`;

interface DataProps {
  postId: string;
  postTitle: string;
  postBody: string;
}

const LinkPost = ({
  postId,
  postTitle,
  postBody,
}: DataProps): JSX.Element => {
  return (
    <>
      <PostContent>
        <Link href={`/posts/[postId]`} as={`/posts/${postId}`} passHref>
          <LinkContent>{postTitle}</LinkContent>
        </Link>
        <DescriptionContent>{postBody}</DescriptionContent>
      </PostContent>
    </>
  );
};

export default LinkPost;

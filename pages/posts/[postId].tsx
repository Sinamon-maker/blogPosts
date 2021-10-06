import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import MainLayout from '../../components/mainLayout';
import PostStyled from '../../styles/postStyled';
import { getPost } from '../../redux/actions/postAction';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from '../../redux/store';
import {BlogPost} from '../../interfaces/post'
import styled from 'styled-components';

const ListComment = styled.ul`
  text-decoration: none;
  margin-top: 1.5rem;
  li {
    margin-top: 1.5rem;
    padding-left: 1rem;
    font-size: 1.6rem;
  }
  li::before{
    content:'-'
  }
`;


const Post = ({ post: serverPost }: BlogPost):void => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!serverPost) dispatch(getPost(query.postId));
  }, [serverPost, dispatch, query.postId]);

  return (
    <>
      <MainLayout>
        <div>
          <PostStyled>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
          </PostStyled>
          Comments:
          <ListComment>

            {post.comments.map((comment) => (
              <li key={comment.id}>{comment.body}</li>
            ))}

          </ListComment>
        </div>
      </MainLayout>
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const response = await axios.get(
        `https://simple-blog-api.crew.red/posts/${params.postId}?_embed=comments`
      );

      store.dispatch({
        type: 'GET_POST',
        payload: response.data,
      });
      store.dispatch({ type: 'TICK', payload: 'was set in other page2' });
    }
);

import { useEffect } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import MainLayout from '../components/mainLayout';
import LinkPost from '../components/linkPost';
import ListData from '../components/listData';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions/postAction';
import { wrapper, } from '../redux/store';
import { State } from '../redux/reducers/postReducer';
import {BlogPost} from '../interfaces/post';


interface PostsProps{
  posts: BlogPost[]
}

const Index = ({ posts: serverPosts }:PostsProps):Component => {
  const dispatch = useDispatch();
  const { postReducer } = useSelector<State, State>((state) => state);
  const { posts } = postReducer;

  useEffect(() => {
    if (!serverPosts) {
      dispatch(getPosts());
    }
  }, [serverPosts, dispatch]);

  return (
    <>
      <MainLayout>
        <ListData>
          {posts.map((post) => (
            <LinkPost
              key={post.id}
              postTitle={post.title}
              postId={post.id}
              postBody={post.body}
            />
          ))}
        </ListData>
      </MainLayout>
    </>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async () => {
      const response = await axios.get(
        'https://simple-blog-api.crew.red/posts'
      );

      store.dispatch({
        type: 'GET_POSTS',
        payload: response.data,
      });
      store.dispatch({ type: 'TICK', payload: 'was set in other page1' });
    }
);

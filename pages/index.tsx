import {useState, useEffect} from 'react';
import { GetServerSideProps } from "next";
import axios from "axios";
import MainLayout from "../components/mainLayout";
import LinkPost from '../components/linkPost'
import ListData from '../components/listData'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from '../redux/actions/postAction';
import { NextPage } from "next";
import { wrapper } from "../redux/store";


const Index = ({posts:serverPosts}) => {

  const dispatch = useDispatch()
  const {posts} = useSelector((state) => state.postReducer);
   const { message } = useSelector((state) => state.postReducer);


useEffect(async () => {
  if (!serverPosts){
   dispatch(getPosts());
  }
},[]);

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
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params, ...etc }) => {
      const response = await axios.get(
        "https://simple-blog-api.crew.red/posts"
      );

      store.dispatch({
        type: "GET_POSTS",
        payload: response.data,
      });
      store.dispatch({ type: "TICK", payload: "was set in other page1" });
    }
);






import {useState, useEffect} from 'react';
import { GetServerSideProps } from "next";
import MainLayout from "../components/mainLayout";
import LinkPost from '../components/linkPost'
import ListData from '../components/listData'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from '../redux/actions/postAction'


const Index = () => {

  const dispatch = useDispatch()
  const {posts} = useSelector((state) => state.postReducer);

  console.log(posts);
useEffect(async () => {
   dispatch(getPosts());
},[]);

  return (
    <>
      <MainLayout>
        <Title>
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
        </Title>
      </MainLayout>
    </>
  );
}

export default Index;




const Title = styled.h1`
  color: white;
`;
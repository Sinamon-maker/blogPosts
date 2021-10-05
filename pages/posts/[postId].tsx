import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../../components/mainLayout";
import {getPost} from '../../redux/actions/postAction'
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";

const Post = ({post}) => {
  const { query } = useRouter();
const dispatch = useDispatch()


useEffect(async () => {
  dispatch(getPost(query.postId));
}, []);
console.log({ post });
  return (
    <>
    <MainLayout>

      <Head>
        <title>This is blogPost</title>
      </Head>
      <div>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
        <ul>
          {post.comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </div>
    </MainLayout>
    </>
  );
};

export default Post;

export async function getServerSideProps({ params }) {
  console.log(params);
  const { data: post } = await axios.get(
    `https://simple-blog-api.crew.red/posts/${params.postId}?_embed=comments`
  );
  console.log(post);
  return {
    props: { post }, // will be passed to the page component as props
  };
}

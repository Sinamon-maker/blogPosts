import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import MainLayout from "../../components/mainLayout";
import ListData from "../../components/listData";
import PostStyled from '../../styles/postStyled'
import {getPost} from '../../redux/actions/postAction'
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../../redux/store";


const Post = ({post:serverPost}) => {
  const { query } = useRouter();
const dispatch = useDispatch()
const { post } = useSelector((state) => state.postReducer);


useEffect(async () => {
  if (!serverPost) dispatch(getPost(query.postId));
}, []);


   return (
     <>
       <MainLayout>
         <div>
           <PostStyled>
             <h1>{post.title}</h1>
             <div>{post.body}</div>
           </PostStyled>
           Comments:
           <ListData>
             {post.comments.map((comment) => (
               <li key={comment.id}>{comment.body}</li>
             ))}
           </ListData>
         </div>
       </MainLayout>
     </>
   );
}

export default Post;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
   async  ({ req, res, params, ...etc }) => {

      const response =  await axios.get(`https://simple-blog-api.crew.red/posts/${params.postId}?_embed=comments`)

      store.dispatch({
  type: "GET_POST",
  payload: response.data,
});
      store.dispatch({ type: "TICK", payload: "was set in other page2" });
    }
);

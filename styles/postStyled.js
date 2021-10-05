import styled from "styled-components";

const PostContainer = styled.div`
  background: #66a3ff;
  width: 70%;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 400;
   padding: 2rem 2rem;

`;

const PostStyled = (props) => {
  return <PostContainer {...props} />;
};

export default PostStyled;

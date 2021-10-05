import styled from "styled-components";

const StyledContainer = styled.div`
width: 70%;
margin: 0 auto;
font-size: 1.8rem;
font-weight: 400;
background: white;
padding: 2rem 2rem;
`

const Container = (props) =>{
  return <StyledContainer {...props}/>
};

export default Container
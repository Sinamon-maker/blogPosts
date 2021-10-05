import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  font-size: 1.8rem;
  background: #EEF5FF;
`;

const Wrapper = (props) => {
  return <StyledWrapper {...props} />;
};

export default Wrapper;

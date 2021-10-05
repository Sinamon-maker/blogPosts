import styled from "styled-components";

const StyledList = styled.ul`
 display: flex;
 flex-direction: row;
 flex-wrap:wrap;
 justify-content: space-evenly;
 padding-left: 0;
`;

const ListData = ({ props, children }) => {
  return (
    <>
    <StyledList>
      {children}
    </StyledList>
    </>
  )
};

export default ListData;

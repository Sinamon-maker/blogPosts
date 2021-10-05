import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-direction: ${props=>props.direction ||'row'};
  flex-wrap: wrap;
  justify-content: ${props=>props.content || 'space-evenly'};
  padding-left: 0;
`;

const ListData = ({ children }: React.ReactNode):void => {
  return (
    <>
      <StyledList>{children}</StyledList>
    </>
  );
};

export default ListData;

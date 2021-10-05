import styled from 'styled-components';

const StyledNavbar = styled.nav`
  width: 100%;
  height: 7rem;
  background: #66a3ff;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const NavStyled = (props) => {
  return <StyledNavbar {...props} />;
};

export default NavStyled;

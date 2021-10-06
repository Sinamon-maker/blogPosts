import Link from 'next/link';
import Head from 'next/head';
import NavStyled from '../styles/navBar';
import Container from '../styles/container';
import Wrapper from '../styles/wrapper';
import styled from 'styled-components';

const StyledNavButton = styled.a`
  display: inline-block;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  white-space: 0.2rem;
  line-height: 2.4rem;
  cursor: pointer;
  margin: 1rem 2rem;
  &:hover,
  &:focus {
    color: #f2f2f2;
  }
`;

interface Main {
  children: JSX.Element;
}

const MainLayout = ({ children }: Main): JSX.Element => {
  return (
    <>
      <NavStyled>
        <Head>
          <title>This is blog</title>
          <meta name="keywords" content="blog, post" />
          <meta name="description" content="This is blog" />
          <meta charSet="utf-8" />
        </Head>

        <Link href="/" passHref>
          <StyledNavButton>Main</StyledNavButton>
        </Link>

        <Link href="/posts/new" passHref>
          <StyledNavButton>newPost</StyledNavButton>
        </Link>
      </NavStyled>
      <Wrapper>
        <Container>
          <main>{children}</main>
        </Container>
      </Wrapper>
    </>
  );
};

export default MainLayout;

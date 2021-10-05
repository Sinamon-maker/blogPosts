import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
  box-sizing: border-box;
  margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {

    box-sizing: border-box;
    font-size: 1.4rem;
    font-family: Georgia,serif;
  }

  h1 {
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
    text-decoration-color: none;
    margin: 1rem 0;
    display: inline-block;
  }
  *&:focus{
    outline: none;
  }
  ul{
    list-style-type:none;
  }
`;

const theme = {
  // colors: {
  //   primary: "#454746",
  // },
};

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);

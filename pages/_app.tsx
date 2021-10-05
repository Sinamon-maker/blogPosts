import { Provider} from 'react-redux'
import { createWrapper } from "next-redux-wrapper";
import store from '../redux/store'
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
  box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: red;
  }
  html {
    font-size: 62.5%;
  }
  a {
    text-decoration: none;
  }
  *&:focus{
    outline: none;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },

};

function App({ Component, pageProps }) {

  return (
    <>
<Provider store = {store}>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
</Provider>

    </>
  );
}

 const makeStore = () => store
 const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(App);
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/globals.css";
import "github-markdown-css";
import "highlight.js/styles/atom-one-light.css";
import { Header, MainTitle, Main, MainMenu, Footer } from "@/layouts/index.js";

import { mainTitle } from "@/store/document";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <MainTitle {...mainTitle} />
      </Header>
      <MainMenu />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;

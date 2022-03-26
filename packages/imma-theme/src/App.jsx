import React from "react";
import styleVariables from "./styleVariables";
import { connect, Global, css } from "frontity";
import Switch from "@frontity/components/switch";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import SpaceMonoBoldWoff from "./assets/fonts/SpaceMono-Bold.woff";
import SpaceMonoBoldWoff2 from "./assets/fonts/SpaceMono-Bold.woff2";
import SpaceMonoRegularWoff from "./assets/fonts/SpaceMono-Regular.woff";
import SpaceMonoRegularWoff2 from "./assets/fonts/SpaceMono-Regular.woff2";
import QuestrialRegularWoff from "./assets/fonts/Questrial-Regular.woff";
import QuestrialRegularWoff2 from "./assets/fonts/Questrial-Regular.woff2";

const App = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global styles={GlobalStyles} />
      <Switch>
        <Loading when={data.isFetching} />
        <Home when={data.route === "/"} />
      </Switch>
    </>
  );
};

export default connect(App);

const GlobalStyles = css`
  /* Fonts */
  @font-face {
    font-family: "SpaceMono";
    src: url(${SpaceMonoBoldWoff2}) format("woff2"),
      url(${SpaceMonoBoldWoff}) format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "SpaceMono";
    src: url(${SpaceMonoRegularWoff2}) format("woff2"),
      url(${SpaceMonoRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Questrial";
    src: url(${QuestrialRegularWoff2}) format("woff2"),
      url(${QuestrialRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Base styles */
  :root {
    font-size: 62.5%;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  &.is-locked {
    overflow: hidden;
    & body {
      margin: 0;
      /* position: absolute; */
      width: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
    }
  }
  body {
    font-family: ${styleVariables.common.standartFont};
    font-weight: 400;
    /* color: #fff; */
    font-size: 1.6rem;
    height: 100%;
    &.locked {
      overflow: hidden;
    }
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  input {
    cursor: text;
    padding: 0 15px;
  }
  textarea {
    cursor: text;
    resize: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  ::-webkit-input-placeholder {
    font-size: 1.6rem;
  }
  ::-moz-placeholder {
    font-size: 1.6rem;
    opacity: 1;
  }
  :-moz-placeholder {
    font-size: 1.6rem;
    opacity: 1;
  }
  :-ms-input-placeholder {
    font-size: 1.6rem;
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus::-moz-placeholder {
    color: transparent;
  }
  :focus:-moz-placeholder {
    color: transparent;
  }
  :focus::-ms-input-placeholder {
    color: transparent;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;

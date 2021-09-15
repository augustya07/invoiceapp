import {createGlobalStyle} from "styled-components";
import variables from './variables';


const  GlobalStyle = createGlobalStyle`
  ${variables};
html {
  box-sizing: border-box;
  width: 100%;
}

body {
  margin: 0;
  width: 100%;
  min-height:100%;
  background-color: var(--dark-bg);
  color: #ffffff;
  
}

`

export default GlobalStyle;

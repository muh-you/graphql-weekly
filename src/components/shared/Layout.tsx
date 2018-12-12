import * as React from 'react'
import { ThemeProvider, createGlobalStyle, css } from '../style/styled'

// Utils
import { theme } from '../style/theme'
import { retina } from '../style/media'

const Global = createGlobalStyle`
  :root {
    --system-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Arial, 'Helvetica Neue', sans-serif, 'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';

    -moz-tab-size: 4;
    tab-size: 4;
  }

  /*! (typography normalize) normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
  html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}

  html {
    font-family: 'Rubik', var(--system-font) !important;
    line-height: 1.15;
	  -webkit-text-size-adjust: 100%;
	  box-sizing: border-box;
    background : #F1F1F4;

    ${retina(css`
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `)};
  }

  body {
    font-family: 'Rubik', var(--system-font) !important;
    background: #E5E5E5;
  }

  body {
    padding: 0;
    margin: 0;
  }

  html, * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, p, h4, h5 {
    font-family: 'Rubik', var(--system-font) !important;
  }

  svg {
    display: inline-block;
  }

  button {
    white-space: nowrap;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        {children}
      </>
    </ThemeProvider>
  )
}

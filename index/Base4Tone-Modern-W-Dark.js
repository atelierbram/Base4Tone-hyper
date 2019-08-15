/* colorscheme: B4T_Modern_W by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Modern_W_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#201d1e';
const foregroundColor = '#a89fa2';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#72856f'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#22a50d', //  red
  '#f17eaa', //  green
  '#25bcd0', //  yellow
  '#e96396', //  blue
  '#e97263', //  magenta
  '#20a5b6', //  cyan
  '#ffe6ef', //  white
  '#766b6f', //  lightBlack
  '#3dd425', //  lightRed
  '#f5a3c2', //  lightGreen
  '#5ad2e2', //  lightYellow
  '#f17eaa', //  lightBlue
  '#f18c7e', //  lightMagenta
  '#3ccadd', //  lightCyan
  '#f6f9f9'  //  lightWhite
]

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: cursorColor,
    borderColor: borderColor,
    colors: colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node[focus="true"] {
         opacity: .33 !important;
       }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #363032 !important;
        border: none !important;
      }
      .tab_tab {
        color: #8b7e83 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #363032;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #363032;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #b2a9ac !important;
      }
      .tab_tab.tab_hasActivity {
        color: #eb75a2 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #363032 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #363032 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

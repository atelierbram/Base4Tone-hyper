/* colorscheme: B4T_Classic_T by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_T_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#201d20';
const foregroundColor = '#a79ea9';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#85776f'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#da6b2b', //  red
  '#e17ef1', //  green
  '#af88f2', //  yellow
  '#d763e9', //  blue
  '#e96396', //  magenta
  '#9767e9', //  cyan
  '#fce6ff', //  white
  '#746b76', //  lightBlack
  '#ee9968', //  lightRed
  '#eaa3f5', //  lightGreen
  '#c0a1f7', //  lightYellow
  '#e17ef1', //  lightBlue
  '#f17eaa', //  lightMagenta
  '#b792f6', //  lightCyan
  '#f7f6f9'  //  lightWhite
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
        background-color: #353036 !important;
        border: none !important;
      }
      .tab_tab {
        color: #897e8b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #353036;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #353036;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #b2a8b3 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #db75eb !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #353036 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #353036 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

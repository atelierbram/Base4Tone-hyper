/* colorscheme: B4T_Classic_D by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_D_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#21211c';
const foregroundColor = '#aba99b';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#6d8884'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#0d9c89', //  red
  '#dcc218', //  green
  '#e78b55', //  yellow
  '#c1aa15', //  blue
  '#82c115', //  magenta
  '#e16f2d', //  cyan
  '#fffce6', //  white
  '#7a7866', //  lightBlack
  '#1ed2ba', //  lightRed
  '#ebd547', //  lightGreen
  '#f0a57a', //  lightYellow
  '#dcc218', //  lightBlue
  '#95dc18', //  lightMagenta
  '#ee9968', //  lightCyan
  '#f9f7f6'  //  lightWhite
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
        background-color: #38362e !important;
        border: none !important;
      }
      .tab_tab {
        color: #908d7a !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #38362e;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #38362e;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #b5b3a6 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #cfb617 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #38362e !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #38362e !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

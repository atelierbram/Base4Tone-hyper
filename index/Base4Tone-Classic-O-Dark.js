/* colorscheme: B4T_Classic_O by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_O_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#1a1d23';
const foregroundColor = '#95a0b2';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#7c7481'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#aa52e0', //  red
  '#88b4fc', //  green
  '#1cc4ae', //  yellow
  '#659efb', //  blue
  '#9488f2', //  magenta
  '#18a592', //  cyan
  '#f0f6ff', //  white
  '#5e6c82', //  lightBlack
  '#c988f2', //  lightRed
  '#a8caff', //  lightGreen
  '#2fdac3', //  lightYellow
  '#88b4fc', //  lightBlue
  '#aba1f7', //  lightMagenta
  '#1ed2ba', //  lightCyan
  '#f6f9f8'  //  lightWhite
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
        background-color: #2b313b !important;
        border: none !important;
      }
      .tab_tab {
        color: #718098 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #2b313b;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #2b313b;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a0aaba !important;
      }
      .tab_tab.tab_hasActivity {
        color: #74a8fb !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #2b313b !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #2b313b !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

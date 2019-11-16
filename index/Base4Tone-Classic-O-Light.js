/* colorscheme: B4T_Classic_O by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_O_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#f6f7f9';
const foregroundColor = '#566276';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#908994'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#aa52e0', //  red
  '#175dcf', //  green
  '#007a6a', //  yellow
  '#2771e7', //  blue
  '#6656e1', //  magenta
  '#049582', //  cyan
  '#6d8884', //  white
  '#5e6c82', //  lightBlack
  '#c988f2', //  lightRed
  '#74a8fb', //  lightGreen
  '#1cc4ae', //  lightYellow
  '#74a8fb', //  lightBlue
  '#a095f3', //  lightMagenta
  '#1cc4ae', //  lightCyan
  '#a0aaba'  //  lightWhite
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
        background-color: #c4cad4 !important;
        border: none !important;
      }
      .tab_tab {
        color: #718098 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #dcdfe5;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #c4cad4;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #4d586a !important;
      }
      .tab_tab.tab_hasActivity {
        color: #1a68e6 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #dcdfe5 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #dcdfe5 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

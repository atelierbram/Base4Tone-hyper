/* colorscheme: B4T_Classic_S by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_S_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#1f1d20';
const foregroundColor = '#a49ea9';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#847371'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#de5745', //  red
  '#c988f2', //  green
  '#a095f3', //  yellow
  '#ba6cea', //  blue
  '#e963b8', //  magenta
  '#8275eb', //  cyan
  '#f5e6ff', //  white
  '#726b76', //  lightBlack
  '#f18c7e', //  lightRed
  '#daacf6', //  lightGreen
  '#b7aff8', //  lightYellow
  '#c988f2', //  lightBlue
  '#f17ec7', //  lightMagenta
  '#aba1f7', //  lightCyan
  '#f6f6f9'  //  lightWhite
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
        background-color: #343036 !important;
        border: none !important;
      }
      .tab_tab {
        color: #867e8b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #343036;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #343036;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #afa8b3 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #c27eed !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #343036 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #343036 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

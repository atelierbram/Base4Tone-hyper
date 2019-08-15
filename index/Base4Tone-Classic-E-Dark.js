/* colorscheme: B4T_Classic_E by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_E_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#21211c';
const foregroundColor = '#aaab9b';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#6a878a'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#1398aa', //  red
  '#c5dc18', //  green
  '#e6971a', //  yellow
  '#adc115', //  blue
  '#5cba21', //  magenta
  '#cb820b', //  cyan
  '#fcffe6', //  white
  '#787a66', //  lightBlack
  '#3ccadd', //  lightRed
  '#dced5a', //  lightGreen
  '#eaa83e', //  lightYellow
  '#c5dc18', //  lightBlue
  '#69d425', //  lightMagenta
  '#e8a02c', //  lightCyan
  '#f9f8f6'  //  lightWhite
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
        background-color: #37382e !important;
        border: none !important;
      }
      .tab_tab {
        color: #8d907a !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #37382e;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #37382e;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #b3b5a6 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #b9cf17 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #37382e !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #37382e !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

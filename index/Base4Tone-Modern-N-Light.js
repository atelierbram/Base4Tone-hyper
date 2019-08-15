/* colorscheme: B4T_Modern-N by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Modern_N_Light.js
 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#dce2e5';
const foregroundColor = '#576a75';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#94898d'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#dd407c', //  red
  '#036aa6', //  green
  '#817003', //  yellow
  '#037abf', //  blue
  '#4b60e7', //  magenta
  '#9f8a04', //  cyan
  '#85826f', //  white
  '#5f7581', //  lightBlack
  '#f17eaa', //  lightRed
  '#47b5f5', //  lightGreen
  '#cfb617', //  lightYellow
  '#47b5f5', //  lightBlue
  '#929ff7', //  lightMagenta
  '#cfb617', //  lightCyan
  '#a1b1ba'  //  lightWhite
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
        background-color: #c4ced4 !important;
        border: none !important;
      }
      .tab_tab {
        color: #728997 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #dce2e5;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #c4ced4;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #4e5f6a !important;
      }
      .tab_tab.tab_hasActivity {
        color: #0374b5 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #dce2e5 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #dce2e5 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

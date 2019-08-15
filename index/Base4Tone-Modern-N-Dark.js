/* colorscheme: B4T_Modern-N by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Modern_N_Dark.js
 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#1a2023';
const foregroundColor = '#95a7b1';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#817479'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#dd407c', //  red
  '#64c1f7', //  green
  '#cfb617', //  yellow
  '#2facf4', //  blue
  '#8493f6', //  magenta
  '#ae9809', //  cyan
  '#f0f9ff', //  white
  '#5f7581', //  lightBlack
  '#f17eaa', //  lightRed
  '#99d6fa', //  lightGreen
  '#e6ca1a', //  lightYellow
  '#64c1f7', //  lightBlue
  '#a0acf8', //  lightMagenta
  '#dcc218', //  lightCyan
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
        background-color: #2b353b !important;
        border: none !important;
      }
      .tab_tab {
        color: #728997 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #2b353b;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #2b353b;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a1b1ba !important;
      }
      .tab_tab.tab_hasActivity {
        color: #47b5f5 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #2b353b !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #2b353b !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

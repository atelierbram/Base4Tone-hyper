/* colorscheme: B4T_Classic_P by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_P_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#1c1d21';
const foregroundColor = '#9b9dab';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#7f7481'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#ca45de', //  red
  '#a0acf8', //  green
  '#25bcd0', //  yellow
  '#8493f6', //  blue
  '#a57af0', //  magenta
  '#20a5b6', //  cyan
  '#f0f2ff', //  white
  '#66697a', //  lightBlack
  '#e17ef1', //  lightRed
  '#b8c1fa', //  lightGreen
  '#5ad2e2', //  lightYellow
  '#a0acf8', //  lightBlue
  '#b792f6', //  lightMagenta
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
        background-color: #2e3038 !important;
        border: none !important;
      }
      .tab_tab {
        color: #7a7d90 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #2e3038;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #2e3038;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a6a8b5 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #929ff7 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #2e3038 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #2e3038 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

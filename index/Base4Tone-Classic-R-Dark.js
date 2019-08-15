/* colorscheme: B4T_Classic_R by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_R_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#1e1d20';
const foregroundColor = '#a29ea9';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#817479'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#dd407c', //  red
  '#b792f6', //  green
  '#929ff7', //  yellow
  '#a57af0', //  blue
  '#d763e9', //  magenta
  '#7081f0', //  cyan
  '#f2ebff', //  white
  '#6f6b76', //  lightBlack
  '#f17eaa', //  lightRed
  '#cdb4f9', //  lightGreen
  '#aeb8f9', //  lightYellow
  '#b792f6', //  lightBlue
  '#e17ef1', //  lightMagenta
  '#a0acf8', //  lightCyan
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
        background-color: #323036 !important;
        border: none !important;
      }
      .tab_tab {
        color: #837e8b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #323036;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #323036;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #aca8b3 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #af88f2 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #323036 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #323036 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

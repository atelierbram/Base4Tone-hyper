/* colorscheme: B4T_Classic_E by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_E_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#f9f9f6';
const foregroundColor = '#6d6f5d';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#809a9d'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#1398aa', //  red
  '#6a7703', //  green
  '#955d04', //  yellow
  '#7b8b04', //  blue
  '#3b890b', //  magenta
  '#b87305', //  cyan
  '#877d6e', //  white
  '#787a66', //  lightBlack
  '#3ccadd', //  lightRed
  '#b9cf17', //  lightGreen
  '#e6971a', //  lightYellow
  '#b9cf17', //  lightBlue
  '#62c723', //  lightMagenta
  '#e6971a', //  lightCyan
  '#b3b5a6'  //  lightWhite
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
        background-color: #d1d2c6 !important;
        border: none !important;
      }
      .tab_tab {
        color: #8d907a !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e4e5dc;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #d1d2c6;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #626454 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #738103 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e4e5dc !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e4e5dc !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

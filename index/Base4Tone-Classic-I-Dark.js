/* colorscheme: B4T_Classic_I by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_I_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#1d201d';
const foregroundColor = '#9fa8a0';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#6f7285'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#6577ec', //  red
  '#2bda3f', //  green
  '#b9cf17', //  yellow
  '#22bf34', //  blue
  '#23b4c7', //  magenta
  '#9bae09', //  cyan
  '#ebffed', //  white
  '#6b766c', //  lightBlack
  '#a0acf8', //  lightRed
  '#67e476', //  lightGreen
  '#cee61a', //  lightYellow
  '#2bda3f', //  lightBlue
  '#3ccadd', //  lightMagenta
  '#c5dc18', //  lightCyan
  '#f9f9f6'  //  lightWhite
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
        background-color: #303631 !important;
        border: none !important;
      }
      .tab_tab {
        color: #7e8b80 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #303631;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #303631;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a9b1aa !important;
      }
      .tab_tab.tab_hasActivity {
        color: #24cc38 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #303631 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #303631 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

/* colorscheme: B4T_Classic_F by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_F_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#1f211c';
const foregroundColor = '#a5ab9c';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#687f8d'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#0c95e4', //  red
  '#95dc18', //  green
  '#cfb617', //  yellow
  '#82c115', //  blue
  '#15bc52', //  magenta
  '#ae9809', //  cyan
  '#f6ffe6', //  white
  '#737967', //  lightBlack
  '#64c1f7', //  lightRed
  '#b5ec55', //  lightGreen
  '#e6ca1a', //  lightYellow
  '#95dc18', //  lightBlue
  '#18d85e', //  lightMagenta
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
        background-color: #34372f !important;
        border: none !important;
      }
      .tab_tab {
        color: #878e7b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #34372f;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #34372f;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #afb5a6 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #8bcf17 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #34372f !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #34372f !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

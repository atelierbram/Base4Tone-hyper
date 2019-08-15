/* colorscheme: B4T_Classic_F by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_F_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#e2e5dc';
const foregroundColor = '#686e5e';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#7e93a0'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#0c95e4', //  red
  '#4d7703', //  green
  '#817003', //  yellow
  '#598b04', //  blue
  '#048b35', //  magenta
  '#9f8a04', //  cyan
  '#85826f', //  white
  '#737967', //  lightBlack
  '#64c1f7', //  lightRed
  '#8bcf17', //  lightGreen
  '#cfb617', //  lightYellow
  '#8bcf17', //  lightBlue
  '#17cf5a', //  lightMagenta
  '#cfb617', //  lightCyan
  '#afb5a6'  //  lightWhite
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
        background-color: #ced2c6 !important;
        border: none !important;
      }
      .tab_tab {
        color: #878e7b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e2e5dc;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #ced2c6;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #5e6354 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #538103 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e2e5dc !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e2e5dc !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

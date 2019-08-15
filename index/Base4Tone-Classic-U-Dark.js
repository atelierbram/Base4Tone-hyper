/* colorscheme: B4T_Classic_U by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_U_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#201d20';
const foregroundColor = '#a99ea7';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#85776f'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#da6b2b', //  red
  '#f17ee3', //  green
  '#c27eed', //  yellow
  '#e963d9', //  blue
  '#e96375', //  magenta
  '#af55e7', //  cyan
  '#ffe6fc', //  white
  '#766b75', //  lightBlack
  '#ee9968', //  lightRed
  '#f5a3eb', //  lightGreen
  '#d19af4', //  lightYellow
  '#f17ee3', //  lightBlue
  '#f17e8e', //  lightMagenta
  '#c988f2', //  lightCyan
  '#f8f6f9'  //  lightWhite
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
        background-color: #363035 !important;
        border: none !important;
      }
      .tab_tab {
        color: #8b7e89 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #363035;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #363035;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #b3a8b2 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #eb75dd !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #363035 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #363035 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

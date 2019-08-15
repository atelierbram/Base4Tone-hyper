/* colorscheme: B4T_Classic_Q by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_Q_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#dedde4';
const foregroundColor = '#62616b';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#948990'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#dd40a4', //  red
  '#4b38dc', //  green
  '#1a68e6', //  yellow
  '#6656e1', //  blue
  '#9939d5', //  magenta
  '#397fef', //  cyan
  '#67768e', //  white
  '#6c6b76', //  lightBlack
  '#f17ec7', //  lightRed
  '#a095f3', //  lightGreen
  '#74a8fb', //  lightYellow
  '#a095f3', //  lightBlue
  '#c27eed', //  lightMagenta
  '#74a8fb', //  lightCyan
  '#a9a8b3'  //  lightWhite
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
        background-color: #c8c7d1 !important;
        border: none !important;
      }
      .tab_tab {
        color: #807e8b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #dedde4;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #c8c7d1;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #585760 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #5a49df !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #dedde4 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #dedde4 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

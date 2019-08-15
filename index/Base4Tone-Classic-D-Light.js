/* colorscheme: B4T_Classic_D by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_D_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#e5e4dc';
const foregroundColor = '#6f6d5d';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#829b98'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#0d9c89', //  red
  '#776803', //  green
  '#a05022', //  yellow
  '#8b7904', //  blue
  '#598b04', //  magenta
  '#ce672c', //  cyan
  '#85776f', //  white
  '#7a7866', //  lightBlack
  '#1ed2ba', //  lightRed
  '#cfb617', //  lightGreen
  '#e78b55', //  lightYellow
  '#cfb617', //  lightBlue
  '#8bcf17', //  lightMagenta
  '#e78b55', //  lightCyan
  '#b5b3a6'  //  lightWhite
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
        background-color: #d2d0c6 !important;
        border: none !important;
      }
      .tab_tab {
        color: #908d7a !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e5e4dc;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #d2d0c6;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #646254 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #817003 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e5e4dc !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e5e4dc !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

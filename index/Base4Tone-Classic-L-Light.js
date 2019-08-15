/* colorscheme: B4T_Classic_L by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_L_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#dce5e4';
const foregroundColor = '#5b716e';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#8a8994'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#7e70e6', //  red
  '#007061', //  green
  '#0a7f18', //  yellow
  '#00806f', //  blue
  '#2771e7', //  magenta
  '#0da01e', //  cyan
  '#748176', //  white
  '#647d79', //  lightBlack
  '#aba1f7', //  lightRed
  '#1cc4ae', //  lightGreen
  '#24cc38', //  lightYellow
  '#1cc4ae', //  lightBlue
  '#74a8fb', //  lightMagenta
  '#24cc38', //  lightCyan
  '#a4b6b4'  //  lightWhite
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
        background-color: #c6d2d0 !important;
        border: none !important;
      }
      .tab_tab {
        color: #77928e !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #dce5e4;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #c6d2d0;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #526663 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #007a6a !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #dce5e4 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #dce5e4 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

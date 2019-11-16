/* colorscheme: B4T_Classic_S by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_S_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#f8f6f9';
const foregroundColor = '#67616b';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#988886'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#de5745', //  red
  '#7524a8', //  green
  '#5a49df', //  yellow
  '#9939d5', //  blue
  '#bd2887', //  magenta
  '#7667e4', //  cyan
  '#767481', //  white
  '#726b76', //  lightBlack
  '#f18c7e', //  lightRed
  '#c27eed', //  lightGreen
  '#a095f3', //  lightYellow
  '#c27eed', //  lightBlue
  '#eb75c0', //  lightMagenta
  '#a095f3', //  lightCyan
  '#afa8b3'  //  lightWhite
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
        background-color: #cdc7d1 !important;
        border: none !important;
      }
      .tab_tab {
        color: #867e8b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e1dde4;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #cdc7d1;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #5d5760 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #8a2ac6 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e1dde4 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e1dde4 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

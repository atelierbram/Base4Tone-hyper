/* colorscheme: Base4Tone_Modern-C by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Modern_C_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#221f1c';
const foregroundColor = '#aca59a';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#6f7285'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#6577ec', //  red
  '#e8a02c', //  green
  '#eb75a2', //  yellow
  '#dc9118', //  blue
  '#1bbba6', //  magenta
  '#e64d87', //  cyan
  '#fff5e6', //  white
  '#7b7365', //  lightBlack
  '#a0acf8', //  lightRed
  '#eeb863', //  lightGreen
  '#f391b6', //  lightYellow
  '#e8a02c', //  lightBlue
  '#1ed2ba', //  lightMagenta
  '#f17eaa', //  lightCyan
  '#f9f6f7'  //  lightWhite
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
        background-color: #38342e !important;
        border: none !important;
      }
      .tab_tab {
        color: #918778 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #38342e;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #38342e;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #b6afa5 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #e6971a !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #38342e !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #38342e !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

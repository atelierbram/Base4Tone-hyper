/* colorscheme: B4T_Classic_A by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_A_Dark.js
 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#211d1c';
const foregroundColor = '#ab9e9c';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#83856f'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#91a404', //  red
  '#f18c7e', //  green
  '#eb75c0', //  yellow
  '#e97263', //  blue
  '#dc9118', //  magenta
  '#e64dad', //  cyan
  '#ffe8e6', //  white
  '#796967', //  lightBlack
  '#c5dc18', //  lightRed
  '#f5ada3', //  lightGreen
  '#f391cf', //  lightYellow
  '#f18c7e', //  lightBlue
  '#e8a02c', //  lightMagenta
  '#f17ec7', //  lightCyan
  '#f9f6f8'  //  lightWhite
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
        background-color: #37302f !important;
        border: none !important;
      }
      .tab_tab {
        color: #8e7d7b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #37302f;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #37302f;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #b5a8a6 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #eb8275 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #37302f !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #37302f !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

/* colorscheme: B4T_Classic_B by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_B_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#211e1c';
const foregroundColor = '#aba19b';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#7d8471'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#69a404', //  red
  '#ee9968', //  green
  '#eb8275', //  yellow
  '#e6854d', //  blue
  '#c1aa15', //  magenta
  '#e65e4d', //  cyan
  '#ffefe6', //  white
  '#7a6e66', //  lightBlack
  '#95dc18', //  lightRed
  '#f2b28c', //  lightGreen
  '#f39c91', //  lightYellow
  '#ee9968', //  lightBlue
  '#dcc218', //  lightMagenta
  '#f18c7e', //  lightCyan
  '#f9f6f6'  //  lightWhite
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
        background-color: #38322e !important;
        border: none !important;
      }
      .tab_tab {
        color: #90827a !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #38322e;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #38322e;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #b5aba6 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #e78b55 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #38322e !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #38322e !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

/* colorscheme: B4T_Classic_Q by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_Q_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#1d1d20';
const foregroundColor = '#9f9ea9';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#81747c'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#dd40a4', //  red
  '#aba1f7', //  green
  '#74a8fb', //  yellow
  '#9488f2', //  blue
  '#ba6cea', //  magenta
  '#5190f6', //  cyan
  '#f1f0ff', //  white
  '#6c6b76', //  lightBlack
  '#f17ec7', //  lightRed
  '#c0b8f9', //  lightGreen
  '#9cc1fc', //  lightYellow
  '#aba1f7', //  lightBlue
  '#c988f2', //  lightMagenta
  '#88b4fc', //  lightCyan
  '#f6f7f9'  //  lightWhite
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
        background-color: #313036 !important;
        border: none !important;
      }
      .tab_tab {
        color: #807e8b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #313036;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #313036;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a9a8b3 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a095f3 !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #313036 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #313036 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

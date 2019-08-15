/* colorscheme: B4T_Classic_L by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_L_Dark.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#1b2221';
const foregroundColor = '#99adab';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#767481'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#7e70e6', //  red
  '#1ed2ba', //  green
  '#24cc38', //  yellow
  '#1bbba6', //  blue
  '#659efb', //  magenta
  '#1fad2f', //  cyan
  '#ebfffc', //  white
  '#647d79', //  lightBlack
  '#aba1f7', //  lightRed
  '#5fe3d1', //  lightGreen
  '#3cdd4f', //  lightYellow
  '#1ed2ba', //  lightBlue
  '#88b4fc', //  lightMagenta
  '#2bda3f', //  lightCyan
  '#f6f9f6'  //  lightWhite
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
        background-color: #2d3937 !important;
        border: none !important;
      }
      .tab_tab {
        color: #77928e !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #2d3937;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #2d3937;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #a4b6b4 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #1cc4ae !important;
      }
      .tab_text {
        background-color: rgba(0,0,0,.175);
        border-left: 3px solid #2d3937 !important;
        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #2d3937 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

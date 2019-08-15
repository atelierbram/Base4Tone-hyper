/* colorscheme: B4T_Classic_P by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_P_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#dcdde5';
const foregroundColor = '#5d5f6f';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#938994'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#ca45de', //  red
  '#364ddd', //  green
  '#037381', //  yellow
  '#4b60e7', //  blue
  '#8049df', //  magenta
  '#088ea0', //  cyan
  '#6a878a', //  white
  '#66697a', //  lightBlack
  '#e17ef1', //  lightRed
  '#929ff7', //  lightGreen
  '#25bcd0', //  lightYellow
  '#929ff7', //  lightBlue
  '#af88f2', //  lightMagenta
  '#25bcd0', //  lightCyan
  '#a6a8b5'  //  lightWhite
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
        background-color: #c6c8d2 !important;
        border: none !important;
      }
      .tab_tab {
        color: #7a7d90 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #dcdde5;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #c6c8d2;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #545664 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #4358df !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #dcdde5 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #dcdde5 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

/* colorscheme: B4T_Classic_I by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_I_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#f6f9f6';
const foregroundColor = '#616b62';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#858799'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#6577ec', //  red
  '#0a7616', //  green
  '#738103', //  yellow
  '#0b891a', //  blue
  '#047b8b', //  magenta
  '#8d9f04', //  cyan
  '#83856f', //  white
  '#6b766c', //  lightBlack
  '#a0acf8', //  lightRed
  '#24cc38', //  lightGreen
  '#b9cf17', //  lightYellow
  '#24cc38', //  lightBlue
  '#25bcd0', //  lightMagenta
  '#b9cf17', //  lightCyan
  '#a9b1aa'  //  lightWhite
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
        background-color: #c8d0c9 !important;
        border: none !important;
      }
      .tab_tab {
        color: #7e8b80 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #dde3de;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #c8d0c9;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #576058 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #0a7f18 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #dde3de !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #dde3de !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

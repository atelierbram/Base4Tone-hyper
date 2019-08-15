/* colorscheme: Base4Tone_Modern-C by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Modern_C_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#e5e1dc';
const foregroundColor = '#70685c';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#858799'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#6577ec', //  red
  '#8b5704', //  green
  '#a82457', //  yellow
  '#9f6404', //  blue
  '#00806f', //  magenta
  '#d53975', //  cyan
  '#817479', //  white
  '#7b7365', //  lightBlack
  '#a0acf8', //  lightRed
  '#e6971a', //  lightGreen
  '#eb75a2', //  lightYellow
  '#e6971a', //  lightBlue
  '#1cc4ae', //  lightMagenta
  '#eb75a2', //  lightCyan
  '#b6afa5'  //  lightWhite
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
        background-color: #d2cdc6 !important;
        border: none !important;
      }
      .tab_tab {
        color: #918778 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e5e1dc;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #d2cdc6;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #655e53 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #955d04 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e5e1dc !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e5e1dc !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

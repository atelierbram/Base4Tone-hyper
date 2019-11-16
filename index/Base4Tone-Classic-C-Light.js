/* colorscheme: B4T_Classic_C by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_C_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#f9f8f6';
const foregroundColor = '#70685c';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#849a91'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#049f64', //  red
  '#8b5704', //  green
  '#a83324', //  yellow
  '#9f6404', //  blue
  '#7b8b04', //  magenta
  '#d64f3d', //  cyan
  '#847371', //  white
  '#7b7365', //  lightBlack
  '#18d88e', //  lightRed
  '#e6971a', //  lightGreen
  '#eb8275', //  lightYellow
  '#e6971a', //  lightBlue
  '#b9cf17', //  lightMagenta
  '#eb8275', //  lightCyan
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

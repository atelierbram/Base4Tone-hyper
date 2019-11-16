/* colorscheme: B4T_Classic_B by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_B_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#f9f7f6';
const foregroundColor = '#6f645d';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#919886'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#69a404', //  red
  '#8f481e', //  green
  '#a83324', //  yellow
  '#b15925', //  blue
  '#8b7904', //  magenta
  '#d64f3d', //  cyan
  '#847371', //  white
  '#7a6e66', //  lightBlack
  '#95dc18', //  lightRed
  '#e78b55', //  lightGreen
  '#eb8275', //  lightYellow
  '#e78b55', //  lightBlue
  '#cfb617', //  lightMagenta
  '#eb8275', //  lightCyan
  '#b5aba6'  //  lightWhite
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
        background-color: #d2cac6 !important;
        border: none !important;
      }
      .tab_tab {
        color: #90827a !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e5dfdc;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #d2cac6;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #645a54 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a05022 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e5dfdc !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e5dfdc !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

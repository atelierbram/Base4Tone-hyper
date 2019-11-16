/* colorscheme: B4T_Classic_U by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_U_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#f9f6f8';
const foregroundColor = '#6b616a';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#998c85'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#da6b2b', //  red
  '#8b1d7e', //  green
  '#8a2ac6', //  yellow
  '#bd28ac', //  blue
  '#bd283c', //  magenta
  '#a24ad9', //  cyan
  '#7c7481', //  white
  '#766b75', //  lightBlack
  '#ee9968', //  lightRed
  '#eb75dd', //  lightGreen
  '#c27eed', //  lightYellow
  '#eb75dd', //  lightBlue
  '#eb7584', //  lightMagenta
  '#c27eed', //  lightCyan
  '#b3a8b2'  //  lightWhite
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
        background-color: #d1c7d0 !important;
        border: none !important;
      }
      .tab_tab {
        color: #8b7e89 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e4dde3;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #d1c7d0;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #60575f !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a42395 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e4dde3 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e4dde3 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

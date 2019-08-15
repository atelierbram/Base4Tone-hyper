/* colorscheme: B4T_Classic_A by Bram de Haan
 * author: Bram de Haan - https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_A_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#e5dddc';
const foregroundColor = '#6e605e';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#979985'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#91a404', //  red
  '#932d1f', //  green
  '#a42375', //  yellow
  '#bd3a28', //  blue
  '#9f6404', //  magenta
  '#d4359a', //  cyan
  '#81747c', //  white
  '#796967', //  lightBlack
  '#c5dc18', //  lightRed
  '#eb8275', //  lightGreen
  '#eb75c0', //  lightYellow
  '#eb8275', //  lightBlue
  '#e6971a', //  lightMagenta
  '#eb75c0', //  lightCyan
  '#b5a8a6'  //  lightWhite
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
        background-color: #d2c7c6 !important;
        border: none !important;
      }
      .tab_tab {
        color: #8e7d7b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e5dddc;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #d2c7c6;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #635654 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a83324 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e5dddc !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e5dddc !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

/* colorscheme: B4T_Classic_T by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_T_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#e3dde4';
const foregroundColor = '#6a616b';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#998c85'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#da6b2b', //  red
  '#841f93', //  green
  '#773cdd', //  yellow
  '#b52bca', //  blue
  '#bd2861', //  magenta
  '#8c5ae2', //  cyan
  '#797481', //  white
  '#746b76', //  lightBlack
  '#ee9968', //  lightRed
  '#db75eb', //  lightGreen
  '#af88f2', //  lightYellow
  '#db75eb', //  lightBlue
  '#eb75a2', //  lightMagenta
  '#af88f2', //  lightCyan
  '#b2a8b3'  //  lightWhite
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
        background-color: #d0c7d1 !important;
        border: none !important;
      }
      .tab_tab {
        color: #897e8b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e3dde4;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #d0c7d1;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #5f5760 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #9a25ad !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e3dde4 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e3dde4 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

/* colorscheme: B4T_Classic_R by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Classic_R_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#f7f6f9';
const foregroundColor = '#65616b';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#94898d'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#dd407c', //  red
  '#6b2bda', //  green
  '#4358df', //  yellow
  '#8049df', //  blue
  '#b52bca', //  magenta
  '#5c6feb', //  cyan
  '#6f7285', //  white
  '#6f6b76', //  lightBlack
  '#f17eaa', //  lightRed
  '#af88f2', //  lightGreen
  '#929ff7', //  lightYellow
  '#af88f2', //  lightBlue
  '#db75eb', //  lightMagenta
  '#929ff7', //  lightCyan
  '#aca8b3'  //  lightWhite
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
        background-color: #cbc7d1 !important;
        border: none !important;
      }
      .tab_tab {
        color: #837e8b !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #dfdde4;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #cbc7d1;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #5b5760 !important;
      }
      .tab_tab.tab_hasActivity {
        color: #773cdd !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #dfdde4 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #dfdde4 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

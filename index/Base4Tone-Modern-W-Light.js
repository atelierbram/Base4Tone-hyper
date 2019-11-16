 * colorscheme: B4T_Modern_W by Bram de Haan
 * project: https://github.com/atelierbram/Base4Tone-hyper
 * https://github.com/atelierbram/Base4Tone-hyper/blob/master/index/Base4Tone_Modern_W_Light.js

 * template for Hyper: https://github.com/atelierbram/base16-hyperterm
*/
const backgroundColor = '#f9f6f7';
const foregroundColor = '#6b6165';
const borderColor = 'rgba(0, 0, 0, 0)';
const cursorColor = '#879985'; // opacity set in .termCSS: see under

const colors = [
  backgroundColor, //  black
  '#22a50d', //  red
  '#931f4c', //  green
  '#037381', //  yellow
  '#bd2861', //  blue
  '#bd3a28', //  magenta
  '#088ea0', //  cyan
  '#6a878a', //  white
  '#766b6f', //  lightBlack
  '#3dd425', //  lightRed
  '#eb75a2', //  lightGreen
  '#25bcd0', //  lightYellow
  '#eb75a2', //  lightBlue
  '#eb8275', //  lightMagenta
  '#25bcd0', //  lightCyan
  '#b2a9ac'  //  lightWhite
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
        background-color: #d1c7cb !important;
        border: none !important;
      }
      .tab_tab {
        color: #8b7e83 !important;
        letter-spacing: .5px;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        letter-spacing: 1px;
        background-color: #e4dde0;
        border-color: rgba(0, 0, 0, 0) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: #d1c7cb;
      }
      .tabs_title,
      .tab_icon,
      .tab_tab.tab_active {
        color: #60575b !important;
      }
      .tab_tab.tab_hasActivity {
        color: #a82457 !important;
      }
      .tab_text {
        background-color: rgba(255,255,255,.175);
        border-left: 3px solid #e4dde0 !important;
        box-shadow: inset 0px -1px 2px rgba(255,255,255,.075);
        transition: all .3s;
      }
      .tab_tab:hover .tab_text {
        border-left: 3px solid #e4dde0 !important;
      }
      .tab_tab:hover .tab_text,
      .tab_active .tab_text {
        background-color: transparent;
        box-shadow: none;
      }
      `
  })
}

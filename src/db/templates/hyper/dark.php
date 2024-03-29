<?php
echo " * template for Hyper: https://github.com/atelierbram/base16-hyperterm\n";
echo "*/\n";

echo "const backgroundColor = '$B4T_b2';\n";
echo "const foregroundColor = '$B4T_b15';\n";
echo "const borderColor = 'rgba(0, 0, 0, 0)';\n";
echo "const cursorColor = '$B4T_d11'; // opacity set in .termCSS: see under\n";
echo "\n";

echo "const colors = [\n";
echo "  backgroundColor, //  black\n";
echo "  '$B4T_D12', //  red\n";
echo "  '$B4T_B17', //  green\n";
echo "  '$B4T_A16', //  yellow\n";
echo "  '$B4T_B15', //  blue\n";
echo "  '$B4T_C15', //  magenta\n";
echo "  '$B4T_A13', //  cyan\n";
echo "  '$B4T_B23', //  white\n";
echo "  '$B4T_b10', //  lightBlack\n";
echo "  '$B4T_D17', //  lightRed\n";
echo "  '$B4T_B19', //  lightGreen\n";
echo "  '$B4T_A18', //  lightYellow\n";
echo "  '$B4T_B17', //  lightBlue\n";
echo "  '$B4T_C17', //  lightMagenta\n";
echo "  '$B4T_A17', //  lightCyan\n";
echo "  '$B4T_a23'  //  lightWhite\n";
echo "]\n";
echo "\n";

echo "exports.decorateConfig = config => {\n";
echo "  return Object.assign({}, config, {\n";
echo "    backgroundColor,\n";
echo "    foregroundColor,\n";
echo "    cursorColor: cursorColor,\n";
echo "    borderColor: borderColor,\n";
echo "    colors: colors,\n";
echo "    termCSS: `\n";
echo "      \${config.termCSS || ''}\n";
echo "      .cursor-node[focus=\"true\"] {\n";
echo "         opacity: .33 !important;\n";
echo "       }\n";
echo "    `,\n";
echo "    css: `\n";
echo "      \${config.css || ''}\n";
echo "      .header_header {\n";
echo "        top: 0;\n";
echo "        right: 0;\n";
echo "        left: 0;\n";
echo "      }\n";
echo "      .tabs_list {\n";
echo "        background-color: $B4T_b4 !important;\n";
echo "        border: none !important;\n";
echo "      }\n";
echo "      .tab_tab {\n";
echo "        color: $B4T_b12 !important;\n";
echo "        letter-spacing: .5px;\n";
echo "      }\n";
echo "      .tab_tab.tab_active {\n";
echo "        font-weight: 500;\n";
echo "        letter-spacing: 1px;\n";
echo "        background-color: $B4T_b4;\n";
echo "        border-color: rgba(0, 0, 0, 0) !important;\n";
echo "        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);\n";
echo "      }\n";
echo "      .tab_tab.tab_active::before {\n";
echo "        border-bottom-color: $B4T_b4;\n";
echo "      }\n";
echo "      .tabs_title,\n";
echo "      .tab_icon,\n";
echo "      .tab_tab.tab_active {\n";
echo "        color: $B4T_b16 !important;\n";
echo "      }\n";
echo "      .tab_tab.tab_hasActivity {\n";
echo "        color: $B4T_B16 !important;\n";
echo "      }\n";
echo "      .tab_text {\n";
echo "        background-color: rgba(0,0,0,.175);\n";
echo "        border-left: 3px solid $B4T_b4 !important;\n";
echo "        box-shadow: inset 0px -1px 2px rgba(0,0,0,.075);\n";
echo "        transition: all .3s;\n";
echo "      }\n";
echo "      .tab_tab:hover .tab_text {\n";
echo "        border-left: 3px solid $B4T_b4 !important;\n";
echo "      }\n";
echo "      .tab_tab:hover .tab_text,\n";
echo "      .tab_active .tab_text {\n";
echo "        background-color: transparent;\n";
echo "        box-shadow: none;\n";
echo "      }\n";
echo "      `\n";
echo "  })\n";
echo "}\n";

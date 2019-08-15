# Base4Tone-hyper
Colorschemes for Hyper

### Installation

1. Make a folder on your computer in `.hyper_plugins/local/`, like for example `base4tone-modern-n-dark`, and copy `Base4Tone-Modern-N-Dark.js` from the Repo index folder over there.
2. Rename `Base4Tone-Modern-N-Dark.js` to `index.js`
3. Open Hyper's preferences by pressing `Cmd+,` or manually at `~/.hyper.js`.
5. Find and Update the local-plugins array to the theme you have just chosen from the `index` folder.
```js
  localPlugins: [
    'base4tone-modern-n-dark'
  ],
```
6. Reload Hyper by pressing `Cmd + Shft + R`, or restart Hyper

### Recommended Setting

in `~/.hyper.js`

```javascript
module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

  // font family with optional fallbacks, but best install "Meslo LG L DZ" to fix crammed line-height
  // https://github.com/andreberg/Meslo-Font
    fontFamily: '"Meslo LG L DZ","Fira Mono", Consolas, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
```

### Resources
- Preview of how Base4Tone themes can look like at [Base4Tone-prism](https://atelierbram.github.io/Base4Tone-prism/b4t_classic-a/dark/)
- [github.com/andreberg/Meslo-Font](https://github.com/andreberg/Meslo-Font)

### Credits
- [@wilsonminer](https://github.com/wilsonminer) for [hyperterm-duotone-dark](https://github.com/wilsonminer/hyperterm-duotone-dark)

Released under [MIT Licence](https://atelierbram.mit-license.org)

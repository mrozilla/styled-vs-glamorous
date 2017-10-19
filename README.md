# A comparison of 💅 vs. 💄
This repo outlines the basic differences between the syntax of [💅 styled-components](https://github.com/styled-components/styled-components) and [💄 glamorous](https://github.com/paypal/glamorous) when styling ⚛️ [react](https://github.com/facebook/react) components.

## Methodology
The same simple component (a button) is built in three different ways:
- plain CSS `/src/components/ButtonCSS.css`
- glamorous `/src/components/ButtonGlamorous.js`
- styled-components `/src/components/ButtonStyled.js`

The component includes:
- various CSS selectors
- pseudo-classes (e.g. `:hover`)
- pseudo-content (e.g. `::before`)
- animations via `@keyframes`

On top of that, the glamorous and styled-components include:
- receiving values via props
- using props as triggers for values
- using props as triggers for larger chunks of code

If you'd like to compare the bundle sizes both approaches generate:
- remove the import and the instance of one button in `/src/AppScreen.js`, e.g.:
  ```javascript
  import ButtonStyled from '../components/ButtonStyled';
  ```
  and
  ```javascript
  <ButtonStyled
    color="purple"
    size="large"
    isDoingStuff={this.state.isDoingStuff}
    onClick={this.handleClick}
  >
  ```
- run `npm run build`
- run `npm run analyze`
- then repeat for the other

## Conclusion
Have a look for yourself which syntax fits you better. That's probably a good enough reason to choose one over the other. I currently like styled-components better because the package is smaller with no peerDependencies.

## Credits
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

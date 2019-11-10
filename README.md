# pak2

Press any key to anything...

## Install

```
# using npm
npm install pak2
# or yanr
yarn add pak2
```

## Usage

```js
// sample.js
const pak2 = require('pak2')

console.log('start')

pak2(() => {
  console.log('end')
})
```

![sample](https://i.gyazo.com/2e46b8c1f2a95cb0d80412261825a455.gif)

## API

### pak2(callback)

- `callback` Function

Returns `undefined`.

### pak2()

Returns Promise.

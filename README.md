# chevereto
A lightweight Node.js module to easily upload images through chevereto API

## Usage

```bash
yarn add chevereto
# Or
npm install -save chevereto
```

```javascript
const Chevereto = require('chevereto')

/*
 * With chevereto.example.com is the domain where you install chevereto
 * @param {*} host is a domain. (required)
 * @param {*} key api from chevereto. (get from https://chevereto.example.com/dashboard/settings/api) (required)
 */

const chevereto = new Chevereto({
  host: 'https://chevereto.f97.xyz',
  key: 'b7c188e055e26e6dce8b252a780dc068'
});

/**
 * @param {*} imageURL is a URL for an image. (up to 32 MB) (required)
 */
const imageURL = 'https://f97.xyz/image/avatar.png';
chevereto.upload(imageURL).then((res) => console.log(res)); 
```

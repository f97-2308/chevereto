const p = require('phin')

class Chevereto {
  constructor ({ host, key }) {
    if (typeof host !== 'string') {
      throw TypeError('host must be a string')
    }
    if (typeof key !== 'string') {
      throw TypeError('key must be a string')
    }
    this.host = host
    this.key = key
  }

  async upload (imageURL) {
    if (typeof imageURL !== 'string') {
      throw TypeError('imageURL must be a string')
    }
    const options = {
      method: 'POST',
      url: `${this.host}/api/1/upload`,
      form: {
        key: this.key,
        source: imageURL
      },
      parse: 'json'
    }
    try {
      const { body } = await p(options)
      if (body.status_code === 400) {
        return {
          success: false,
          status: 400,
          error: body
        }
      }
      return {
        success: true,
        status: 200,
        image: body
      }
    } catch (e) {
      throw TypeError(e)
    }
  }
}

module.exports = Chevereto

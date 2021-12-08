const assert = require('assert')
const Chevereto = require('../lib')
const { host, key, imageURL } = require('./config')

describe('Chevereto class', () => {
  test('it throws when host, key is not provided', () => {
    assert.throws(() => new Chevereto())
  })

  test('it throws when host, key is not a string', () => {
    assert.throws(() => new Chevereto({
      host: 1,
      key: 2
    }))
  })

  test('it rejects when image url not string', async () => {
    expect.assertions(1)
    const chevereto = new Chevereto({
      host,
      key
    })
    await expect(chevereto.upload(1)).rejects.toEqual(
      TypeError('imageURL must be a string')
    )
  })

  test('it upload success', async () => {
    const chevereto = new Chevereto({
      host,
      key
    })
    const { status } = await chevereto.upload(imageURL)
    expect(status).toBe(200)
  })

  test('it rejects when upload false', async () => {
    expect.assertions(1)
    const chevereto = new Chevereto({
      host,
      key: '...'
    })
    const { status } = await chevereto.upload(imageURL)
    expect(status).toBe(400)
  })
})

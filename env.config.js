const isProduction = process.env.NODE_ENV === 'production'

// const hostUrl = ''
const hostUrl = '/batman-list-await-template'

const backend_url = isProduction ? hostUrl : ''

module.exports = {
  'process.env.prefixLink': backend_url,
  backend_url
}

const { backend_url } = require('./env.config')
// const fetch = require('isomorphic-unfetch')
const axios = require('axios')
// const jsonData = require('/_data/batman')
const { json } = require('./_lib/dataJson')

module.exports = {
  assetPrefix: backend_url,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }

    // const url = 'https://api.tvmaze.com/search/shows?q=batman'
    // const res = await axios.get(url)
    // const data = res.data
    // const shows = data.map(entry => entry.show)

    const dirName = '/show/'
    const p_id = '[id]'
    const shows = json.map(entry => entry.show)
    shows.forEach((show) => {
      const id = show.id
      const _path = `${dirName}${id}`
      paths[_path] = {
        page: `${dirName}${p_id}`,
        query: { id: id }
      }
    })

    return paths
  }
}

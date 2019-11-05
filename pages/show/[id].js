import React from 'react'
import WrapLayout from '../../components/WrapLayout'

const axios = require('axios')
// const jsonData = require('../../_data/batman')
const { json } = require('../../_lib/dataJson')

class Post extends React.Component {
  static async getInitialProps({ query: { id } }) {
    // const { id } = context.query
    // const url = `https://api.tvmaze.com/shows/${id}`
    // const urlRes = await axios.get(url)
    // const show = urlRes.data

    const shows = json.map(entry => entry.show)
    const show = shows.find((value, index) => value.id == id)
    // console.log(show)

    return { show }
  }

  render() {
    const { show } = this.props
    return (
      <WrapLayout>
        <h1>{show.name}</h1>
        <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        <img alt="" src={show.image.medium}/>
      </WrapLayout>
    )

  }
}


export default Post


// Post.getInitialProps = async function(context) {
//   // const { id } = context.query
//   // const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   // const show = await res.json()
//   // // const show = shows.get(id)
//   // console.log(`Fetched show: ${show.name}`)
//   //
//   // return { show }
//   const { id } = context.query
//   const url = `https://api.tvmaze.com/shows/${id}`
//   const res = await axios.get(url)
// //  console.log(res)
//   const show = res.data
//   // console.log(data)
//
//   return { show }
// }
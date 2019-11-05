const fs = require('fs')
const path = require('path')
const axios = require('axios').default
// const fetch = require('isomorphic-unfetch')

const production = process.env.NODE_ENV === 'production'
const hostUrl = '/batman-list-await'
// const hostUrl = '';

const filePath = path.join(__dirname, '../_data/batman.json')
const fileSync = fs.readFileSync(filePath, 'utf8')
const jsonObj = JSON.parse(fileSync)
const shows = jsonObj.map(x => x.show)

function g_indexjs_ul_li() {
  let strToFile = ''
  shows.forEach(show => {
    const dirName = '/show/'
    const templateLi = `<li key={\`${show.id}\`}>
  <PrefixedLink href={\`${dirName}${show.id}\`}>
    <a>${show.name}</a>
  </PrefixedLink>
</li>
`
    // console.log(templateLi)
    strToFile = strToFile + templateLi
  })
  // console.log(strToFile)
  fs.writeFileSync(
    path.join(__dirname, '../_temp/indexjs_ul_li'),
    strToFile,
    'utf8'
  )
}

function g_nextconfigjs_pathmap_showid() {
  let strToFile = ''
  shows.forEach(val => {
    const dirName = '/show/'
    const page1 = `${dirName}${val.id}`
    const templateLi = `'${page1}' : {page : '${page1}'},
    `
    // console.log(templateLi)
    strToFile = strToFile + templateLi
  })
  // console.log(strToFile)
  fs.writeFileSync(
    path.join(__dirname, '../_temp/nextconfigjs_pathmap_showid'),
    strToFile,
    'utf8'
  )
}

function g_showdir_idjs() {
  shows.forEach(show => {
    const id = show.id
    const name = show.name
    const summary = show.summary
    // const htmlImgUrl = `/static/${id}.jpg`

    const templatePost = `
import WrapLayout from "../../components/WrapLayout"
import PrefixedImg from "../../components/PrefixedImg"
import React from "react"
import fetch from 'isomorphic-unfetch'

const Post${id} = (props) => {
  const {show} = props
  return (
    <WrapLayout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img alt="" src={show.image.medium}/>
    </WrapLayout>
  )
}

Post${id}.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(\`https://api.tvmaze.com/shows/${id}\`)
  const showData = await res.json()
  // const show = shows.get(id)
  const show = {}
  show.name = showData.name
  show.summary = showData.summary
  show.image = showData.image
  
  console.log(\`Fetched show: ${show.name}\`)

  return { show }
}


export default Post${id}
`

    // console.log(templatePost)
    fs.writeFileSync(
      path.join(__dirname, `../pages/show/${id}.js`),
      templatePost,
      'utf8'
    )
  })
  console.log(`g_showdir_idjs end ---`)
}

// g_showdir_idjs()

function g_showdir_idjs_image() {
  shows.map(val => {
    // get image file
    const imgId = val.id
    const imgUrl = val.image.medium

    // GET request for remote image
    axios({
      method: 'get',
      url: imgUrl,
      responseType: 'stream'
    }).then(function(response) {
      const filePath = path.join(__dirname, `../public/static/${imgId}.jpg`)
      fs.writeFileSync(filePath, null, { encoding: 'utf8' })
      response.data.pipe(fs.createWriteStream(filePath))
      console.log(`${filePath} --- `)
      // fs.writeFile(filePath, null, err => {
      //   response.data.pipe(fs.createWriteStream(filePath))
      //   console.log(`${filePath} --- `)
      // })
    })
  })
}

// g_indexjs_ul_li()
// g_nextconfigjs_pathmap_showid()
// g_showdir_idjs_image()

//
// function g_showdir_post_data_map() {
//
//   const showArr = new Map()
//   shows.map((show, index) => {
//       const id = show.id
//       const name = `\`${show.name}\``
//       const summary = `\`${show.summary}\``
//     const image = show.image
//
//       const showItem = {
//         name: name,
//         summary: summary,
//         image: image
//       }
//       showArr.set(`${show.id}`, showItem)
//
//     }
//   )
//   console.log(showArr)
//
//   const f = path.join(__dirname, `../_temp/showdir_post_data.json`)
//   fs.writeFileSync(f, JSON.stringify([...showArr]), 'utf8')
// }
// g_showdir_post_data_map()

const React = require('react')
const siteConfig = require(process.cwd() + '/siteConfig.js');

const videos = require(process.cwd() +'/video-data.js')

function createEmbed(url) {
    return url.replace("watch?v=", "embed/")
}

class Videos extends React.Component {
    render() {
        return (
            <div className="container">
               <h1>Video's</h1>
               Hier zijn video's die ik heb gemaakt of waar ik in voorkom. 
               <b> {videos.length} Video's</b>

               <div className="row">

                      {
                          videos.map((video) => {
                              return <iframe className="videos" key={video} width="300" height="150" src={createEmbed(video)} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                          })
                      }
                     
               
               </div>

            </div>
        )
    }
}

module.exports = Videos

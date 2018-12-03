const React = require('react')
const siteConfig = require(process.cwd() + '/siteConfig.js');

const videos = require(process.cwd() +'/video-data.js')

//This function takes care of converting a standar youtube video link to a embed link to be included in an iframe
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

               <div className="row center">
                   <div className="col-lg-12">

                             <a className="btn btn-primary video-control-left" href="#videoShow" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                             </a>



                             <a className="btn btn-primary video-control-right" href="#videoShow" data-slide="next">
                               <span className="carousel-control-next-icon"></span>
                             </a>


                   </div>
               </div>

               <div className="row center">
                  <div className="col-lg-12">

                <div id="videoShow" className="carousel slide" data-ride="carousel" data-interval="false">
                       
                    <div className="carousel-inner">
                        {
                            videos.map((video, index) => {
                                if (index == 0) {
                                    return (
                                        <div key={index} className="carousel-item active">
                                          <div className="embed-responsive embed-responsive-16by9">
                                             <iframe className="videos embed-responsive-item" key={video} src={createEmbed(video)} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                          </div>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className="carousel-item">
                                          <div className="embed-responsive embed-responsive-16by9">
                                             <iframe className="videos embed-responsive-item" key={video} src={createEmbed(video)} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                          </div>
                                      </div>
                                    )
                                }
                            })
                        }
                    </div>

                </div>
                     

                 </div>
               </div>

            </div>
        )
    }
}

module.exports = Videos

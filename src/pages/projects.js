import React from "react"
import "../layouts/index.css"


const folderImage = require("../../src/images/folder.png");

export default ({ data }) => {
    return(
    <div>
        <h1>Projecten waar ik trots op ben</h1>
         <p>Open 1 van de <b>{data.allFile.totalCount}</b> mapjes hieronder om een project van mij te bekijken.</p>

          <table>
             <thead>
               <tr>
                 <th></th>
                 <th>Naam</th>
                 <th>Laatst gewijzigd</th>
                 <th>Grootte</th>
               </tr>
             </thead>

             <tbody>
          {data.allFile.edges.map(({ node }, index) =>
          <tr className="collum" key={index}>
           
            <td>
               <a href={"/" + node.relativePath.split(".md")[0] + "/"}>
                <img height="64px" width="64px" src={folderImage}/>
              </a>
            </td>
          
          
            <td>
               <a href={"/" + node.relativePath.split(".md")[0] + "/"}>  
            {node.name}
               </a>
            </td>

            <td>{node.birthTime}</td>
            <td>{node.prettySize}</td>
                    
          </tr>
          )}
            </tbody>
        </table>
    </div>
    )
}


export const query = graphql`
query getAllprojects{
    allFile(
      filter:{dir: {regex: "/(projects)/"}, extension:{eq:"md"}},
      sort: {fields:[birthTime], order: DESC},
    ){
      totalCount
      edges{
        node{
          prettySize
          birthTime(fromNow:true)
          extension
          name
          relativePath
          dir
        }
      }
    }
  }
`
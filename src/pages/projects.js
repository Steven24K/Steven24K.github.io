import React from "react"
import "../layouts/index.css"


const folderImage = require("../../static/images/folder.png");

export default ({ data }) => {
  if(data.allFile != null){
    let titles = [];
    data.allMarkdownRemark.edges.map(({ node }, index) => {
      if(node.frontmatter.title != "" && node.frontmatter.title != null)titles[index] = node.frontmatter.title;
    }); 
   console.log(titles)
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
  }else{
    return(
      <h1>Helaas zijn er nog geen projecten op de website geplaatst, we werken er hard aan.</h1>
    )
  }
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
        birthTime(formatString:"DD-MM-YYYY")
        extension
        name
        relativePath
        dir
      }
    }
  }
allMarkdownRemark{
  edges{
    node{
      frontmatter{
        title
      }
    }
  }
}
  }
`
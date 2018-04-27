import React from "react"
import "../layouts/index.css"

export default ({ data }) => (
    <div>
        <h1>Blog</h1>

        <p>
            Hier plaats ik regelmatig een artikel over iets waar ik op dat moment mee bezig ben.
        </p>

        <p>
             <b> {data.allFile.totalCount}</b> posts
        </p>
             
            <ul className="blog-list">
            {data.allFile.edges.map(({ node }, index) => 
              <li className="blog-link" key={index}>
              <a href={"/" + node.relativePath.split(".md")[0] + "/"}>{node.name}</a> 
              <i> {node.birthTime}</i>
              </li>
        )}
           </ul>


    </div>
)

export const query = graphql`
    query getAllblogposts{
        allFile(
            filter:{dir: {regex: "/(blog)/"}, extension:{eq:"md"}},
            sort: {fields:[birthTime], order: DESC},
          ){
            totalCount
            edges{
              node{
                prettySize
                birthTime(formatString:"YYYY-MM-DD")
                extension
                name
                relativePath
                dir
              }
            }
          }
    }
`;
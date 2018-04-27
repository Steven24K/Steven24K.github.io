import React from "react"


export default ({ data }) =>(
    <div>
        <h1>Video's</h1>
        <p>Hier zijn video's die ik heb gemaakt of waar ik in voorkom. Er zijn <b>{data.allVideosCsv.totalCount}</b> video's.</p>


        { data.allVideosCsv.edges.map((row, index)=> 
          <iframe src={row.node.field1}></iframe>
    )}


    </div>
)

export const query = graphql`
  query getAllvideosQuery {
    allVideosCsv{
        totalCount
        edges{
          node{
             field1
             field2
          }
        }
      }
  }
`
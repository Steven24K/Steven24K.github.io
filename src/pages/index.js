import React from "react";
import Bio from "../components/bio";

export default ({ data }) => (
  <div>
    <h1>Home</h1>
    <Bio profile={data.site.siteMetadata.profilePic} cv={data.site.siteMetadata.CV}/>
  </div>
);

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        profilePic
        CV
      }
    }
  }
`


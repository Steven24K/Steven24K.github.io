import React from "react";
import LinkButton from "../components/button"
import { Router } from "react-router";



export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <div style={{
       marginLeft: 'auto',
       marginRight: 'auto', 
       }} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query getProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;
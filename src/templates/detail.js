import React from "react";
import LinkButton from "../components/button"
import { Router } from "react-router";



export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
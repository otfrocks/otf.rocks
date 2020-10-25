import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  title,
  eventspitch,
  intro,
  sommerparty,
  suggestions,
}) => (
  <div>
    {JSON.stringify(
      { title, eventspitch, intro, sommerparty, suggestions },
      null,
      2
    )}
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  eventspitch: PropTypes.shape({
    subheading: PropTypes.string,
    description: PropTypes.string,
  }),
  intro: PropTypes.shape({
    subheading: PropTypes.string,
    description: PropTypes.string,
  }),
  sommerparty: PropTypes.shape({
    subheading: PropTypes.string,
    description: PropTypes.string,
  }),
  suggestions: PropTypes.shape({
    subheading: PropTypes.string,
    description: PropTypes.string,
  }),
};

const IndexPage = ({ data }) => {
  console.log("data: ", data);
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        eventspitch={frontmatter.eventspitch}
        intro={frontmatter.intro}
        sommerparty={frontmatter.sommerparty}
        suggestions={frontmatter.suggestions}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        sommerparty {
          description
          subheading
        }
        intro {
          description
          subheading
          title
        }
        title
        eventspitch {
          description
          subheading
        }
        suggestions {
          description
          subheading
        }
      }
    }
  }
`;

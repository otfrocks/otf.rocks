import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import { HTMLContent } from "../components/Content";

export const IndexPageTemplate = ({
  title,
  eventspitch,
  intro,
  sommerparty,
  suggestions,
}) => (
  <div>
    <HTMLContent className="heading-1" content={title} />
    <HTMLContent className="heading-2" content={intro.subheading} />
    <HTMLContent className="body-text" content={intro.description} />
    
    <HTMLContent className="heading-2" content={eventspitch.subheading} />
    <HTMLContent className="body-text" content={eventspitch.description} />

    <HTMLContent className="heading-2" content={sommerparty.subheading} />
    <HTMLContent className="body-text" content={sommerparty.description} />

    <hr />

    <HTMLContent className="heading-1" content={suggestions.subheading} />
    <HTMLContent className="body-text" content={suggestions.description} />

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

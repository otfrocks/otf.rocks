import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const BoardPageTemplate = ({ title, description, boardmembers }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

BoardPageTemplate.propTypes = {
  intro: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  boardmembers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.shape({
        alt: PropTypes.string,
        childImageSharp: PropTypes.object,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        style: PropTypes.object,
      }),
    })
  ),
};

const BoardPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout>
      <BoardPageTemplate
        title={frontmatter.intro.title}
        description={frontmatter.intro.description}
        boardmembers={frontmatter.boardmembers}
      />
    </Layout>
  );
};

BoardPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BoardPage;

export const pageQuery = graphql`
  query BoardPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "board-page" } }) {
      frontmatter {
        intro {
          title
          description
        }
        boardmembers {
          label
          name
          image
        }
      }
    }
  }
`;

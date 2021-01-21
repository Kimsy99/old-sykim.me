import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout" //wrap comopennt
import Image from "../components/image" //provide lazy loading of images
import SEO from "../components/seo"

const Blog = styled.div`
  background-color: var(--white);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid var(--gray);
  /* box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12); */
  position: relative;
`

const BlogLink = styled(Link)``
const Date = styled.span`
  font-size: 12px;
  color: grey;
`
const BlogTitle = styled.h3`
  margin-bottom: 0px;
`
const BlogCategories = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  border: 2px solid var(--highlight-pink);
  padding: 5px;
  border-radius: 10px;
`
export default ({ data }) => (
  <Layout>
    <SEO title="Blogs" />
    <div>
      <h1>Blog Posts</h1>
      <h4>{data.allMarkdownRemark.totalCount} posts</h4>
      <input />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Blog key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>{node.frontmatter.title}</BlogTitle>
          </BlogLink>
          <Date>Posted on {node.frontmatter.date}</Date>
          <BlogCategories>{node.frontmatter.categories}</BlogCategories>
          <p>{node.excerpt}</p>
        </Blog>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            categories
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`

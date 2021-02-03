import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout" //wrap comopennt
import Image from "../components/image" //provide lazy loading of images
import SEO from "../components/seo"
import {
  Blog,
  BlogLink,
  Intro,
  Date,
  BlogTitle,
  BlogCategories,
} from "../components/styles/blog.styles"
import ProfilePicture from "../assets/profile-pic-2.png"

const ProfilePictureMask = styled.img`
  margin: 10px 0;
  clip-path: circle(125px at center);
  width: 350px;
  height: auto;
`
const Description = styled.div``

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Intro>
        <ProfilePictureMask src={ProfilePicture} alt="Profile picture" />
        <Description>
          <h1>Hi, I am Kim Sheng Yong</h1>
          <p>
            I am a student from Xiamen University Malaysia majoring in Software
            Engineering.
          </p>
          <p>This is my blog where i express all my ideas.</p>
          <p>
            Find me on{" "}
            <a href="https://github.com/Kimsy99" target="_blank">
              Github
            </a>
            {", "}
            <a
              href="https://www.linkedin.com/in/kim-sheng-yong-2b7895194/"
              target="_blank"
            >
              LinkedIn
            </a>
            {", and "}
            <a href="https://twitter.com/kimsyyy99" target="_blank">
              Twitter
            </a>
          </p>
          <p>
            I am open for any work and collaboration. You have have a look on my{" "}
            <a
              href="https://drive.google.com/file/d/1-KgetwrvEAToMAfz8NHebrFC6PDfai3G/view?usp=sharing"
              target="_blank"
            >
              resume
            </a>{" "}
            and also you may drop me an email to kimshengyong@gmail.com
          </p>
        </Description>
      </Intro>
      <div>
        <h1>Blog Posts</h1>
        <h4>{data.allMarkdownRemark.totalCount} posts</h4>
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

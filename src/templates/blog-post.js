import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
// import "../styles/blog.css"
import ProfilePicture from "../assets/profile-pic-2.png"
import SEO from "../components/seo"

const ProfileIcon = styled.img`
  margin: 10px 0;
  /* clip-path: circle(25px at center);
  width: 90px; */
  /* height: auto; */
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`
const WrittenBy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 23.2px;
`
const Author = styled.div`
  display: flex;
  flex-direction: column;
`
const AuthorName = styled.span`
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 0;
`
const WrittenDate = styled.span`
  font-size: 0.8rem;
  color: var(--color-gray);
`
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <WrittenBy>
          <ProfileIcon src={ProfilePicture} />
          <Author>
            <AuthorName>Kim Sheng Yong</AuthorName>
            <WrittenDate>{post.frontmatter.date}</WrittenDate>
          </Author>
        </WrittenBy>
        <hr />
        <div
          className="blogs-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

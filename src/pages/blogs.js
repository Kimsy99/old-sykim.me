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

export const SearchBox = styled.input`
  /* background-image: linear-gradient(-213deg, #5e31dc 0%, #3155dc 100%); */
  margin: 10px 0;
  font-size: 0.8em;
  border: 5px;
  &:focus {
    outline: none;
  }
`
class Blogs extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    searchField: "",
  }
  render() {
    const { searchField } = this.state
    let { data } = this.props
    const filteredPost = data.allMarkdownRemark.edges.filter(({ node }) =>
      node.frontmatter.title.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <Layout>
        <SEO title="Blogs" />
        <div>
          <h1>Blog Posts</h1>
          <h4>{filteredPost.length} posts</h4>
          <SearchBox
            type="search"
            placeholder="Search blog posts"
            onChange={e => this.setState({ searchField: e.target.value })}
          />
          {/* {data.allMarkdownRemark.edges.map(({ node }) => (
            <Blog key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>{node.frontmatter.title}</BlogTitle>
              </BlogLink>
              <Date>Posted on {node.frontmatter.date}</Date>
              <BlogCategories>{node.frontmatter.categories}</BlogCategories>
              <p>{node.excerpt}</p>
            </Blog>
          ))} */}
          {console.log(this.state.searchField)}
          {console.log(filteredPost)}
          {filteredPost.map(({ node }) => (
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
  }
}
// export default ({ data }) => (
//   <Layout>
//     <SEO title="Blogs" />
//     <div>
//       <h1>Blog Posts</h1>
//       <h4>{data.allMarkdownRemark.totalCount} posts</h4>
//       <input />
//       {data.allMarkdownRemark.edges.map(({ node }) => (
//         <Blog key={node.id}>
//           <BlogLink to={node.fields.slug}>
//             <BlogTitle>{node.frontmatter.title}</BlogTitle>
//           </BlogLink>
//           <Date>Posted on {node.frontmatter.date}</Date>
//           <BlogCategories>{node.frontmatter.categories}</BlogCategories>
//           <p>{node.excerpt}</p>
//         </Blog>
//       ))}
//     </div>
//   </Layout>
// )

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
export default Blogs

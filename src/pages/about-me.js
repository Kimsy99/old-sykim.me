import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout" //wrap comopennt
import Image from "../components/image" //provide lazy loading of images
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="About-me" />
    <div>
      <div>
        <h3>Hey, I am Kim Sheng Yong</h3>
        <h1>
          "I aim to bring impact to the society with the skills and knowledge I
          have."
        </h1>
        <p>
          I am a student from Xiamen University Malaysia majoring in Software
          Engineering.
        </p>
        <p>
          I am also the Founder and Lead of <a>XMUM Tech Club</a>.
        </p>
        <p>
          Besides, I am also Lead for{" "}
          <a>Developer Student Club of Xiamen University</a> which are supported
          by Google.
        </p>
        <p>
          My main interest are in Web and App development and also Data Science.
          You can <Link to="/my-skills">read more about my skills here</Link>,
          and also <a>all my previous projects here</a>.
        </p>
        <p>
          I have sufficient experience in organizing tech event in univerity,
          and also leading tech project. Which led me to have better experience
          adaptation in dire situations and leadership skills.
        </p>
        <p>
          I had some professional experience with Frontend and backend
          development.
        </p>
        <p>
          Other than that, I also spend my free time contributing to open source
          project. Currently I am contributing to <a>Open Promise Malaysia</a>{" "}
          as a Software Developer
        </p>
        <p>
          I shares my ideas, learning, experience and knowledge in my{" "}
          <Link to="/blogs">blog</Link>.
        </p>
        <p>
          You can follow me on{" "}
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

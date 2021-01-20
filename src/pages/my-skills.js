import React from "react"
import styled from "styled-components"
import Layout from "../components/layout" //wrap comopennt
import Image from "../components/image" //provide lazy loading of images
import SEO from "../components/seo"
import Skill from "../components/skill"
const skillsData = [
  {
    id: 1,
    title: "Web Developement",
    imgURLs: [
      "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      "https://images.tutorialedge.net/images/node.png",
      "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
      "https://images.tutorialedge.net/images/node.png",
    ],
    description:
      "Mainly experienced in Front-end development technologies such as React, Gatsby, Vuejs, HTML, CSS, JS. Other than frontend development, I am able to code in node.js back-end framework. I also have experience in Firebase(mainly integrate in React Application)",
  },
  {
    id: 3,
    title: "Web Developement",
    imgURLs: [
      "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      "https://images.tutorialedge.net/images/node.png",
      "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
      "https://images.tutorialedge.net/images/node.png",
    ],
    description:
      "Mainly experienced in Front-end development technologies such as React, Gatsby, Vuejs, HTML, CSS, JS. Other than frontend development, I am able to code in node.js back-end framework. I also have experience in Firebase(mainly integrate in React Application)",
  },
  {
    id: 2,
    title: "Web Developement",
    imgURLs: [
      "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      "https://images.tutorialedge.net/images/node.png",
      "https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png",
      "https://images.tutorialedge.net/images/node.png",
    ],
    description:
      "Mainly experienced in Front-end development technologies such as React, Gatsby, Vuejs, HTML, CSS, JS. Other than frontend development, I am able to code in node.js back-end framework. I also have experience in Firebase(mainly integrate in React Application)",
  },
]

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  justify-content: center;
`
export default () => (
  <Layout>
    <SEO title="My-Skills" />
    <SkillContainer>
      {skillsData.map(({ id, ...otherProps }) => {
        console.log(id)
        return <Skill {...otherProps} />
      })}
    </SkillContainer>
  </Layout>
)

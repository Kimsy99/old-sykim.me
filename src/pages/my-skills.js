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
    title: "Data Science, Data Engineering and AI",
    imgURLs: [
      "https://numfocus.org/wp-content/uploads/2016/07/pandas-logo-300.png",
      "https://techscript24.com/wp-content/uploads/2020/10/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/TensorFlowLogo.svg/1200px-TensorFlowLogo.svg.png",
      "https://www.vhv.rs/dpng/d/518-5188627_apache-airflow-documentation-airflow-documentation-apache-airflow-logo.png",
      "https://spark.apache.org/docs/1.6.1/api/python/_static/spark-logo-hd.png",
    ],
    description:
      "Self though Data Science, Data Engineering and AI through online courses. Heavily passionate in Data Science and Data Engineering.",
  },
  {
    id: 2,
    title: "Competitive Programming",
    imgURLs: [
      "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png",
    ],
    description:
      "1 year experience with competitive programming, participated in Google Kickstart and also some national competitive programming competition. Best achievement is 6th place (National) in Programming League 2020.",
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

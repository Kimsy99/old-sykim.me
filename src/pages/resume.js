import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeFile from "../assets/kimResume.pdf"
import styled from "styled-components"
import { Component } from "react"

const PdfViewerStyles = styled.embed`
  width: 80%;
  max-width: 800px;
  height: 120vh;
  max-height: 1440px;
  margin: auto;
`

const Resume = () => (
  <Layout>
    <SEO title="Kim Sheng Yong's Resume" />
    {console.log(window.location.origin)}
    <PdfViewerStyles
      // src="https://drive.google.com/file/d/1-KgetwrvEAToMAfz8NHebrFC6PDfai3G/view?usp=sharing"
      src={ResumeFile + `#view=FitH`}
      // type="application/pdf"
      // width=""
      // height="1440px"
    />
  </Layout>
)

export default Resume

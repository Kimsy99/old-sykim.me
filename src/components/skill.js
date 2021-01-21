import React from "react"
import styled from "styled-components"
const SkillContainer = styled.div`
  width: min(80%, 400px);
  /* border: 1px solid var(--highlight-pink); */
  background: rgba(0, 0, 0, 0.47);
  border-radius: 12px;
  padding: 20px;
`
const SkillTitle = styled.h3`
  color: var(--gray);
  margin: 0;
`
const SkillDescription = styled.p`
  color: var(--gray);
`
const Image = styled.img`
  width: 50px;
  height: auto;
  clip-path: circle(25px at center);
  margin: 0 10px 0 0;
  padding: 10px;
`
const Skill = props => {
  const { title, imgURLs, description } = props
  console.log(props)
  return (
    <SkillContainer>
      <SkillTitle>{title}</SkillTitle>
      {imgURLs.map(url => (
        <Image src={url} />
      ))}
      {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" />
    <Image src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" />
    <Image src="https://images.tutorialedge.net/images/node.png" />
    <Image src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png" />
    <Image src="https://images.tutorialedge.net/images/node.png" /> */}
      <SkillDescription>{description}</SkillDescription>
    </SkillContainer>
  )
}
export default Skill

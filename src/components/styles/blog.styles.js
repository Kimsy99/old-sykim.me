import styled from "styled-components"
import { Link } from "gatsby"
export const Blog = styled.div`
  background-color: var(--bg-dark-blue);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid var(--gray-300);
  /* box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12); */
  position: relative;
`
export const Intro = styled.div`
  /* background-image: linear-gradient(-213deg, #5e31dc 0%, #3155dc 100%); */
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
`
export const BlogLink = styled(Link)``
export const Date = styled.span`
  font-size: 12px;
  color: grey;
`
export const BlogTitle = styled.h3`
  margin-bottom: 0px;
  width: 80%;
`
export const BlogCategories = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  color: var(--color-gray);
  font-size: 0.8em;
  /* border: 2px solid var(--highlight-pink); */
  padding: 5px;
  border-radius: 10px;
`

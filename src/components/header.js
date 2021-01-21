import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
const Logo = styled(Link)`
  font-family: "Shadows Into Light", cursive;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: `white`,
      color: `var(--text-color)`,
      // background: `rgba(186, 160, 160, 0.26)`,
      // backdropFilter: `blur(250px)`,
      marginBottom: `1.45rem`,
      boxShadow: `0 4px 12px rgba(0,0,0,0.04)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontFamily: `Shadows Into Light, cursive`,
            textDecoration: `none`,
          }}
        >
          sykim
        </Link>
      </h1>
      <div
        style={{
          margin: 0,
          alignSelf: `center`,
          justifySelf: `end`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`,
        }}
      >
        <p style={{ margin: 0 }}>
          <Link
            to="/about-me"
            style={{
              textDecoration: `none`,
              margin: 0,
            }}
          >
            About me
          </Link>
        </p>
        <p style={{ margin: `0 10px` }}>
          <Link
            to="/blogs"
            style={{
              textDecoration: `none`,
              margin: 0,
            }}
          >
            Blogs
          </Link>
        </p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

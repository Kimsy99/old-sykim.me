import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#5e60ce`,
      marginBottom: `1.45rem`,
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
            color: `white`,
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
              color: `white`,
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
              color: `white`,
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

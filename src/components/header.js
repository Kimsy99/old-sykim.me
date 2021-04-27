import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React, { useState } from "react"
const Logo = styled(Link)`
  font-family: "Shadows Into Light", cursive;
  text-decoration: none;
`
const Resume = styled.a`
  border-radius: 10px;
  border: 2px solid var(--dark-blue);
  padding: 5px;
  /* font-style: bold; */
  /* color: var(--dark-blue); */
  text-decoration: none;
`
const Header = ({ siteTitle }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <header
      style={{
        backgroundColor: "var(--bg-dark-blue)",
        // color: `var(--text-color)`,
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
        className="flex items-center flex-wrap p-3 "
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
        <button
          className=" inline-flex p-3 rounded lg:hidden  ml-auto  outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link
              to="/about-me"
              className="py-2 border-b-1 border-black lg:border-0 lg:py-0"
            >
              <a className="lg:inline-flex lg:w-auto w-full h-10 px-3 py-2 rounded  font-bold items-center justify-center ">
                About
              </a>
            </Link>
            <Link
              to="/blogs"
              className="py-2 border-b-1 border-black lg:border-0 lg:py-0"
            >
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center ">
                Blogs
              </a>
            </Link>
            <Link
              to="/my-skills"
              className="py-2 border-b-1 border-black lg:border-0 lg:py-0"
            >
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center  ">
                Skills
              </a>
            </Link>
            <div className="py-2 border-b-1 border-black lg:border-0 lg:py-0">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center black ">
                <Resume
                  href="https://drive.google.com/file/d/1-KgetwrvEAToMAfz8NHebrFC6PDfai3G/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </Resume>
              </a>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            margin: 0,
            alignSelf: `center`,
            justifySelf: `end`,
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
          }}
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <p style={{ margin: `0 10px` }}>
            <Link
              to="/about-me"
              style={{
                textDecoration: `none`,
                margin: 0,
                color: "var(--text-color)",
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
                color: "var(--text-color)",
              }}
            >
              Blogs
            </Link>
          </p>
          <p style={{ margin: `0 10px` }}>
            <Link
              to="/my-skills"
              style={{
                textDecoration: `none`,
                margin: 0,
                color: "var(--text-color)",
              }}
            >
              Skills
            </Link>
          </p>
          <p style={{ margin: `0 10px` }}>
            
            <Resume
              href="https://drive.google.com/file/d/1-KgetwrvEAToMAfz8NHebrFC6PDfai3G/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Resume>
          </p>
        </div> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

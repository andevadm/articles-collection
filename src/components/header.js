import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export default function Header({ siteTitle }) {

  return (
    <header>
      <h1 className="site-title px-3 m-2">
        <Link to="/" >
            {siteTitle}
        </Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

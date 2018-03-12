import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const NavButton = ({ attached, content, logOut, to }) => (
  <Button
    as={Link}
    attached={ attached || true}
    content={content}
    onClick={content === 'Log Out' ? logOut : null}
    size='large'
    to={to}
  />
)

NavButton.propTypes = {
  attached: PropTypes.string,
  content: PropTypes.string.isRequired,
  logOut: PropTypes.func,
  to: PropTypes.string.isRequired
}

export default NavButton

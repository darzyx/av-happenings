import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const NavButton = ({ attached, content, to }) => (
  <Button
    as={Link}
    attached={ attached || true}
    content={content}
    size='large'
    to={to}
  />
)

export default NavButton

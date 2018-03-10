import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'

const menuOptions = ['top', 'featured', 'new', 'liked', 'mine']

const HomeMenu = ({ activeEventsSort, handleChangeSort }) => (
  <Menu
    attached='bottom'
    id='home-menu'
    pointing
    size='tiny'
    widths={menuOptions.length}
  >
    {
      menuOptions.map((item, key) =>
        <Menu.Item
          name={item}
          active={activeEventsSort === item}
          onClick={() => handleChangeSort(item)}
          key={key}
        />
      )
    }
  </Menu>
)

HomeMenu.propTypes = {
  activeEventsSort: PropTypes.string.isRequired,
  handleChangeSort: PropTypes.func.isRequired
}

export default HomeMenu

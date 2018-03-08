import React from 'react'
import { Menu } from 'semantic-ui-react'

const menuOptions = ['top', 'featured', 'new', 'mine']

const HomeMenu = ({ eventsSort, handleChangeSort }) => (
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
          active={eventsSort === item}
          onClick={() => handleChangeSort(item)}
          key={key}
        />
      )
    }
  </Menu>
)

export default HomeMenu

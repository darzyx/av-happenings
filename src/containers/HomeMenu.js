import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'

import '../styles/HomeMenu.css'

export default class HomeMenu extends Component {
  constructor(props) {
    super(props)

    this.state = { mouseOver: false }

    this._handleMouseOver = this._handleMouseOver.bind(this)
    this._handleMouseOut = this._handleMouseOut.bind(this)
  }

  _handleMouseOver = () => this.setState({ mouseOver: true })

  _handleMouseOut = () => this.setState({ mouseOver: false })

  render() {
    const { eventsSort, handleMenuClick, loggedIn } = this.props
    const { _handleMouseOver, _handleMouseOut } = this
    const { mouseOver } = this.state
    let menuOptions
    if (loggedIn) { menuOptions = ['top', 'hot', 'featured', 'new', 'mine'] }
    else { menuOptions = ['top', 'hot', 'featured', 'new'] }

    return (
      <Menu
        attached='bottom'
        color='orange'
        id='home-menu'
        pointing
        size='small'
        widths={menuOptions.length}
      >
      {
        menuOptions.map((item, key) => {
          const isActive = eventsSort === item

          return (
            <Menu.Item
              active={isActive}
              icon={isActive && mouseOver ? 'refresh' : null}
              key={key}
              name={isActive && mouseOver ? null : item}
              onClick={() => {
                _handleMouseOver()
                handleMenuClick(item)
              }}
              onMouseEnter={isActive ? _handleMouseOver : null}
              onMouseLeave={isActive ? _handleMouseOut : null}
            />
          )
        })
      }
      </Menu>
    )
  }
}

HomeMenu.propTypes = {
  eventsSort: PropTypes.string.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

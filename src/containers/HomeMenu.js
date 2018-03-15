import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'

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

    if (loggedIn) { menuOptions = ['top', 'featured', 'new', 'mine'] }
    else { menuOptions = ['top', 'featured', 'new'] }

    return (
      <Menu
        attached='bottom'
        color='orange'
        id='home-menu'
        pointing
        size='tiny'
        widths={menuOptions.length}
      >
      {
        menuOptions.map((item, key) =>
          <Menu.Item
            active={eventsSort === item}
            icon={eventsSort === item && mouseOver ? 'refresh' : null}
            key={key}
            name={eventsSort === item && mouseOver ? null : item}
            onClick={() => {
              _handleMouseOver()
              handleMenuClick(item)
            }}
            onMouseEnter={eventsSort === item ? _handleMouseOver: null}
            onMouseLeave={eventsSort === item ? _handleMouseOut: null}
          />
        )
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

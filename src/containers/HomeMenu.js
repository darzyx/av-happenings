import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Menu} from 'semantic-ui-react'

export default class HomeMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {mouseOver: false}

    this._handleMouseOver = this._handleMouseOver.bind(this)
    this._handleMouseOut = this._handleMouseOut.bind(this)
  }

  _handleMouseOver = () => this.setState({mouseOver: true})

  _handleMouseOut = () => this.setState({mouseOver: false})

  render() {
    const {activeEventsSort, handleMenuClick, loggedIn} = this.props
    const {_handleMouseOver, _handleMouseOut} = this
    const {mouseOver} = this.state
    let menuOptions

    if (loggedIn) {menuOptions = ['top', 'featured', 'new', 'mine']}
    else {menuOptions = ['top', 'featured', 'new']}

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
              active={activeEventsSort === item}
              icon={activeEventsSort === item && mouseOver ? 'refresh' : null}
              key={key}
              name={activeEventsSort === item && mouseOver ? null : item}
              onClick={() => {
                _handleMouseOver()
                handleMenuClick(item)
              }}
              onMouseEnter={activeEventsSort === item ? _handleMouseOver: null}
              onMouseLeave={activeEventsSort === item ? _handleMouseOut: null}
            />
          )
        }
      </Menu>
    )
  }
}

HomeMenu.propTypes = {
  activeEventsSort: PropTypes.string.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

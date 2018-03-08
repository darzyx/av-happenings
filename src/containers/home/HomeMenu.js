import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import {
  getEventsIfNeeded,
  selectEventsSort
} from '../../actions/eventsActions'

class HomeMenu extends Component {
  constructor(props) {
    super(props)

    this._handleItemClick = this._handleItemClick.bind(this)
  }

  componentDidMount() {
    const { sort } = this.props

    this.props._getEventsIfNeeded(sort)
  }

  _handleItemClick(e, { name }) {
    this.props._selectSort(name)
    this.props._getEventsIfNeeded(name)
  }

  render() {
    const { sort } = this.props

    return (
      <Menu attached='bottom' id='menu-bar' pointing size='tiny' widths='4'>
        <Menu.Item
          name='top'
          active={sort === 'top'}
          onClick={this._handleItemClick}
        />
        <Menu.Item
          name='featured'
          active={sort === 'featured'}
          onClick={this._handleItemClick}
        />
        <Menu.Item
          name='new'
          active={sort === 'new'}
          onClick={this._handleItemClick}
        />
        <Menu.Item
          name='mine'
          active={sort === 'mine'}
          onClick={this._handleItemClick}
        />
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  const { sort } = state.sortEvents
  return { sort }
}

const mapDispatchToProps = dispatch => {
  return {
    _getEventsIfNeeded: sort => { dispatch(getEventsIfNeeded(sort)) },
    _selectSort: sort => { dispatch(selectEventsSort(sort)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu)

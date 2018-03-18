import React from 'react'
import { Divider, Header, Segment } from 'semantic-ui-react'

const Footer = ({ children }) =>
  <React.Fragment>
    <Divider hidden />
    <Segment basic id='footer' inverted>
      {children}
      <Header inverted textAlign='center'>
        <Divider />
        <Header.Subheader>
          A pet project by&nbsp;
          <a id='jds-link' href='https://www.darzyx.com/'>
            Jose Dario Sanchez
          </a>
          .
        </Header.Subheader>
      </Header>
    </Segment>
  </React.Fragment>

export default Footer

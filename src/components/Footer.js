import React from 'react'
import { Divider, Header, Segment } from 'semantic-ui-react'

const Footer = ({ children }) =>
  <Segment basic id='footer' inverted>
    {children}
    <Header inverted textAlign='center'>
      <Divider />
      <Header.Subheader>
        A pet project by&nbsp;
        <a id='jds-link' href='https://www.darzyx.com/'>
          Jose Dario Sanchez
        </a>
        . MIT license.
      </Header.Subheader>
    </Header>
  </Segment>


export default Footer

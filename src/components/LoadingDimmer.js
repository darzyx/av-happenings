import React from 'react'
import { Dimmer, Header as Heading, Loader } from 'semantic-ui-react'

const LoadingDimmer = () => (
  <Dimmer active inverted>
    <Loader inverted size='large'>
      <Heading
        color='orange'
        content='Loading...'
        subheader='Antelope Valley Happenings'
      />
    </Loader>
  </Dimmer>
)

export default LoadingDimmer

import React from 'react'
import {Dimmer, Loader} from 'semantic-ui-react'

const LoadingDimmer = () => (
  <Dimmer active>
    <Loader>Loading...</Loader>
  </Dimmer>
)

export default LoadingDimmer

import React from 'react'
import { Image } from 'semantic-ui-react'

const sunImage = require('../media/sun-mini.png')

const SunIcon = () => {
  return (
    <Image id='sun-icon' src={sunImage} />
  )
}

export default SunIcon

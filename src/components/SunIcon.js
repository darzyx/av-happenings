import React from 'react'
import { Image } from 'semantic-ui-react'

import '../styles/SunIcon.css'

const sunImage = require('../media/sun-mini.png')

const SunIcon = () => <Image alt='sun' id='sun-icon' src={sunImage} />

export default SunIcon

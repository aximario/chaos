import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Headline1 } from '../material/Typography'
import Typography from './Typography'
import Icon from './Icon'

export default function Demo ({ match }) {
  return (
    <div>
      <Headline1>Demo</Headline1>
      <ul>
        <li>
          <Link to={`${match.url}/typography`}>Typography</Link>
        </li>
        <li>
          <Link to={`${match.url}/icon`}>Icon</Link>
        </li>
      </ul>
      <Route path={`${match.path}/typography`} component={Typography} />
      <Route path={`${match.path}/icon`} component={Icon} />
    </div>
  )
}
import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Headline1 } from '../material/Typography'
import Typography from './Typography'

export default function Demo ({ match }) {
  return (
    <div>
      <Headline1>Demo</Headline1>
      <ul>
        <li>
          <Link to={`${match.url}/typography`}>Typography</Link>
        </li>
      </ul>
      <Route path={`${match.path}/typography`} component={Typography} />
    </div>
  )
}
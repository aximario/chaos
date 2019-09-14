import React from 'react'
import {
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  BUTTON,
  Caption,
  OVERLINE
} from '../material/Typography'

export default function Typography () {
  return (
    <>
      <Headline1>Headline1</Headline1>
      <Headline2>Headline2</Headline2>
      <Headline3>Headline3</Headline3>
      <Headline4>Headline4</Headline4>
      <Headline5>Headline5</Headline5>
      <Headline6>Headline6</Headline6>
      <div>
        <Subtitle1>Subtitle1</Subtitle1>
      </div>
      <div>
        <Subtitle2>Subtitle2</Subtitle2>
      </div>
      <div>
        <Body1>Body1</Body1>
      </div>
      <div>
        <Body2>Body2</Body2>
      </div>
      <div>
        <BUTTON>BUTTON</BUTTON>
      </div>
      <div>
        <Caption>Caption</Caption>
      </div>
      <div>
        <OVERLINE>OVERLINE</OVERLINE>
      </div>
    </>
  )
}
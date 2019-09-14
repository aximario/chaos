import styled from 'styled-components'
import { ff, c, m, p } from '../styleProps'

function toRem (px) {
  return `${px * 0.0625}rem`
}

export const Headline1 = styled.h1`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: 300;
  font-size: ${toRem(96)};
  letter-spacing: ${toRem(-1.5)};
`

export const Headline2 = styled.h2`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: 300;
  font-size: ${toRem(60)};
  letter-spacing: ${toRem(-0.5)};
`

export const Headline3 = styled.h3`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: normal;
  font-size: ${toRem(48)};
  letter-spacing: 0;
`

export const Headline4 = styled.h4`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: normal;
  font-size: ${toRem(34)};
  letter-spacing: ${toRem(0.25)};
`

export const Headline5 = styled.h5`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: normal;
  font-size: ${toRem(24)};
  letter-spacing: 0;
`

export const Headline6 = styled.h6`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: 500;
  font-size: ${toRem(20)};
  letter-spacing: ${toRem(0.15)};
`

export const Subtitle1 = styled.span`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: normal;
  font-size: ${toRem(16)};
  letter-spacing: ${toRem(0.15)};
`

export const Subtitle2 = styled.span`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: 500;
  font-size: ${toRem(14)};
  letter-spacing: ${toRem(0.1)};
`

export const Body1 = styled.span`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: normal;
  font-size: ${toRem(16)};
  letter-spacing: ${toRem(0.5)};
`

export const Body2 = styled.span`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: normal;
  font-size: ${toRem(14)};
  letter-spacing: ${toRem(0.25)};
`

export const BUTTON = styled.span`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: 500;
  font-size: ${toRem(14)};
  letter-spacing: ${toRem(1.25)};
`

export const Caption = styled.span`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: normal;
  font-size: ${toRem(12)};
  letter-spacing: ${toRem(0.4)};
`

export const OVERLINE = styled.span`
  margin: 0;
  ${m}
  padding: 0;
  ${p}
  font-family: Roboto;
  ${ff}
  ${c}
  font-weight: normal;
  font-size: ${toRem(10)};
  letter-spacing: ${toRem(1.5)};
`
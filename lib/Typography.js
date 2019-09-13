import styled from 'styled-components'

function toRem (px) {
  return `${px * 0.0625}rem`
}

export const Headline1 = styled.h1`
  font-family: Roboto;
  font-weight: lighter;
  font-size: ${toRem(96)};
  letter-spacing: -1.5;
`

export const Headline2 = styled.h2`
  font-family: Roboto;
  font-weight: lighter;
  font-size: ${toRem(60)};
  letter-spacing: -0.5;
`

export const Headline3 = styled.h3`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${toRem(48)};
  letter-spacing: 0;
`

export const Headline4 = styled.h4`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${toRem(34)};
  letter-spacing: 0.25;
`

export const Headline5 = styled.h5`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${toRem(24)};
  letter-spacing: 0;
`

export const Headline6 = styled.h6`
  font-family: Roboto;
  font-weight: bold;
  font-size: ${toRem(20)};
  letter-spacing: 0.15;
`

export const Subtitle1 = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${toRem(16)};
  letter-spacing: 0.15;
`

export const Subtitle2 = styled.span`
  font-family: Roboto;
  font-weight: bold;
  font-size: ${toRem(14)};
  letter-spacing: 0.1;
`

export const Body1 = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${toRem(16)};
  letter-spacing: 0.5;
`

export const Body2 = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${toRem(14)};
  letter-spacing: 0.25;
`

export const BUTTON = styled.span`
  font-family: Roboto;
  font-weight: bold;
  font-size: ${toRem(14)};
  letter-spacing: 1.25;
`

export const Caption = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${toRem(12)};
  letter-spacing: 0.4;
`

export const OVERLINE = styled.span`
  font-family: Roboto;
  font-weight: normal;
  font-size: ${toRem(10)};
  letter-spacing: 1.5;
`